<template>
  <footer>
    <div class="copy">
      <span>@ 2023 Wrapp. All rights reserved</span>
    </div>
    <div class="media-wrapper">
      <div class="politics">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Contact</span>
      </div>
      <div class="social-media">
        <div class="image-container first-element">
          <img src="~/public/images/footer/youtube.png" alt="youtube" />
        </div>
        <div class="image-container">
          <img src="~/public/images/footer/facebook.png" alt="facebook" />
        </div>
        <div class="image-container">
          <img src="~/public/images/footer/twitter.png" alt="twitter" />
        </div>
        <div class="image-container">
          <img src="~/public/images/footer/instagram.png" alt="instagram" />
        </div>
        <div class="image-container">
          <img src="~/public/images/footer/linkedin.png" alt="linkedin" />
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
  .media-wrapper {
    display: flex;
    align-items: center;
    .social-media {
      margin-left: 4rem;
      display: flex;
      gap: 3rem;
    }
    .politics {
      display: flex;
      gap: 3rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 5rem;
    gap: 2rem;
    .media-wrapper {
      flex-direction: column;
      gap: 2rem;
      .social-media{
        margin: 0;
      }
    }
  }
}
</style>
