<template>
  <section
    class="slider"
    :style="{
      backgroundImage: `url(${slideImage.path})`,
      backgroundPosition: slideImage.position,
    }"
  >
    <div class="slider__content-wrapper">
      <div class="slider__content">
        <h1 class="slider__title">{{ slideContent.title }}</h1>
        <h4 class="slider__subtitle">
          {{ slideContent.subtitle }}
        </h4>
        <NuxtLink :to="slideContent.buttonPath">
          <BaseButton
            class="slider__button"
            :label="slideContent.buttonLabel"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageSlider',
  props: {
    indexPage: {
      type: Object,
      required: true,
    },
  },
  computed: {
    slideImage() {
      const indexPage = this.indexPage;
      return indexPage.image;
    },
    slideContent() {
      const indexPage = this.indexPage;
      return indexPage.slide;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  text-shadow: 0 0 4rem $secondary-dark;
  background-size: cover;
  height: calc(100vh - $header-height);
  color: $primary-light;

  &__content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: $heading-gradient;
  }
  &__content {
    max-width: $content-max-width;
    padding: 0 5rem;
    text-align: center;
    @media screen and (min-width: $tablet-min-screen-width) {
      text-align: left;
    }
  }
  &__title {
    font-family: $title-font-family;
    text-transform: uppercase;
  }
  &__subtitle {
    font-weight: 300;
    width: 100%;
    @media screen and (min-width: $tablet-min-screen-width) {
      width: 67%;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      width: 50%;
    }
  }
  &__button {
    margin-top: 3rem;
  }
}
</style>
