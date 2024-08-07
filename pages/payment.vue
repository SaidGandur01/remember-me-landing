<template>
  <div class="payment-page">
    <h1>Resultado de la Transacción</h1>
    <div v-if="loading">
      Cargando...
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <div v-else>
      <p>ID de la Transacción: {{ transactionId }}</p>
      <p>Estado: {{ transactionStatus }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const transactionId = ref('')
const transactionStatus = ref('')
const loading = ref(true)
const error = ref('')

const fetchTransactionStatus = async (id: string) => {
  try {
    const response = await fetch(`https://sandbox.wompi.co/v1/transactions/${id}`)
    if (!response.ok) {
      throw new Error('Error al obtener el estado de la transacción')
    }
    const data = await response.json()
    console.log('data de validacion de id: ', data)
    transactionStatus.value = data.data.status
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const id = route.query.id as string
  console.log('id: ', id)
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
  padding: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  .error {
    color: red;
  }
}
</style>
