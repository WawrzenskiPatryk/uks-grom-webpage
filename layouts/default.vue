<template>
  <div class="layout">
    <TheHeader class="layout__header" />
    <PageSlider v-if="isIndex" class="layout__heading" />
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
  display: flex;
  flex-direction: column;
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
    align-self: center;
    max-width: $content-max-width;
    margin: 8rem 10vw;
  }
}
</style>
