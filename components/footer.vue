<template>
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
<style lang="scss" scoped>
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
