<template>
  <main class="section-one">
    <div class="img-wrapper">
      <img :src="imgWrapper" alt="grandma-image">
    </div>
    <div class="wrapper">
      <div class="header">
        <h1>
          Construyendo puentes
          generacionales
        </h1>
        <p>
          Nuestro proyecto pretende abrir espacios de dialogo para las personas
          mayores que se sienten renegadas por al sociedad y permitirles seguir
          aportando, quitarles cualquier sensación que tengan negativa y
          mostrarles una nueva forma de aportar a la sociedad
        </p>
      </div>
      <button class="btn btn-md">
        Quiero Participar
      </button>
    </div>
  </main>
</template>
<script lang="ts" setup>
import imgWrapper from '~/public/images/section-one/grandma.png'
</script>
<style lang="scss" scoped>
.section-one {
  width: 100%;
  min-height: calc(100vh - 100px);
  position: relative;

  .img-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1001;
    overflow: hidden;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: scale 15s;
  }

  .wrapper {
    position: absolute;
    width: 50%;
    height: 100%;
    display: grid;
    place-content: center;
    gap: 5rem;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%);
    color: var(--color-brand-white-100);
    .header {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      margin-bottom: 5rem;
    }

    h1 {
      color: var(--color-brand-white-200);
      font-size: 5rem;
      font-weight: 800;
      line-height: 110%;
      letter-spacing: 1px;
    }

    p {
      color: var(--color-brand-white-300);
      margin-bottom: 5rem;
      font-size: 18px;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 0.1px;
    }

    .btn {
      width: max-content;
    }
  }
}
@keyframes scale {
  0% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {

}
</style>
