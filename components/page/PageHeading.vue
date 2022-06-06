<template>
  <section
    class="heading"
    :style="{
      backgroundImage: `url(${pageImage})`,
      backgroundPosition: pageImagePosition,
    }"
  >
    <div class="heading__content-wrapper">
      <h2 class="heading__title">{{ pageTitle }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeading',
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      pageImagePosition: 'center',
    };
  },
  computed: {
    pageTitle() {
      return this.getTitleFromRouteName();
    },
    pageImage() {
      return this.getHeadingImageByRouteName();
    },
  },
  methods: {
    getTitleFromRouteName() {
      const routePath = '/' + this.$route.name;
      let pageTitle;
      this.pages.forEach(page => {
        if (routePath === page.path) pageTitle = page.name;
        else if (routePath.includes(page.path))
          pageTitle = routePath
            .slice(page.path.length)
            .replace(/([^0-9])([0-9])/g, '$1 $2')
            .replace('-', ' ');
      });
      return pageTitle;
    },
    getHeadingImageByRouteName() {
      const routePath = '/' + this.$route.name;
      let imagePath;
      this.pages.forEach(page => {
        if (routePath.includes(page.path)) {
          imagePath = page.image.path;
          this.pageImagePosition = page.image.position;
        }
      });

      return imagePath;
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  color: $primary-light;
  text-shadow: 0 0 4rem $secondary-dark;
  min-height: 12rem;
  height: 20vh;
  background-size: cover;
  @media screen and (min-width: $tablet-min-screen-width) {
    height: 30vh;
    min-height: 15rem;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    min-height: 20rem;
  }

  &__content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: $heading-gradient;
    height: 100%;
  }

  &__title {
    width: $content-max-width;
    text-transform: capitalize;
    margin: 2rem 10vw;
    text-align: center;
    @media screen and (min-width: $tablet-min-screen-width) {
      text-align: left;
    }
  }
}
</style>
