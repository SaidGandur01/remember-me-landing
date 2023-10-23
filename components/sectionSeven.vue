<template>
  <section class="section-seven">
    <div class="image-container">
      <img src="~/assets/img/section-7/background.png" alt="background-image">
    </div>
  </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.section-seven {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .image-container {
    width: 100%;

    img {
      width: 100%;
    }
  }

  h1 {
    color: var(--color-white);
    text-align: center;
    font-size: 5.6rem;
    font-weight: 800;
    line-height: 110%;
  }

  h2 {
    color: var(--color-text-tertiary);
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  p {
    color: var(--color-white);
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 160%;
  }

  button {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
}
</style>
