<template>
  <!-- <Spinner /> -->
  <div v-if="renderPage" id="main">
    <Header />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
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
