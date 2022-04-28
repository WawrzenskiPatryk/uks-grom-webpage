<template>
  <div class="layout">
    <TheHeader />
    <header-hamburger></header-hamburger>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
// devTools: 320, 375, 425, 768, 1024, 1440

.layout {
  color: $main-dark;
  background-color: $main-light;
  transition: background-color 0.3s;
}
</style>
