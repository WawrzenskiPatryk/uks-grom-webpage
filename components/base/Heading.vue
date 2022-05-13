<template>
  <section class="base-heading" :class="positionStyle">
    <h3 class="base-heading__title">
      <slot name="title">
        Lorem ipsum dolor. <br />
        Consectetur adipisicing elit.
      </slot>
    </h3>
    <p class="base-heading__paragraph">
      <slot name="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        tenetur dicta illo officia ea expedita unde dolor, nostrum nemo, neque
        tempore! Quisquam quasi illo, molestias facilis tempore recusandae
        eligendi laboriosam.
      </slot>
    </p>
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
    margin: 3rem 0;
  }

  &__paragraph {
    font-size: $large-subtitle-font-size;
    margin: 3rem 0;
  }
}
</style>
