<template>
  <section class="base-heading">
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
};
</script>

<style lang="scss" scoped>
.base-heading {
  text-align: center;

  &__title {
    font-size: $medium-title-font-size;
    line-height: 1.2;
    margin-bottom: $default-font-size;
  }

  &__paragraph {
    font-size: $large-subtitle-font-size;
  }
}
</style>
