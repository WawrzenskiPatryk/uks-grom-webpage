<template>
  <div class="layout">
    <TheHeader class="layout__header" />
    <PageSlider v-if="isIndex" class="layout__heading" />
    <PageHeading v-else-if="pageExists" class="layout__heading" />
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
    pageExists() {
      return !!this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  color: $primary-dark;
  background-color: $primary-light;
  max-width: 100vw;
  padding-top: $header-height;

  &__header {
    position: fixed;
    top: 0;
  }

  &__page {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    align-self: center;
    max-width: $content-max-width;
    margin: 8rem 10vw;
  }
}
</style>
