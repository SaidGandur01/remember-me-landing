<template>
  <Header />
  <div class="project-page">
    <div class="content-wrapper">
      <div class="text-content">
        <h3 class="message">
          {{ $t("project.message_part_one") }}
        </h3>
        <h3 class="message">
          {{ $t("project.message_part_two") }}
        </h3>
      </div>
      <div class="second-column">
        <div class="image-content">
          <img :src="image" alt="Proyecto Remember Me">
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import image from '~/public/images/project/image.webp'
</script>

<style lang="scss" scoped>
.project-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f1ffe5;
  padding: 0rem 2rem;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 7rem 0rem 1rem;
  max-width: 1400px;
  width: 100%;
  gap: 5rem;
}

.text-content {
  flex: 1;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: fadeInUp 1s forwards ease-in-out;
}

.text-content h3 {
  font-size: 1.7rem;
  line-height: 3rem;
}

.message {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #343434;
}

.message:last-child {
  margin-bottom: 0;
}

.second-column {
  width: 40%;
  display: flex;
  padding: 7rem;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transform: rotate(2deg);
  overflow: hidden;
  margin: 0 auto;
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 6px 20px rgba(0, 0, 0, 0.1),
    0 8px 40px rgba(0, 0, 0, 0.2);
}

.image-content img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  object-fit: cover;
  animation: scaleRotate 15s infinite alternate;
}

@media (max-width: 768px) {
  .project-page {
    padding: 2rem;
  }
  .content-wrapper {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
  .text-content {
    padding-right: 0;
  }
  .second-column {
    width: 75%;
    padding: 0;
  }
}
</style>
