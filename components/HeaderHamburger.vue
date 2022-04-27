<template>
  <div class="hamburger" @click="toggleMenu">
    <div
      class="hamburger__bar"
      :class="{ 'hamburger__bar--cross': isHamburgerActive }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHamburgerActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isHamburgerActive = !this.isHamburgerActive
      this.$emit('hamburgerToggle', this.isHamburgerActive)
    },
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 3.5rem;
  height: 3rem;
  // background-color: greenyellow;

  &:hover &__bar {
    &,
    &::after,
    &::before {
      background-color: blue;
    }
  }

  &__bar {
    transform: translateY(1.25rem);

    &,
    &::before,
    &::after {
      display: block;
      height: 0.5rem;
      margin: 0.5rem 0;
      width: 3.5rem;
      border-radius: 1rem;
      background-color: black;
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
