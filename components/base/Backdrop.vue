<template>
  <div class="base-backdrop">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseBackdrop',
};
</script>

<style lang="scss" scoped>
.base-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  height: 100vh;
  background-color: $primary-dark;
  opacity: 0.9;
  * {
    color: $primary-light;
    padding: 10vh 10vw;
  }
}
</style>
