<template>
  <section ref="target" :class="{ 'in-view': inView }" class="section-four">
    <div class="first-column">
      <h1>{{ $t('section_four.title') }}</h1>
      <div class="image-container">
        <img src="~/public/images/section-four/star.webp" alt="start">
      </div>
    </div>
    <div class="second-column">
      <div class="card">
        <div class="card-image-wrapper">
          <img src="~/public/images/section-four/card1.webp" alt="card1">
        </div>
        <span class="card-name">{{ $t('section_four.story_one_name') }}</span>
        <span class="card-message">{{ $t('section_four.story_one_message') }}</span>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="~/public/images/section-four/card2.webp" alt="card2">
        </div>
        <span class="card-name">{{ $t('section_four.story_two_name') }}</span>
        <span class="card-message">{{ $t('section_four.story_two_message') }}</span>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="~/public/images/section-four/card3.webp" alt="card3">
        </div>
        <span class="card-name">{{ $t('section_four.story_three_name') }}</span>
        <span class="card-message">{{ $t('section_four.story_three_message') }}</span>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const inView = ref(false)
const cardImageWrappers = ref<HTMLDivElement[]>([])
const cardNames = ref<HTMLSpanElement[]>([])
const cardMessages = ref<HTMLSpanElement[]>([])

const { target } = useIntersectionObserver(() => {
  inView.value = true
  cardImageWrappers.value.forEach((wrapper) => {
    wrapper.classList.add('in-view')
  })
  cardNames.value.forEach((name) => {
    name.classList.add('in-view')
  })
  cardMessages.value.forEach((name) => {
    name.classList.add('in-view')
  })
})

onMounted(() => {
  cardImageWrappers.value = Array.from(
    document.querySelectorAll('.card-image-wrapper')
  )
  cardNames.value = Array.from(document.querySelectorAll('.card-name'))
  cardMessages.value = Array.from(document.querySelectorAll('.card-message'))
})
</script>
<style lang="scss" scoped>
.section-four {
  padding: 7rem 12rem;
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 10rem;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 1s ease-out 0.3s,
    transform 1s ease-out 0.3s;

  &.in-view {
    opacity: 1;
    transform: translateY(0);
  }

  .first-column {
    display: flex;
    flex-direction: column;
    width: 20%;
    gap: 5rem;
    padding-top: 2rem;
    justify-content: space-between;

    h1 {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 3.5rem;
      color: var(--color-brand-implemented-500);
      font-family: "Roboto", sans-serif;
    }

    .image-container {
      img {
        width: 65%;
      }
    }
  }

  .second-column {
    display: flex;
    flex: 1;

    .card {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem;

      &-image-wrapper {
        overflow: hidden;
        opacity: 0;
        transform: translateY(20px);
        transition:
          opacity 1.5s ease-in-out,
          transform 1.5s ease-in-out;

        &.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          animation: scaleRotate 15s infinite alternate;
          box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.1),
            0 6px 20px rgba(0, 0, 0, 0.1),
            0 8px 40px rgba(0, 0, 0, 0.2);
          object-fit: cover;
        }
      }

      &-name {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 2rem;
        color: var(--color-brand-implemented-500);
        font-family: "Roboto", sans-serif;
        opacity: 0;
        transform: translateY(20px);
        transition:
          opacity 3s ease-in-out,
          transform 3s ease-in-out;

        &.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      }

      &-message {
        letter-spacing: 1px;
        font-size: 1.4rem;
        color: #1f3a52;
        line-height: 20px;
        opacity: 0;
        transform: translateY(20px);
        transition:
          opacity 4s ease-in-out,
          transform 4s ease-in-out;

        &.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .section-four {
    padding: 5rem 2rem;
    flex-direction: column;

    .first-column {
      display: none;
    }

    .second-column {
      flex-direction: column;

      .card {
        text-align: center;
        gap: 2rem;

        &-image-wrapper {
          img {
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
