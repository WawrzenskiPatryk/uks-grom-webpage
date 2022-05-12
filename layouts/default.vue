<template>
  <div class="layout">
    <TheHeader class="layout__header" />
    <PageSlider v-if="isIndex" class="layout__slider" />
    <PageHeading v-else class="layout__heading" />
    <Nuxt class="layout__page" />
    <TheFooter class="layout__footer" />
  </div>
</template>

<script>
export default {
  computed: {
    isIndex() {
      if (this.$route.name === 'index') return true;
      return false;
    },
  },
};
</script>

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
    padding: 2rem 5rem;
    margin: 0 auto;
  }
}
</style>
