<template>
  <nav v-click-outside="onHandleClickOutside" class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-logo">
        <img src="/images/logo.svg" alt="logo" @click="goToHome">
      </div>
      <div class="nav-list">
        <a class="nav-link">{{ $t('navbar.the_project') }}</a>
        <a class="nav-link">{{ $t('navbar.some_histories') }}</a>
        <a class="nav-link">{{ $t('navbar.about_us') }}</a>
      </div>
      <span class="title">{{ $t('shared.remember_me') }}</span>
    </div>
    <button class="btn btn-md">
      {{ $t('shared.i_want_participate') }}
    </button>
    <button
      :class="{ 'none menuButton': showMenu, menuButton: !showMenu }"
      @click="toggleMenu"
    >
      <CoreIconHamburger />
    </button>
    <button
      :class="{ 'none menuButton': !showMenu, menuButton: showMenu }"
      @click="toggleMenu"
    >
      <CoreIconClose />
    </button>
    <transition name="fade">
      <div v-show="showMenu" class="burger-wrapper">
        <HamburgerMenu />
      </div>
    </transition>
  </nav>
</template>
<script lang="ts" setup>
const showMenu = ref<boolean>(false)
const router = useRouter()

const goToHome = (): void => {
  router.push('/')
}

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
    gap: 5rem;
    margin-left: auto;
    margin-right: 5rem;
    text-transform: uppercase;
  }

  .nav-link {
    cursor: pointer;
    color: var(--color-brand-implemented-500);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-5px) scale(1.1);
      border-bottom: 1px solid var(--color-brand-implemented-500);
    }
  }
  .navbar-wrapper {
    display: flex;
    align-items: center;
    flex: 1;
  }

  button {
    margin-left: auto;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    transition:
      background 0.3s ease,
      color 0.3s ease;

    &:hover {
      background: darken($color: #1d956a, $amount: 10%);
    }
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
    letter-spacing: 1px;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    margin-left: 1rem;
    margin: 0 auto;
    padding-right: 2rem;
  }

  .burger-wrapper {
    display: none;
    width: 100%;
    background: #fff;
    position: absolute;
    top: 74px;
    right: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: space-between;
    height: 75px;
    background-color: #f7fff0 !important;

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
      margin-left: 0.5rem;
      width: 50px;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
