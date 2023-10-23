<template>
  <section class="section-four">
    <h1>Encontrar historias de acuerdo a tus intereses</h1>
    <p>
      Los niños podrán navegar por un gran listado de historias que permitirá abrir la imaginación, conocer historias fascinantes
      y llevar grandes recuerdos
    </p>
    <div class="image-container">
      <img src="~/public/images/section-four/kids.png" alt="kids">
    </div>
    <h1>Relatos</h1>
    <div class="relatos-container">
      <div class="image-container">
        <img src="~/public/images/section-four/father.png" alt="man">
      </div>
      <div class="comment">
        <h2>martin javier leon</h2>
        <p>
          Me encanta la oportunidad de contar mi vida, <br> que pequeños niños puedan entender por lo que pasamos y asi <br> poder quedar en sus memorias
        </p>
        <span>
          Leer la historia completa
        </span>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.section-four {
  padding: 10rem 0;
  min-height: 145vh;
  position: relative;
  overflow: hidden;

  h1 {
    margin: 3rem 0 5rem;
    color: var(--color-brand-implemented-200);
    text-align: center;
    font-size: 5.6rem;
    font-weight: 800;
    line-height: 110%;
  }

  p {
    width: 70%;
    margin: 0 auto;
    color: var(--color-text);
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 160%;
  }

  .image-container {
    width: 30%;
    margin: 8rem auto;

    img {
      width: 100%;
    }
  }

  .relatos-container {
    position: relative;
    padding: 0 10rem 0 20rem;
    .image-container {
      width: 50%;
      margin: 0;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .comment {
      width: fit-content;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 5px;
      border: 1px solid var(--color-border-gray);
      background: var(--color-white);
      position: absolute;
      top: 50%;
      right: 15%;
      transform: translateY(-50%);
      box-shadow:
        0px 0px 10px 0px rgba(0, 0, 0, 0.07),
        0px 20px 25px -5px rgba(0, 0, 0, 0.1);

      h2 {
        color: var(--color-text-gray);
        font-size: 2rem;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 3px;
        text-transform: uppercase;
      }

      p {
        width: 100%;
        text-align: inherit;
        color: var(--color-text);
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        margin: 0;
      }

      span {
        color: var(--color-brand-implemented-700);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.5px;
      }
    }
  }
}
.section-four::before {
  content: '';
  z-index: -1001;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateY(27%);
  background: url("~/public/images/section-four/background.png") no-repeat;
  background-size: contain;
}
</style>
