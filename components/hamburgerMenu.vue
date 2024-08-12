<template>
  <div class="burger-container">
    <ul class="menu-list">
      <li class="menu-item">
        <a class="nav-link" @click="onRedirect('project')">{{ $t('navbar.the_project') }}</a>
      </li>
      <li class="menu-item">
        <a class="nav-link" @click="onRedirect('stories')">{{ $t('navbar.some_histories') }}</a>
      </li>
      <li class="menu-item">
        <a class="nav-link" @click="onRedirect('about-us')">{{ $t('navbar.about_us') }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import type { TRoutes } from '~/types'

const router = useRouter()
const onRedirect = (path: TRoutes): void => {
  router.push(path)
}

</script>
<style lang="scss" scoped>
.burger-container {
  padding: 0 3rem 2rem;
  background-color: #f7fff0 !important;

  .menu-list {
    list-style: none;
  }

  .menu-item {
    border-bottom: 1px solid #e2e2e2;

    a {
      text-decoration: none;
      line-height: 1.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      padding: 3rem;
      display: block;
      color: var(--color-brand-implemented-500);
      text-transform: uppercase;
      transform: all 0.2s ease;

      &:hover {
        background-color: darken($color: #f1ffe5, $amount: 1%);
      }
    }
  }
}
</style>
