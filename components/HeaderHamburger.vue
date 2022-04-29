<template>
  <span >
    <!-- ADD PROPER SCSS COLOR VARIABLES!!! -->
    <div class="hamburger" @click="toggleMenu">
      <div
        class="hamburger__bar"
        :class="{ 'hamburger__bar--cross': isHamburgerActive }"
      ></div>
    </div>
  </span>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['navVisible'],
  data() {
    return {
      isHamburgerActive: false,
    };
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
  mounted() {
    this.isHamburgerActive = this.navVisible;
    // this.closeMenu();
  },
  methods: {
    toggleMenu() {
      this.isHamburgerActive = !this.isHamburgerActive;
      this.$emit('hamburgerToggle', this.isHamburgerActive);
    },
    closeMenu() {
      if (this.isHamburgerActive) this.toggleMenu();
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger {
  display: inline-block;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3.5rem;
  // background-color: greenyellow;
  @media (hover: hover) {
    &:hover &__bar {
      &,
      &::after,
      &::before {
        background-color: $primary-color;
      }
    }
  }

  &__bar {
    position: relative;
    // top: 0.75rem;

    &,
    &::before,
    &::after {
      display: block;
      height: 0.5rem;
      margin: 0.5rem 0;
      width: 3.5rem;
      border-radius: 1rem;
      background-color: $main-dark;
      transition: all 200ms ease;
    }

    &::before,
    &::after {
      content: '';
    }

    &::before {
      position: relative;
      top: -1rem;
    }

    &--cross {
      width: 0;

      &::after {
        transform: translateY(-1rem) rotate(45deg);
      }
      &::before {
        transform: translateY(1rem) rotate(-45deg);
      }
    }
  }
}
</style>
