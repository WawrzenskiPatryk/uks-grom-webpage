<template>
  <button class="base-button" :class="buttonType" @mousedown="animateClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: { type: String, default: 'filled' },
    label: { type: String, default: 'Lorem Ipsum' },
  },
  computed: {
    buttonType() {
      if (this.type === 'hollow-white' || this.type === 'hollow')
        return 'base-button--hollow-white';
      if (this.type === 'hollow-color') return 'base-button--hollow-color';
      if (this.type === 'hollow-dark') return 'base-button--hollow-dark';
      else return 'base-button--filled';
    },
  },
  methods: {
    animateClick(e) {
      const x = e.offsetX;
      const y = e.offsetY;
      const circle = document.createElement('div');

      circle.classList.add('base-button__ripple');
      if (this.type === 'hollow-color')
        circle.classList.add('base-button__ripple--color');
      if (this.type === 'hollow-dark')
        circle.classList.add('base-button__ripple--dark');

      circle.style.top = y + 'px';
      circle.style.left = x + 'px';

      e.target.append(circle);

      setTimeout(() => {
        e.target.removeChild(circle);
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  user-select: none;
  position: relative;
  overflow: hidden;
  font-size: $default-font-size;
  border-radius: 10rem;
  transition: all 300ms ease;
  padding: 1.8rem 2.5rem;

  @media screen and (min-width: $desktop-min-screen-width) {
    padding: 2rem 3.2rem;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      cursor: pointer;
    }
  }

  &--filled {
    &,
    * {
      color: $primary-light;
    }
    background-color: $primary-color;
    background-image: $button-gradient;
    border: none;
  }

  &--hollow-color,
  &--hollow-light,
  &--hollow-dark,
  &--hollow-white {
    background-color: transparent;
  }

  &--hollow-color {
    &,
    * {
      color: $primary-color;
    }
    border: 2px solid $primary-color;
  }
  &--hollow-white {
    &,
    * {
      color: $primary-light;
    }
    border: 2px solid $primary-light;
  }

  &--hollow-dark {
    &,
    * {
      color: $primary-dark;
    }
    border: 2px solid $primary-dark;
  }

  &::v-deep &__ripple {
    position: absolute;
    pointer-events: none;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: rippleAnimation 400ms linear;

    background-color: $primary-light;
    &--color {
      background-color: $primary-color;
    }
    &--dark {
      background-color: $primary-dark;
    }
  }
}

@keyframes rippleAnimation {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 40rem;
    height: 40rem;
    opacity: 0;
  }
}
</style>
