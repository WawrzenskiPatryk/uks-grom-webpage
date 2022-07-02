<template>
  <div class="base-spinner" :class="spinnerSizeClass">
    <div class="base-spinner__icon-container">
      <fa-icon icon="fa-solid fa-spinner" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'large',
      validator(value) {
        return ['small', 'medium', 'large'].join(' ').includes(value);
      },
    },
  },
  computed: {
    spinnerSizeClass() {
      if (this.size === 'small') return 'base-spinner--small';
      if (this.size === 'medium') return 'base-spinner--medium';
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.base-spinner {
  display: block;

  font-size: $small-title-font-size;
  @media screen and (min-width: $tablet-min-screen-width) {
    font-size: $medium-title-font-size;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    font-size: $large-title-font-size;
  }

  &--medium {
    @media screen and (min-width: $tablet-min-screen-width) {
      font-size: $small-title-font-size;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      font-size: $medium-title-font-size;
    }
  }
  &--small {
    @media screen and (min-width: $tablet-min-screen-width) {
      font-size: $small-title-font-size;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      font-size: $small-title-font-size;
    }
  }

  &__icon-container {
    width: fit-content;
    height: fit-content;
    animation: spin 700ms infinite linear;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
