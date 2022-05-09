<template>
  <div class="layout">
    <the-header class="layout__header"></the-header>
    <nuxt></nuxt>
    <the-footer></the-footer>
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
