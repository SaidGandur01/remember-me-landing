<template>
  <!-- <Spinner /> -->
  <SpeedInsights />
  <div v-if="renderPage" id="main">
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <!-- <ClientOnly fallback-tag="span" fallback="Loading on server..."> -->
    <SectionSix />
    <!-- </ClientOnly> -->
    <!-- <SectionSeven /> -->
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
const renderPage = ref<boolean>(true)

const renderInformation = () => {
  setTimeout(() => {
    // renderPage.value = true
  }, 2000)
}

onMounted(() => {
  renderInformation()
})
</script>
<style lang="scss" scoped>
</style>
