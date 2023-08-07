<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="~/assets/img/logo.svg" alt="logo">
    </div>
    <div class="nav-list">
      <a class="nav-link">El Proyecto</a>
      <a class="nav-link">Algunas historias</a>
      <a class="nav-link">Sobre Nosotros</a>
    </div>
    <button class="btn btn-md">
      Quiero Participar
    </button>
  </nav>

  <main class="section-one">
    <h1>Construyendo puentes <br> generacionales</h1>
    <p>
      Nuestro proyecto pretende abrir espacios de dialogo para las personas
      mayores que se sienten renegadas por al sociedad y permitirles seguir
      aportando, quitarles cualquier sensación que tengan negativa y mostrarles
      una nueva forma de aportar a la sociedad
    </p>
    <button class="btn btn-lg">
      Quiero participar
    </button>
    <div class="image">
      <img src="~/assets/img/section-1/happy.png" alt="logo">
    </div>
    <div class="image-background" />
  </main>

  <section class="section-two">
    <h1>Nuestro objetivo y proyecto</h1>
    <div class="information">
      <div class="item">
        <div class="image">
          <img src="~/assets/img/section-2/clip.svg" alt="clip image">
        </div>
        <h3>Ayudar a recordar</h3>
        <p>Lorem ipson</p>
      </div>
      <div class="item">
        <div class="image">
          <img src="~/assets/img/section-2/signal.svg" alt="clip image">
        </div>
        <h3>Aprender</h3>
        <p>Lorem ipson</p>
      </div>
      <div class="item">
        <div class="image">
          <img src="~/assets/img/section-2/statistics.svg" alt="clip image">
        </div>
        <h3>Transmitir historias de vida</h3>
        <p>Lorem ipson</p>
      </div>
      <div class="item">
        <div class="image">
          <img src="~/assets/img/section-2/circle.svg" alt="clip image">
        </div>
        <h3>Conectar generaciones</h3>
        <p>Lorem ipson</p>
      </div>
    </div>
  </section>

  <section class="section-three">
    <div class="image-container">
      <img src="~/assets/img/section-3/man.png" alt="man reading">
    </div>
    <div class="information-container">
      <h3>Historias</h3>
      <h2>Permitir a gente (mayor?) contar sus historias</h2>
      <p>
        Permitir a las personas transmitir sus historias de vida y vivencias a nuevas generaciones y que estas historias no se pierdan.
      </p>
      <button class="btn btn-lg">
        Quiero participar
      </button>
    </div>
  </section>

  <section class="section-four">
    <h1>Encontrar historias de acuerdo a tus intereses</h1>
    <p>
      Los niños podrán navegar por un gran listado de historias que permitirá abrir la imaginación, conocer historias fascinantes
      y llevar grandes recuerdos
    </p>
    <div class="image-container">
      <img src="~/assets/img/section-4/kids.png" alt="kids">
    </div>
    <h1>Relatos</h1>
    <div class="relatos-container">
      <div class="image-container">
        <img src="~/assets/img/section-4/father.png" alt="man">
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

  <section class="section-five">
    <div class="image-container">
      <img src="~/assets/img/section-5/platform.png" alt="">
    </div>
    <div class="information">
      <h2>plataforma</h2>
      <h1>Una plataforma simple e intuitiva</h1>
      <p>
        Podrás manejar las historias de las personas que escriben, asignar historias a alumnos y ver su estado, comunicarte con otros escritores.
      </p>
    </div>
  </section>

  <section class="section-six">
    <div class="information">
      <h1>Seguimiento de <br> alumnos</h1>
      <p>
        Las historias seran categorizadas por contenido y edad y podran ser asignadas a grupos estudiantiles. Podras seguir su estados y permitir a los alumnos comunicarse....
      </p>
      <button class="btn btn-lg">
        Quiero ser parte de este proyecto
      </button>
    </div>
    <div class="images-wrapper">
      <div class="first-row">
        <img src="~/assets/img/section-6/one.png" alt="one">
        <img src="~/assets/img/section-6/two.png" alt="two">
      </div>
      <div class="second-row">
        <img src="~/assets/img/section-6/three.png" alt="three">
      </div>
    </div>
  </section>

  <section class="section-seven">
    <!-- <h2>Participa ahora</h2>
    <h1>No tiene costo! Es Gratuito!</h1>
    <p>
      Necesitamos tu apoyo para que este proyecto cobre vida!!
    </p>
    <button class="btn btn-lg">
      Yo me sumo!
    </button> -->
    <div class="image-container">
      <img src="~/assets/img/section-7/background.png" alt="background-image">
    </div>
  </section>

  <footer>
    <div class="copy">
      <span>@ 2023 Wrapp. All rights reserved</span>
    </div>
    <div class="social-media">
      <span>Terms</span>
      <span>Privacy</span>
      <span>Contact</span>
      <div class="image-container first-element">
        <img src="~/assets/img/footer/youtube.png" alt="youtube">
      </div>
      <div class="image-container">
        <img src="~/assets/img/footer/facebook.png" alt="facebook">
      </div>
      <div class="image-container">
        <img src="~/assets/img/footer/twitter.png" alt="twitter">
      </div>
      <div class="image-container">
        <img src="~/assets/img/footer/instagram.png" alt="instagram">
      </div>
      <div class="image-container">
        <img src="~/assets/img/footer/linkedin.png" alt="linkedin">
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>

h1 {
  color: var(--color-tex);
  font-size: 7.2rem;
  font-weight: 800;
  line-height: 110%;
}
.navbar {
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  height: 100px;

  &-logo {
    width: 7%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .nav-list {
    display: flex;
    gap: 3rem;
    margin-left: 3rem;
  }

  .nav-link {
    cursor: pointer;
    color: var(--color-text);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
  }

  button {
    margin-left: auto;
  }
}

.section-one {
  padding-top: 3rem;
  padding-bottom: 8rem;
  min-height: calc(100vh - 100px);
  display: flex;
  gap: 5rem;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  p {
    padding: 0 15rem;
    color: var(--color-text);
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  button {
    margin: 2rem 0;
  }

  .image {
    width: 50%;
    z-index: 1001;
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .image-background {
    height: 75vh;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: scaleY(1) translateY(0%);
    position: absolute;
    z-index: -1001;
    background: url("assets/img/section-1/background.svg") no-repeat;
    background-size: cover;
  }
}

.section-two {
  padding: 7rem 0;

  .image {
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .information {
    display: flex;
    justify-content: space-evenly;
    margin: 10rem 0 3rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .image {
      margin: 0 auto;
      width: 7vw;
    }
  }

  h1 {
    color: var(--color-text);
    text-align: center;
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
}

.section-three {
  display: flex;
  justify-content: space-between;

  .image-container,
  .information-container {
    width: 49.5%;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .information-container {
    background-color: var(--color-background-primary);
    padding: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;

    h3 {
      color: var(--color-text-secondary);
      font-size: 2rem;
      font-weight: 700;
      line-height: 100%;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    h2 {
      color: var(--color-white);
      font-size: 5.6rem;
      font-weight: 800;
      line-height: 110%; /* 61.6px */
    }

    p {
      color: var(--color-white);
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 160%; /* 28.8px */
    }

    button {
      width: 60%;
      box-shadow:
        0px 0px 15px 0px rgba(0, 0, 0, 0.07),
        0px 25px 50px -12px rgba(0, 0, 0, 0.25);    }
  }
}

.section-four {
  padding: 10rem 0;
  min-height: 145vh;
  position: relative;
  overflow: hidden;

  h1 {
    margin: 3rem 0 5rem;
    color: var(--color-text);
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
        color: var(--buton-background);
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
  background: url("assets/img/section-4/background.png") no-repeat;
  background-size: contain;
}

.section-five {
  margin-top: 5rem;
  padding: 0 8rem 10rem;
  display: flex;
  justify-content: space-between;

  .image-container,
  .information {
    width: 50%;
  }

  .image-container {
    img {
      width: 80%;
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
      color: var(--color-text);
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
}

.section-six {
  display: flex;
  padding: 5rem 7rem;

  .information {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    padding: 2rem 4rem;

    h1 {
      color: var(--color-text);
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
      width: 60%;
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

footer {
  padding: 0 5rem;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .social-media {
    display: flex;
    align-items: center;
    gap: 3rem;

    .first-element {
      margin-left: 4rem;
    }
  }
}
</style>
