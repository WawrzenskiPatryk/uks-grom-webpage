<template>
  <div class="layout">
    <TheHeader class="layout__header" />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
// devTools: 375, 768, 1024, 1440

.layout {
  color: $primary-dark;
  background-color: $primary-light;
  transition: background-color 0.3s;
  max-width: 100vw;
  padding-top: 6rem;

  &__header {
    position: fixed;
    top: 0;
  }
}
</style>
