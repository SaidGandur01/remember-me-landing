<template>
  <div class="burger-container">
    <ul class="menu-list">
      <li class="menu-item">
        <a class="nav-link">El Proyecto</a>
      </li>
      <li class="menu-item">
        <a class="nav-link">Algunas historias</a>
      </li>
      <li class="menu-item">
        <a class="nav-link">Sobre Nosotros</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.burger-container {
    padding: 0 3rem 2rem;
  .menu-list {
    list-style: none;
  }

  .menu-item {
    border-bottom: 1px solid #e2e2e2;

    a {
      text-decoration: none;
      line-height: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      background-color: #fff;
      padding: 1.5rem;
      display: block;
      color: var(--color-text);

      &:hover {
        background-color: darken(#fff,5%);
      }
    }
  }
}
</style>
