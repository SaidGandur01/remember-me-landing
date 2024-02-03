<template>
  <section class="section-five">
    <div class="image-container">
      <img src="~/public/images/section-five/platform.png" alt="">
    </div>
    <div class="information">
      <h2>plataforma</h2>
      <h1>Una plataforma simple e intuitiva</h1>
      <p>
        Podrás manejar las historias de las personas que escriben, asignar historias a alumnos y ver su estado, comunicarte con otros escritores.
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.section-five {
  padding: 10rem 8rem;
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  .image-container,
  .information {
    width: 50%;
  }

  .image-container {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .information {
    gap: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: var(--color-text-gray);
      font-size: 2rem;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    h1 {
      color: var(--color-brand-implemented-200);
      font-size: 5.6rem;
      font-style: normal;
      font-weight: 800;
      line-height: 110%;
    }

    p {
      color: var(--color-text);
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 160%; /* 28.8px */
    }
  }
  @media (max-width: 768px) {
    padding: 7rem 4rem;
    flex-direction: column-reverse;
    align-items: center;
    .information {
      text-align: center;
    }
    .image-container,
    .information {
      width: 100%;
    }
  }
}
</style>
