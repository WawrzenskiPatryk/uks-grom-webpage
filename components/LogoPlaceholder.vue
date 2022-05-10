<template>
  <h1 class="logo-placeholder">
    <nuxt-link to="/">
      <span>{{ firstWord }}</span>
      <span>{{ secondWord }}</span>
    </nuxt-link>
  </h1>
</template>

<script>
export default {
  name: 'LogoPlaceholder',
  props: {
    firstWord: { type: String, default: 'Logo' },
    secondWord: { type: String, default: 'Test' },
  },
};
</script>

<style lang="scss" scoped>
.logo-placeholder {
  a {
    font-family: 'Jost';
    color: $primary-color;
    display: flex;
    align-items: center;
    text-shadow: rgba(0, 0, 0, 1) 0 0 1px;

    :first-child {
      color: $secondary-color;
    }
  }
}
</style>
