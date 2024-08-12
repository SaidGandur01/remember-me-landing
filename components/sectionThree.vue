<template>
  <section ref="target" :class="{ 'in-view': inView }" class="section-three">
    <div class="image-container">
      <img src="~/public/images/section-three/item-one.webp" alt="man reading">
    </div>
    <div class="information-container">
      <h3>{{ $t('section_three.title') }}</h3>
      <h2>{{ $t('section_three.message_one') }}</h2>
      <p>{{ $t('section_three.message_two') }}</p>
      <button class="btn btn-lg" @click="openRegisterModal">
        {{ $t('shared.i_want_participate') }}
      </button>
    </div>
  </section>
  <RegisterForm
    :is-open="isRegisterModalOpen"
    @close="closeRegisterModal"
    @submit="handleSubmit"
  />
</template>

<script lang="ts" setup>
const inView = ref<boolean>(false)
const isRegisterModalOpen = ref<boolean>(false)

const { target } = useIntersectionObserver(() => {
  inView.value = true
})
const openRegisterModal = (): void => {
  isRegisterModalOpen.value = true
}
const closeRegisterModal = (): void => {
  isRegisterModalOpen.value = false
}
const handleSubmit = (formData: any): void => {
  console.log('Form Data Submitted:', formData)
  // Handle form submission, e.g., send to server
}
</script>
<style lang="scss" scoped>
.section-three {
  display: flex;
  justify-content: space-between;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  .image-container,
  .information-container {
    width: 50%;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
  }

  .information-container {
    background-color: var(--color-brand-implemented-500);
    padding: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;

    h3 {
      color: var(--color-brand-implemented-600);
      font-size: 2rem;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    h2 {
      color: var(--color-white);
      font-size: 5.6rem;
      font-weight: 800;
      line-height: 110%;
    }

    p {
      color: var(--color-white);
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 160%;
    }

    button {
      width: 60%;
      margin: 0 auto;
      box-shadow:
        0px 0px 15px 0px rgba(0, 0, 0, 0.07),
        0px 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .image-container,
    .information-container {
      width: auto;
    }

    .information-container {
      align-items: center;
      padding: 7rem 2rem;
      gap: 3rem;

      h2,
      p {
        text-align: center;
      }

      h2 {
        font-size: 3.6rem;
      }
    }
  }
}
</style>
