<template>
  <Header />
  <div class="payment-page">
    <h1>Resultado de la Transacción</h1>
    <div v-if="loading" class="loading">
      <p>Cargando...</p>
    </div>
    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
    <div v-else class="transaction-details">
      <p><strong>ID de la Transacción:</strong> {{ transactionId }}</p>
      <p><strong>Estado:</strong> <span :class="transactionStatusClass">{{ translatedStatus }}</span></p>
      <p class="redirect-message">
        Serás redirigido en {{ countdown }} segundos...
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
const transactionId = ref('')
const transactionStatus = ref('')
const loading = ref(true)
const error = ref('')
const { publicTransactionEndpoint } = useEnvConfig()
const countdown = ref(5)

const transactionStatusClass = computed(() => {
  return {
    'status-approved': transactionStatus.value === 'APPROVED',
    'status-declined': transactionStatus.value === 'DECLINED',
    'status-voided': transactionStatus.value === 'VOIDED',
    'status-error': transactionStatus.value === 'ERROR'
  }
})

const translatedStatus = computed(() => {
  switch (transactionStatus.value) {
    case 'APPROVED':
      return 'APROBADA'
    case 'DECLINED':
      return 'RECHAZADA'
    case 'VOIDED':
      return 'ANULADA'
    case 'ERROR':
      return 'ERROR'
    default:
      return transactionStatus.value
  }
})

const fetchTransactionStatus = async (id: string) => {
  try {
    const response = await fetch(`${publicTransactionEndpoint}/${id}`)
    if (!response.ok) {
      throw new Error('Error al obtener el estado de la transacción')
    }
    const data = await response.json()
    transactionStatus.value = data.data.status
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
    const interval = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value -= 1
      } else {
        clearInterval(interval)
        router.push('/')
      }
    }, 1000)
  }
}

onMounted(() => {
  const id = route.query.id as string
  if (id) {
    transactionId.value = id
    fetchTransactionStatus(id)
  } else {
    loading.value = false
    error.value = 'ID de transacción no proporcionado en la URL'
  }
})
</script>

<style lang="scss" scoped>
.payment-page {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10rem 4rem 2rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  height: calc(100vh - 75px);
  overflow: hidden;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .loading, .error-message, .transaction-details {
    padding: 2rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fafafa;
  }

  .loading p, .error-message p {
    font-size: 1.5rem;
    color: #666;
  }

  .error-message {
    border-color: #f44336;
    background-color: #ffebee;
    color: #f44336;
  }

  .transaction-details p {
    font-size: 1.5rem;
    color: #555;
    margin: 0.5rem 0;

    strong {
      color: #333;
    }

    span {
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }
  }

  .status-approved {
    color: #4caf50;
    background-color: #e8f5e9;
  }

  .status-declined {
    color: #f44336;
    background-color: #ffebee;
  }

  .status-voided {
    color: #ff9800;
    background-color: #fff3e0;
  }

  .status-error {
    color: #9e9e9e;
    background-color: #f5f5f5;
  }
}
</style>
