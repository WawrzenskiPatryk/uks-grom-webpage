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
      const exceptionNames = {
        newsPage: 'aktualnosci',
      };

      let routeName = this.$route.name;
      if (routeName === exceptionNames.newsPage) {
        routeName = routeName.replace('s', 'ś');
      }
      for (const name in exceptionNames) {
        if (routeName.includes(exceptionNames[name] + '-')) {
          routeName = routeName.slice(exceptionNames[name].length);
        }
      }
      return routeName.replace(/([^0-9])([0-9])/g, '$1 $2').replace('-', ' ');
    },
    getHeadingImageByRouteName() {
      const routeName = this.$route.name;
      if (routeName.includes('aktualnosci')) {
        this.pageImagePosition = '50% 46%';
        return require('~/assets/images/katy_rybackie_ponton.jpg');
      } else if (routeName.includes('o-nas')) {
        this.pageImagePosition = '50% 42%';
        return require('~/assets/images/onas.jpg');
      } else {
        this.pageImagePosition = '50% 62%';
        return require('~/assets/images/white_red_shirt_kids_football_players.jpg');
      }
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
