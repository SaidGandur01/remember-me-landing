<template>
  <main class="section-one">
    <div class="first-column">
      <h1>
        Construyendo <br> puentes <br>
        generacionales
      </h1>
      <p>
        Nuestro proyecto pretende abrir espacios de dialogo para las personas
        mayores.
      </p>
      <div class="button-wrapper">
        <button class="btn btn-md">
          Quiero Participar
        </button>
        <button class="btn btn-md outlined">
          ¿Qué hacemos?
        </button>
      </div>
    </div>
    <div class="second-column">
      <img :src="bgImage" alt="background-image">
    </div>
  </main>
</template>
<script lang="ts" setup>
import bgImage from '~/public/images/section-one/background.jpeg'
</script>
<style lang="scss" scoped>
.section-one {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F1FFE5;

  .first-column {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2% 5%;
    gap: 2rem;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s forwards ease-in-out;

    h1 {
      font-size: 5.5rem;
      font-weight: 800;
      line-height: 110%;
      letter-spacing: 1px;
      font-family: 'Roboto', sans-serif;
    }
    p {
      color: #343434;
      font-size: 2rem;
      font-weight: 400;
      line-height: 4rem;
      letter-spacing: 0.1px;
      font-family: 'Roboto', sans-serif;
      animation: fadeInUp 1.6s forwards ease-in-out;
    }

    .button-wrapper {
      display: flex;
      align-items: center;
      gap: 2rem;
      animation: fadeInUp 2.2s forwards ease-in-out;

      .outlined {
        background-color: transparent;
        color: var(--color-brand-implemented-500);
      }

      .btn {
        transition: transform 0.3s ease-in-out;
      }

      .btn:hover {
        transform: translateY(-5px);
      }
    }
  }
  .second-column {
    width: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: scaleRotate 15s infinite alternate;
    }
  }
}

@media (max-width: 768px) {
  .section-one {
    flex-direction: column;

    .first-column,
    .second-column {
      width: 100%;
    }

    .first-column {
      padding: 5%;

      h1 {
        font-size: 4rem;
        letter-spacing: 1px;
      }

      .button-wrapper {
        margin: 1rem 0;
      }
    }
  }
}
</style>
