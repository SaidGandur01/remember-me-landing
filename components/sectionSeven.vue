<template>
  <section class="section-seven">
    <div class="section-seven-wrapper">
      <h2>
        PARTICIPA AHORA
      </h2>
      <h1>
        No tiene costo! Es Gratuito!
      </h1>
      <p>
        Necesitamos tu apoyo para que este proyecto cobre vida!!
      </p>
      <button class="btn btn-lg">
        Yo me sumo!
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.section-seven {
  position: relative;
  background-color: var(--color-brand-implemented-500);

  .section-seven-wrapper {
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

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
@media (max-width: 768px) {
  ::before , ::after{
    content: none !important;
  }
  .section-seven{
    .section-seven-wrapper {
      padding: 3rem 1rem;
      gap: 1rem;
    }
    h1{
      font-size: 3.6rem;
    }
    p {
      padding: 2rem 0;
    }
    button {
      width: 60%;
    }
  }
}
.section-seven::before {
  content: "";
  width: 100%;
  height: 80%;
  position: absolute;
  transform: translateY(25%);
  background: url("~/public/images/section-seven/Ellipses.png") no-repeat;
  background-size: contain;
}
.section-seven::after {
  content: "";
  width: 512px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: url("~/public/images/section-seven/Iphones.png") no-repeat;
  background-size: contain;
}
</style>
