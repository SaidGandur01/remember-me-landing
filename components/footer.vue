<template>
  <footer>
    <div class="copy">
      <span>@ 2024 Wrapp. All rights reserved</span>
    </div>
    <div class="media-wrapper">
      <div class="politics">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Contact</span>
      </div>
      <div class="logo">
        <img src="/images/logo.svg" alt="logo">
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
<style lang="scss" scoped>
footer {
  padding: 4rem;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1F3A52;
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
      font-size: 2rem;
      gap: 3rem;

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
    min-height: 38vh;
    justify-content: flex-start;

    .copy {
      white-space: nowrap;
    }
    .media-wrapper {
      flex-direction: column;
      gap: 3rem;

      .logo {
        order: 1;
      }
      .politics {
        order: 2;
      }
      .social-media{
        margin: 0;
        order: 3;
      }
    }
  }
}
</style>
