<template>
  <main class="placeholder">
    <LogoPlaceholder
      class="placeholder__logo"
      first-word="UKS"
      second-word="GROM"
    />
    <h1 class="placeholder__heading">Strona w budowie{{ displayedDots }}</h1>
    <h3>Zapraszamy wkrótce!</h3>
    <fa-icon
      class="placeholder__smile-icon"
      icon="fa-solid fa-face-smile-beam"
    />
  </main>
</template>

<script>
export default {
  name: 'MaintenancePlaceholder',
  data() {
    return {
      initialDots: '. . .',
      displayedDots: '',
    };
  },
  mounted() {
    setInterval(this.dotsHandler, 850);
  },
  methods: {
    dotsHandler() {
      this.displayedDots = this.displayedDots + ' .';
      if (this.displayedDots.includes(this.initialDots + ' .')) {
        this.displayedDots = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.placeholder {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding-top: 8vh;
  padding-bottom: 10vh;
  height: 100vh;
  width: 100vw;
  color: $primary-dark;
  background-color: $primary-light;
  user-select: none;

  &__logo,
  &__smile-icon {
    font-size: $small-title-font-size !important;
    @media screen and (min-width: $tablet-min-screen-width) {
      font-size: $medium-title-font-size !important;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      font-size: $large-title-font-size !important;
    }
  }
}
</style>
