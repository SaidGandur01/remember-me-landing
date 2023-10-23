<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="/images/logo.svg" alt="logo">
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
</template>
<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  height: 100px;

  &-logo {
    width: 7%;
    height: 100%;

    img {
      width: 90%;
      height: 90%;
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
</style>
