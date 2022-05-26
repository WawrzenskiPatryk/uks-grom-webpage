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
      return this.getTitleFromRouteName();
    },
  },
  methods: {
    getTitleFromRouteName() {
      const routeName = this.$route.name;
      if (routeName === 'aktualnosci') return 'Aktualności';
      const title = routeName
        .replace(/([^0-9])([0-9])/g, '$1 $2')
        .replace('-', ' ');
      return title;
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
