<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>{{ $t("shared.i_want_participate") }}</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="name">{{ $t("register_form.name") }}</label>
          <input id="name" v-model="form.name" type="text" required>
        </div>
        <div class="form-group">
          <label for="email">{{ $t("register_form.email") }}</label>
          <input id="email" v-model="form.email" type="email" required>
        </div>
        <div class="form-group">
          <label for="phone">{{ $t("register_form.phone") }}</label>
          <input id="phone" v-model="form.phone" type="tel" required>
        </div>
        <div class="form-group">
          <label for="age">{{ $t("register_form.age") }}</label>
          <input id="age" v-model="form.age" required>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-md outlined" @click="closeModal">
            {{ $t("register_form.cancel") }}
          </button>
          <button type="submit" class="btn btn-md">
            <span v-if="isLoading">
              <font-awesome-icon :icon="['fas', 'spinner']" spin size="xl" />
            </span>
            <span v-else>
              {{ $t("register_form.submit") }}
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IRegisterForm {
  name: string;
  email: string;
  phone: string;
  age: number | null;
}

const props = defineProps<{ isOpen: boolean }>()

const isOpen = ref(props.isOpen)
const emit = defineEmits(['close', 'submit'])
const isLoading = ref<boolean>(false)

const form = ref<IRegisterForm>({
  name: '',
  email: '',
  phone: '',
  age: null
})

const closeModal = () => {
  emit('close')
}

const onSubmit = () => {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
    emit('submit', form.value)
    closeModal()
  }, 1500)
}

watch(
  () => props.isOpen,
  (newValue) => {
    isOpen.value = newValue
  }
)
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0 2rem;
  }

  form {
    display: flex;
    flex-direction: column;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.5rem;

      label {
        font-size: 1.3rem;
        letter-spacing: 1px;
      }

      input {
        padding: 1rem 2rem;
        color: #7c7c8d;
        border: 1px solid #7c7c8d;
        border-radius: 5px;
      }
    }

    .modal-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      gap: 1rem;

      button {
        width: 100%;
      }
    }
  }
}
</style>
