<template>
  <button class="base-button" :class="buttonType">
    <slot>Lorem Ipsum</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: { type: String, default: 'filled' },
  },
  computed: {
    buttonType() {
      if (this.type === 'hollow-white' || this.type === 'hollow')
        return 'base-button--hollow-white';
      if (this.type === 'hollow-blue') return 'base-button--hollow-blue';
      if (this.type === 'hollow-dark') return 'base-button--hollow-dark';
      return 'base-button--filled';
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  font-size: $default-font-size;
  border-radius: 10rem;
  transition: all 300ms ease;
  padding: 1.8rem 2.5rem;

  @media screen and (min-width: $desktop-min-screen-width) {
    padding: 2rem 3.2rem;
  }

  &--filled {
    color: $primary-light;
    background-color: $primary-color;
    border: none;
  }

  &--hollow-blue,
  &--hollow-light,
  &--hollow-dark {
    background-color: transparent;
  }

  &--hollow-blue {
    color: $primary-color;
    border: 2px solid $primary-color;
  }
  &--hollow-white {
    color: $primary-light;
    border: 2px solid $primary-light;
  }

  &--hollow-dark {
    color: $primary-dark;
    border: 2px solid $primary-dark;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
}
</style>
