<template>
  <div class="base-spinner">
    <fa-icon icon="fa-solid fa-spinner" />
  </div>
</template>

<style lang="scss" scoped>
.base-spinner {
  display: block;
  width: 100%;
  height: 100%;

  font-size: $small-title-font-size;
  @media screen and (min-width: $tablet-min-screen-width) {
    font-size: $medium-title-font-size;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    font-size: $large-title-font-size;
  }
  animation: spin 700ms infinite linear;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
