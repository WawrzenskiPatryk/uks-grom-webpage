<template>
  <p class="base-paragraph">
    <slot>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tenetur
      dicta illo officia ea expedita unde dolor, nostrum nemo, neque tempore!
      Quisquam quasi illo, molestias facilis tempore recusandae eligendi
      laboriosam.
    </slot>
  </p>
</template>

<script>
export default {
  name: 'BaseParagraph',
};
</script>

<style lang="scss" scoped>
.base-paragraph {
  margin: 2rem 0;
}
</style>
