<template>
  <section class="heading">
    <div class="heading__content-wrapper">
      <h2 class="heading__title">{{ pageTitle }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeading',
  computed: {
    pageTitle() {
      const title = this.getTitleFromRouteName();
      const formattedTitle = this.capitalizeText(title);
      return formattedTitle;
    },
  },
  methods: {
    getTitleFromRouteName() {
      const routeName = this.$route.name;
      let title;
      if (routeName.includes('-')) {
        const indexOfFirstHyphen = routeName.indexOf('-');
        title = routeName.slice(indexOfFirstHyphen + 1);
        if (title.includes('-')) {
          const indexOfSecondHyphen = title.indexOf('-');
          title =
            title.slice(0, indexOfSecondHyphen) +
            ' ' +
            title.slice(indexOfSecondHyphen + 1);
        }
      } else {
        title = routeName;
      }
      return title;
    },
    capitalizeText(text) {
      const newText = text[0].toUpperCase() + text.slice(1);
      return newText;
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  background-image: url('~/assets/images/white_red_shirt_kids_football_players.jpg');
  color: $primary-light;
  min-height: 12rem;
  height: 20vh;
  background-position: 80% 5%;
  background-size: cover;
  @media screen and (min-width: $tablet-min-screen-width) {
    height: 35vh;
    min-height: 15rem;
    background-position: 20% 35%;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    min-height: 20rem;
    background-position: 10% 50%;
  }

  &__content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(2, 30, 46, 0.6);
    height: 100%;
  }

  &__title {
    width: $content-max-width;
    padding: 2rem 5rem;
    font-size: $small-title-font-size;
    @media screen and (min-width: $tablet-min-screen-width) {
      font-size: $medium-title-font-size;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      font-size: $large-title-font-size;
    }
  }
}
</style>
