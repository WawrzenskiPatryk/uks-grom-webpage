<template>
  <section class="base-heading" :class="positionStyle">
    <h3 class="base-heading__title">
      <slot name="title">
        Lorem ipsum dolor. <br />
        Consectetur adipisicing elit.
      </slot>
    </h3>
    <h5 class="base-heading__subtitle">
      <slot name="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        tenetur dicta illo officia ea expedita unde dolor, nostrum nemo, neque
        tempore! Quisquam quasi illo, molestias facilis tempore recusandae
        eligendi laboriosam.
      </slot>
    </h5>
  </section>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    type: {
      type: String,
      default: 'main',
    },
  },
  computed: {
    positionStyle() {
      if (this.type === 'aside') {
        return 'base-heading--aside';
      } else {
        return 'base-heading--main';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.base-heading {
  display: inline-block;
  margin: 2rem 0;

  &--main {
    text-align: center;
    font-size: $medium-title-font-size;
  }

  &--aside {
    text-align: left;
    font-size: $small-title-font-size;
  }

  &__title {
    line-height: 1.2;
    margin-bottom: $default-font-size;
    font-weight: 600;
  }

  &__subtitle {
    font-size: $large-subtitle-font-size;
    font-weight: 400;
  }
}
</style>
