<template>
  <section class="heading">
    <div class="heading__title">
      <h2>{{ pageTitle }}</h2>
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
  background-image: url(~/assets/images/white_red_shirt_kids_football_players.jpg);
  display: flex;
  justify-content: center;
  align-items: center;

  &__title {
    // border: 1px solid red;
    color: $primary-light;
    font-size: 5rem;
    width: $content-max-width;
    padding: 2rem 5rem;
  }
}
</style>
