<template>
  <span class="download-link__container">
    <a :href="path" class="download-link" download>
      <fa-icon class="download-link__icon" icon="fa-solid fa-file-arrow-down" />
      <slot />
    </a>
  </span>
</template>

<script>
export default {
  name: 'DownloadLink',
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
  position: relative;
  display: inline-block;
  color: $primary-color-darken;
  transition: color 0.3s ease;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  font-weight: 600;

  @media (hover: hover) {
    &:hover {
      color: $primary-color;
    }
  }

  font-size: $mobile-font-size;
  @media screen and (min-width: $tablet-min-screen-width) {
    font-size: $small-subtitle-font-size;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    font-size: $large-subtitle-font-size;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: -2.5rem;
    transform: translateY(-50%);
    margin-right: 0.5rem;
    @media screen and (min-width: $desktop-min-screen-width) {
      margin-right: 1rem;
    }
  }

  &__container {
    display: inline-block;
    margin: 0.5rem;
  }
}
</style>
