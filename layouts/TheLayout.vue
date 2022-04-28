<template>
  <div class="layout">
    <the-header :is-mobile="isMobile"></the-header>
    <nuxt></nuxt>
  </div>
</template>

<script>
export default {
  data() {
    return { isMobile: true };
  },
  mounted() {
    this.setIsMobile();
    window.addEventListener('resize', this.setIsMobile);
  },
  destroyed() {
    window.removeEventListener('resize', this.setIsMobile);
  },
  methods: {
    setIsMobile() {
      if (window.innerWidth < 1024) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
};
</script>

<style lang="scss">
// devTools: 375, 768, 1024, 1440

.layout {
  color: $main-dark;
  background-color: $main-light;
  transition: background-color 0.3s;
  max-width: 100vw;
  padding-top: 10rem;

  @media screen and (min-width: 1024px) {
    // TODO: Desktop navigation styling!
    padding-top: 6rem;
  }
}
</style>
