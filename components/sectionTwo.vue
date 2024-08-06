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
const items = [
  {
    image: '/images/section-two/item-one.svg',
    title: 'Ayudar a recordar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image: '/images/section-two/item-two.svg',
    title: 'Aprender',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image: '/images/section-two/item-three.svg',
    title: 'Transmitir historias de vida',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    image: '/images/section-two/item-four.svg',
    title: 'Conectar generaciones',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

const duplicatedItems = [...items, ...items]

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
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    margin: 0 5rem;
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
  }

  p {
    font-size: 1.4rem;
  }
}
@media (max-width: 768px) {
  .carousel-slide {
    width: 10% !important;
  }
  img {
    width: 6rem !important;
  }
  .item {
    margin: 0 2.5rem !important;
  }
}
</style>
