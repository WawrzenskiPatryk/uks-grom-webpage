<template>
  <section class="base-heading" :class="headingStyle">
    <h3 v-if="title" class="base-heading__title">
      <slot name="title">
        Lorem ipsum dolor. <br />
        Consectetur adipisicing elit.
      </slot>
    </h3>
    <h4 v-if="subtitle" class="base-heading__subtitle">
      <slot name="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        tenetur dicta illo officia ea expedita unde dolor, nostrum nemo, neque
        tempore! Quisquam quasi illo, molestias facilis tempore recusandae
        eligendi laboriosam.
      </slot>
    </h4>
  </section>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    aside: Boolean,
    deco: Boolean,
    title: Boolean,
    subtitle: Boolean,
  },
  computed: {
    headingStyle() {
      return this.positionStyle + ' ' + this.decoratedStyle;
    },
    positionStyle() {
      if (this.aside) {
        return 'base-heading--aside';
      } else {
        return 'base-heading--main';
      }
    },
    decoratedStyle() {
      if (this.deco) {
        return 'base-heading--decorated';
      } else {
        return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.base-heading {
  display: inline-block;
  position: relative;

  &--main {
    text-align: center;
    &:before {
      margin-bottom: 5rem;
    }
  }

  &--aside {
    &:before {
      margin: 2rem 0;
    }
    text-align: left;
  }

  &--decorated {
    &:before {
      content: '';
      display: inline-block;
      position: relative;
      background-image: $primary-gradient;
      border-radius: 100rem;
      height: 0.8rem;
      width: 4rem;
      margin: 2rem 0;
      @media screen and (min-width: $tablet-min-screen-width) {
        height: 1rem;
        width: 6.5rem;
      }
    }
  }
  &__title {
    line-height: 1.2;
    margin-bottom: $default-font-size;
    font-weight: 600;
  }

  &__subtitle {
    font-weight: 400;
  }
}
</style>
