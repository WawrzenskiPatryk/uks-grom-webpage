<template>
  <div class="layout">
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// devTools: 375, 768, 1024, 1440

.layout {
  color: $main-dark;
  background-color: $main-light;
  transition: background-color 0.3s;
  max-width: 100vw;
  padding-top: 10rem;
}
</style>
