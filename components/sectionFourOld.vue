<template>
  <section class="section-four">
    <div class="section-four-container">
      <h2>Encontrar historias de acuerdo a tus intereses</h2>
      <p>
        Los niños podrán navegar por un gran listado de historias que permitirá
        abrir la imaginación, conocer historias fascinantes y llevar grandes
        recuerdos
      </p>
      <div class="image-container">
        <img src="~/public/images/section-four/kids.png" alt="kids" />
      </div>
      <h2>Relatos</h2>
      <div class="relatos-container">
        <Swiper
          :pagination="{
            dynamicBullets: true,
            clickable: true,
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :modules="modules"
        >
          <SwiperSlide>
            <div class="image-container">
              <img src="~/public/images/section-four/father.png" alt="man" />
            </div>
            <div class="comment">
              <h2>martin javier leon</h2>
              <p>
                Me encanta la oportunidad de contar mi vida, <br />
                que pequeños niños puedan entender por lo que pasamos y asi <br />
                poder quedar en sus memorias
              </p>
              <span> Leer la historia completa </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image-container">
              <img src="~/public/images/section-four/father.png" alt="man" />
            </div>
            <div class="comment">
              <h2>martin javier leon</h2>
              <p>
                Me encanta la oportunidad de contar mi vida, <br />
                que pequeños niños puedan entender por lo que pasamos y asi <br />
                poder quedar en sus memorias
              </p>
              <span> Leer la historia completa </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image-container">
              <img src="~/public/images/section-four/father.png" alt="man" />
            </div>
            <div class="comment">
              <h2>martin javier leon</h2>
              <p>
                Me encanta la oportunidad de contar mi vida, <br />
                que pequeños niños puedan entender por lo que pasamos y asi <br />
                poder quedar en sus memorias
              </p>
              <span> Leer la historia completa </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image-container">
              <img src="~/public/images/section-four/father.png" alt="man" />
            </div>
            <div class="comment">
              <h2>martin javier leon</h2>
              <p>
                Me encanta la oportunidad de contar mi vida, <br />
                que pequeños niños puedan entender por lo que pasamos y asi <br />
                poder quedar en sus memorias
              </p>
              <span> Leer la historia completa </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

const modules = [Pagination, Autoplay]
</script>
<style lang="scss" scoped>
.section-four {
  padding: 7rem 0;
  min-height: 145vh;
  position: relative;
  overflow: hidden;
  .section-four-container {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 3rem 0 5rem;
    color: var(--color-brand-implemented-200);
    text-align: center;
    font-size: 5.6rem;
    font-weight: 800;
    line-height: 110%;
  }

  p {
    width: 70%;
    margin: 0 auto;
    color: var(--color-text);
    text-align: center;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 160%;
  }

  .image-container {
    width: 30%;
    margin: 8rem auto;

    img {
      width: 100%;
    }
  }

  .relatos-container {
    padding: 0 10rem 0 20rem;
    .swiper {
      width: 100%;
      height: auto;
    }
    .swiper-slide {
      display: flex;
      flex-direction: row;
    }
    .swiper > :first-child {
      margin-bottom: 6rem;
    }
    .image-container {
      width: 650px;
      margin: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .comment {
      width: fit-content;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 5px;
      border: 1px solid var(--color-border-gray);
      background: var(--color-white);
      position: absolute;
      top: 50%;
      right: 15%;
      transform: translateY(-50%);
      box-shadow:
        0px 0px 10px 0px rgba(0, 0, 0, 0.07),
        0px 20px 25px -5px rgba(0, 0, 0, 0.1);

      h2 {
        color: var(--color-text-gray);
        margin: 1rem 0;
        font-size: 2rem;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: 3px;
        text-transform: uppercase;
      }

      p {
        width: 100%;
        text-align: inherit;
        color: var(--color-text);
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        margin: 0;
      }

      span {
        color: var(--color-brand-implemented-700);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.5px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 7rem 0;
    .section-four-container {
      gap: 3rem;
      min-height: auto;
      margin: 0 4rem;
    }
    h2 {
      font-size: 3.6rem;
      margin: 0;
    }
    .image-container {
      width: 100%;
      margin: 0;
    }
    .relatos-container {
      padding: 0;
      .swiper > :first-child {
        margin-bottom: 3rem;
      }
      .swiper-slide {
        flex-direction: column;
      }
      .image-container {
        width: 100%;
      }
      .comment {
        position: unset;
        transform: translateY(-10%);
        margin: 0 2rem;
      }
    }
  }
}
.section-four::before {
  content: "";
  z-index: -1001;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateY(27%);
  background: url("~/public/images/section-four/background.png") no-repeat;
  background-size: contain;
}
</style>
