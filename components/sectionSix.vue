<template>
  <section class="section-six">
    <div class="information">
      <h1>
        Seguimiento de <br>
        alumnos
      </h1>
      <p>
        Las historias seran categorizadas por contenido y edad y podran ser
        asignadas a grupos estudiantiles. Podras seguir su estados y permitir a
        los alumnos comunicarse....
      </p>
      <button class="btn btn-lg">
        Quiero ser parte de este proyecto
      </button>
    </div>
    <div class="images-wrapper">
      <div class="first-row">
        <img src="~/public/images/section-six/one.png" alt="one">
        <img src="~/public/images/section-six/two.png" alt="two">
      </div>
      <div class="second-row">
        <img src="~/public/images/section-six/three.png" alt="three">
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.section-six {
  display: flex;
  padding: 5rem 7rem;

  .information {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
    padding: 2rem 4rem;

    h1 {
      color: var(--color-brand-implemented-200);
      font-size: 5.6rem;
      font-weight: 800;
      line-height: 110%;
    }

    p {
      width: 100%;
      color: var(--color-text);
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }

    button {
      letter-spacing: 0px;
      width: max-content;
    }
  }

  .images-wrapper {
    flex-grow: 1;

    .first-row {
      width: 100%;
      display: flex;
      height: 40%;

      img:first-child {
        width: 70%;
      }

      img:last-child {
        flex-grow: 1;
      }
    }

    .second-row {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
