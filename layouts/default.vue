<template>
  <div class="layout">
    <TheHeader class="layout__header" />
    <Nuxt class="layout__page" />
    <TheFooter class="layout__footer" />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  color: $primary-dark;
  background-color: $primary-light;
  transition: background-color 0.3s;
  max-width: 100vw;
  padding-top: $header-height;

  &__header {
    position: fixed;
    top: 0;
  }

  &__page {
    max-width: $content-max-width;
    margin: 0 auto;
  }
}
</style>
