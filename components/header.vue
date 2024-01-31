<template>
  <nav v-click-outside="onHandleClickOutside" class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-logo">
        <img src="/images/logo.svg" alt="logo">
      </div>
      <div class="nav-list">
        <a class="nav-link">El Proyecto</a>
        <a class="nav-link">Algunas historias</a>
        <a class="nav-link">Sobre Nosotros</a>
      </div>
      <span class="title"> Remember me </span>
    </div>
    <button class="btn btn-md">
      Quiero Participar
    </button>
    <button :class="{ 'none menuButton' : showMenu, 'menuButton': !showMenu}" @click="toggleMenu">
      <CoreIconHamburger />
    </button>
    <button :class="{ 'none menuButton' : !showMenu, 'menuButton': showMenu}" @click="toggleMenu">
      <CoreIconClose />
    </button>
    <div v-if="showMenu" class="burger-wrapper">
      <HamburgerMenu />
    </div>
  </nav>
</template>
<script lang="ts" setup>
const showMenu = ref<boolean>(false)
const toggleMenu = function () {
  showMenu.value = !showMenu.value
}

const onHandleClickOutside = (): void => {
  showMenu.value = false
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  height: 100px;
  justify-content: space-between;

  &-logo {
    width: 60px;
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
  .navbar-wrapper {
    display: flex;
    align-items: center;
  }

  button {
    margin-left: auto;
  }
  .none {
    display: none !important;
  }

  .menuButton {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .title {
    display: none;
    color: #758c82;
    font-family: "Sansita Swashed";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    margin-left: 1rem;
  }

  .burger-wrapper {
    display: none;
    width: 100%;
    background: #fff;
    position: fixed;
    top: 75px;
    right: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 2;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    justify-content: space-between;
    height: 75px;
    .btn {
      display: none;
    }
    .burger-wrapper {
      display: block;
    }
    .navbar-wrapper {
      width: 70%;
    }
    &-logo {
      width: 40px;
    }
    .nav-list {
      display: none;
    }
    .menuButton {
      display: block;
    }
    .title {
      display: block;
    }
  }
}
</style>
