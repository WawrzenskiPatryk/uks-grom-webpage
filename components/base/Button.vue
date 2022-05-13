<template>
  <button class="base-button" :class="buttonType">
    <slot>Button Text</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    styleType: { type: String, default: 'filled' },
  },
  computed: {
    buttonType() {
      if (this.styleType === 'hollow-white' || this.styleType === 'hollow')
        return 'base-button--hollow-white';
      if (this.styleType === 'hollow-blue') return 'base-button--hollow-blue';
      return 'base-button--filled';
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  font-size: $default-font-size;
  border-radius: 10rem;
  transition: background-color 300ms ease;
  padding: 1.8rem 2.5rem;

  @media screen and (min-width: $desktop-min-screen-width) {
    padding: 2rem 3rem;
  }

  &--filled {
    color: $primary-light;
    background-color: $primary-color;
    border: none;
  }
  &--hollow-blue {
    color: $primary-color;
    background-color: transparent;
    border: 1px solid $primary-color;
  }
  &--hollow-white {
    color: $primary-light;
    background-color: transparent;
    border: 1px solid $primary-light;
  }

  @media (hover: hover) {
    &:hover {
      background-color: $primary-color-darken;
      cursor: pointer;
    }
  }
}
</style>
