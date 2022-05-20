<template>
  <div class="base-backdrop" @click.self="closeBackdrop">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseBackdrop',
  methods: {
    closeBackdrop() {
      this.$emit('close-backdrop');
    },
  },
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
  background-color: $backdrop-color;
  padding: 10vh 3vw;
}
</style>
