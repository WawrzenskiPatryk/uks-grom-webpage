<template>
  <h4 class="logo-placeholder">
    <NuxtLink to="/" class="logo-placeholder__link">
      <span>{{ firstWord }}</span> <span>{{ secondWord }}</span>
    </NuxtLink>
  </h4>
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
  font-size: 3.2rem;
  user-select: none;

  &__link {
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
