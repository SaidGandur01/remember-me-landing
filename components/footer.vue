<template>
  <footer>
    <div class="copy">
      <span>@{{ $t("footer.copy") }}</span>
    </div>
    <div class="media-wrapper">
      <div class="politics">
        <span>{{ $t("footer.terms") }}</span>
        <a :href="whatsappLink" target="_blank">
          <span>{{ $t("footer.contact") }}</span>
        </a>
      </div>
      <div class="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div class="social-media">
        <div class="image-container first-element">
          <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" />
        </div>
        <div class="image-container">
          <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
        </div>
        <div class="image-container">
          <font-awesome-icon class="icon" :icon="['fab', 'tiktok']" />
        </div>
        <div class="image-container">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
const whatsappNumber = '3012421936'
const message = 'Hola!! Me gustaría saber más del proyecto.'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
</script>
<style lang="scss" scoped>
footer {
  padding: 4rem;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f3a52;
  min-height: 30vh;
  position: relative;

  .copy {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%);
    color: var(--color-brand-white-100);
    font-size: 1.5rem;
  }

  .media-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 5rem;
    color: var(--color-brand-white-100);

    .social-media {
      margin-left: 4rem;
      display: flex;
      gap: 5rem;

      .image-container .icon {
        color: var(--color-brand-white-100);
        font-size: 2.5rem;
      }
    }
    .politics {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 2rem;
      gap: 1.5rem;

      span {
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          transform: translateY(-5px) scale(1.1);
          border-bottom: 1px solid var(--color-brand-white-100);
        }
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5rem 5rem;
    gap: 2rem;
    min-height: 40vh;
    justify-content: flex-start;

    .copy {
      width: 100%;
      text-align: center;
      line-height: 2.2rem;
    }
    .media-wrapper {
      flex-direction: column;
      gap: 3rem;
      margin-bottom: 10rem;

      .logo {
        order: 1;
      }
      .politics {
        order: 3;
        white-space: nowrap;
      }
      .social-media {
        margin: 0;
        order: 2;
      }
    }
  }
}
</style>
