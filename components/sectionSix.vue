<template>
  <section class="section-six">
    <img :src="cloudImage" alt="cloud" class="cloud-image">
    <div class="information">
      <h1>100%</h1>
      <h1>Gratuito</h1>
    </div>
    <div class="text">
      <span>Si bien no hay costo, <strong>puedes hacer una donación.</strong></span>
      <span>Necesitamos de tu ayuda para que este proyecto cobre vida.</span>
    </div>
    <div class="donation">
      <button class="donation-option">
        $50
      </button>
      <button class="donation-option">
        $100
      </button>
      <button class="donation-option">
        $120
      </button>
      <input
        type="text"
        class="donation-input"
        placeholder="$ Escribe un monto"
      >
      <button class="donation-button">
        Donar
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import cloudImage from '~/public/images/section-six/cloud.webp'
</script>
<style lang="scss" scoped>
.section-six {
  display: flex;
  flex-direction: column;
  padding: 10rem;
  gap: 3rem;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #f1ffe5;

  .cloud-image {
    width: 9%;
    position: absolute;
    top: -30%;
    right: 5%;
    transform: translate(-3%, 50%);
  }

  .information {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(-5%, -50%);

    h1 {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 3.5rem;
      color: var(--color-brand-implemented-500);
      font-family: "Roboto", sans-serif;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    line-height: 3rem;

    strong {
      font-weight: 600;
    }
  }
  .donation {
    display: flex;
    gap: 4rem;
    align-items: center;

    button {
      letter-spacing: 0.5px;
    }

    .donation-option {
      padding: 0.5rem 1rem;
      border: 1px solid var(--color-brand-implemented-500);
      background: transparent;
      color: var(--color-brand-implemented-500);
      border-radius: 2rem;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      cursor: pointer;
      transition:
        background 0.3s ease,
        color 0.3s ease;

      &:hover {
        background: var(--color-brand-implemented-500);
        color: #fff;
      }
    }

    .donation-input {
      padding: 0.5rem 1.8rem;
      border: 2px solid var(--color-brand-implemented-500);
      border-radius: 2rem;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      outline: none;
      background-color: transparent;

      &::placeholder {
        color: var(--color-brand-implemented-500);
      }
      color: var(--color-brand-implemented-500);
    }

    .donation-button {
      padding: 0.5rem 1rem;
      background: var(--color-brand-implemented-500);
      color: #fff;
      border: none;
      border-radius: 2rem;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      cursor: pointer;
      transition:
        background 0.3s ease,
        color 0.3s ease;

      &:hover {
        background-color: darken($color: #1D956A, $amount: 10%);
      }
    }
  }
}
@media (max-width: 768px) {
  .section-six {
    padding: 15rem 5rem 5rem 5rem !important;
    text-align: center;

    .information {
      position: absolute;
      left: 50%;
      top: 15%;
      transform: translate(-50%, -50%);
    }

    .text {
      gap: 1.5rem;
    }

    .donation {
      flex-wrap: wrap;
      justify-content: center;
      padding: 0 2rem;
      gap: 2rem;

      &-option,
      &-button {
        width: 100%;
      }

      &-input {
        width: 100%;
      }
    }
  }
}
</style>
