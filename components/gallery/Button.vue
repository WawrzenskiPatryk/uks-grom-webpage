<template>
  <div class="gallery-button" :class="`gallery-button--${direction}`">
    <fa-icon
      :icon="`fa-solid fa-circle-chevron-${direction}`"
      @click="clicked"
    />
  </div>
</template>

<script>
export default {
  name: 'GalleryButton',
  props: {
    direction: {
      type: String,
      default: 'left',
    },
  },
  methods: {
    clicked() {
      this.$emit('clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-button {
  color: $primary-light;
  position: absolute;
  font-size: 5rem;
  border: none;
  background: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  opacity: 0.75;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
}
</style>
