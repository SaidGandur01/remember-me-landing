<template>
  <section class="section-two">
    <motion-section
      ref="target"
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
    >
      <div ref="carousel" class="carousel-container">
        <div ref="track" class="carousel-track">
          <div v-for="(item, index) in duplicatedItems" :key="index" class="carousel-slide">
            <div class="item">
              <div class="image">
                <img :src="item.image" :alt="item.title">
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </motion-section>
  </section>
</template>

<script lang="ts" setup>
const { t } = useTranslation()

const items = computed(() => [
  {
    image: '/images/section-two/item-one.svg',
    title: t('section_two.title_one'),
    description: t('section_two.description_one')
  },
  {
    image: '/images/section-two/item-two.svg',
    title: t('section_two.title_two'),
    description: t('section_two.description_two')
  },
  {
    image: '/images/section-two/item-three.svg',
    title: t('section_two.title_three'),
    description: t('section_two.description_three')
  },
  {
    image: '/images/section-two/item-four.svg',
    title: t('section_two.title_four'),
    description: t('section_two.description_four')
  }
])

const duplicatedItems = [...items.value, ...items.value]

const carousel = ref<HTMLElement | null>(null)
const track = ref<HTMLElement | null>(null)

onMounted(() => {
  const trackElement = track.value as HTMLElement

  const trackWidth = trackElement.scrollWidth

  let startPosition = 0

  const animate = () => {
    startPosition -= 0.4
    if (startPosition <= -trackWidth / 2) {
      startPosition = 0
    }
    trackElement.style.transform = `translateX(${startPosition}px)`
    requestAnimationFrame(animate)
  }

  setTimeout(() => {
    animate()
  }, 800)
})
</script>

<style lang="scss" scoped>
.section-two {
  padding: 7rem 0;
  background-color: #f9f9f9;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .carousel-container {
    overflow: hidden;
    width: 100%;
    position: relative;
    animation: fadeInUp 1s forwards ease-in-out;
  }

  .carousel-track {
    display: flex;
    width: max-content;
  }

  .carousel-slide {
    flex: 0 0 auto;
    width: 13%;
    min-height: 21rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin: 0 5rem;
    height: 98%;
  }

  .image {
    img {
      width: 100px;
      height: auto;
      margin-bottom: 1rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    margin: 0.5rem 0;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.4rem;
    line-height: 2.3rem;
  }
}
@media (max-width: 768px) {
  .carousel-slide {
    width: 8% !important;
    min-height: 21rem;
  }
  img {
    width: 6rem !important;
  }
  .item {
    height: 98%;
    margin: 0 2.5rem !important;
    gap: 0.5rem;

    p {
      width: 80%;
    }
  }
}
</style>
