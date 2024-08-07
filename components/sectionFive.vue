<template>
  <section ref="target" :class="{ 'in-view': inView }" class="section-five">
    <div class="first-column">
      <h1>
        Seguimiento de <br>
        alumnos
      </h1>
      <p>
        Las historias serán categorizadas por contenido y edad y podrán ser
        asignadas a grupos estudiantiles. Podrás seguir su estados y permitir a
        los alumnos comunicarse.
      </p>
    </div>
    <div class="second-column">
      <img :src="bgImage" alt="background-image">
    </div>
  </section>
</template>
<script lang="ts" setup>
import bgImage from '~/public/images/section-five/bg1.webp'
const inView = ref(false)

const { target } = useIntersectionObserver(() => {
  inView.value = true
})
</script>
<style lang="scss" scoped>
.section-five {
  padding: 7rem 5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 5rem;
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
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0% 5%;
    gap: 2rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s forwards ease-in-out;

    h1 {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 3.5rem;
      color: var(--color-brand-implemented-500);
      font-family: "Roboto", sans-serif;
    }
    p {
      color: #1F3A52;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 3rem;
      letter-spacing: 1px;
      font-family: "Roboto", sans-serif;
      animation: fadeInUp 1.6s forwards ease-in-out;
      width: 75%;
    }
  }
  .second-column {
    flex: 1;
    max-height: 50vh;
    overflow: hidden;
    border-radius: 1rem;
    animation: fadeInUp 1.6s forwards ease-in-out;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.1),
      0 6px 20px rgba(0, 0, 0, 0.1),
      0 8px 40px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem;
      animation: scaleRotate 15s infinite alternate;
    }
  }
}

@media (max-width: 768px) {
  .section-five {
    flex-direction: column;
    padding: 0rem 3rem 6rem;
    gap: 3rem;

    .first-column,
    .second-column {
      width: 100%;
    }

    .first-column {
      padding: 5%;

      h1 {
        font-size: 3rem;
        letter-spacing: 1px;
        line-height: 4rem;
      }

      p {
        width: 100%;
      }
    }
  }
}
</style>
