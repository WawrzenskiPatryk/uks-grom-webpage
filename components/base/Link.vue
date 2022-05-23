<template>
  <a :href="path" class="download-link"> <slot /> </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.download-link {
  color: $primary-color-darken;
  font-weight: 600;
  text-decoration: underline;
  transition: color 0.3s ease;

  @media (hover: hover) {
    &:hover {
      color: $primary-color-lighten;
    }
  }

  font-size: $mobile-font-size;
  @media screen and (min-width: $tablet-min-screen-width) {
    font-size: $small-subtitle-font-size;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    font-size: $large-subtitle-font-size;
  }
}
</style>
