<template>
  <section class="section-two">
    <h1>Nuestro objetivo y proyecto</h1>
    <div class="information">
      <div class="item">
        <div class="image">
          <img src="~/public/images/section-two/item-one.svg" alt="clip image">
        </div>
        <h3>Ayudar a recordar</h3>
        <p>Lorem ipson</p>
      </div>
      <div class="item">
        <div class="image">
          <img src="~/public/images/section-two/item-two.svg" alt="clip image">
        </div>
        <h3>Aprender</h3>
        <p>Lorem ipson</p>
      </div>
      <div class="item">
        <div class="image">
          <img src="~/public/images/section-two/item-three.svg" alt="clip image">
        </div>
        <h3>Transmitir historias de vida</h3>
        <p>Lorem ipson</p>
      </div>
      <div class="item">
        <div class="image">
          <img src="~/public/images/section-two/item-four.svg" alt="clip image">
        </div>
        <h3>Conectar generaciones</h3>
        <p>Lorem ipson</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.section-two {
  padding: 7rem 0;

  .image {
    img {
      width: 100px;
      object-fit: cover;
    }
  }

  .information {
    display: flex;
    justify-content: space-evenly;
    margin: 7rem 0 3rem;
    padding: 0 7rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
    flex-basis: 0;

    .image {
      margin: 0 auto;
    }
  }

  h1 {
    color: var(--color-brand-implemented-200);
    text-align: center;
    font-size: 6rem;
    font-weight: 800;
    line-height: 110%;
  }

  h3 {
    color: var(--color-text);
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 110%;
  }

  p {
    color: var(--color-text);
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }
  @media (max-width: 768px) {
    h1 {
      display: none;
    }
    .information {
      flex-direction: column;
      margin: 0;
      gap:2rem;
    }
  }
}
</style>
