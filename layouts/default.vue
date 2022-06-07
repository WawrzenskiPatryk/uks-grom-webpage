<template>
  <MaintenancePlaceholder v-if="isMaintenance" />

  <div v-else-if="isLoading" class="layout">
    <div v-if="isLoading" class="layout__spinner">
      <BaseSpinner />
    </div>
  </div>

  <div v-else class="layout">
    <TheHeader :navigation-items="pages" class="layout__header" />

    <PageSlider
      v-show="!isLoading"
      v-if="isIndex"
      :index-page="pages[0]"
      class="layout__heading"
    />
    <PageHeading
      v-show="!isLoading"
      v-else-if="pageExists"
      :pages="pages"
      class="layout__heading"
    />
    <Nuxt v-show="!isLoading" class="layout__page" />

    <TheFooter class="layout__footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      isMaintenance: false,
      pages: [
        {
          name: 'Strona Główna',
          path: '/',
          image: {
            path: require('~/assets/images/grecja.jpg'),
            position: '50% 62%',
          },
          slide: {
            title: 'Grecja 2022',
            subtitle:
              'Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży w Grecji, nad morzem Egejskim. Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.',
            buttonPath: '/aktualnosci/grecja2022',
            buttonLabel: 'Zobacz szczegóły',
          },
        },
        {
          name: 'O nas',
          path: '/o-nas',
          image: {
            path: require('~/assets/images/onas.jpg'),
            position: '0% 9%',
          },
        },
        {
          name: 'Aktualności',
          path: '/aktualnosci',
          image: {
            path: require('~/assets/images/katy_rybackie_ponton.jpg'),
            position: '50% 46%',
          },
        },
        {
          name: 'Galeria',
          path: '/galeria',
          image: {
            path: require('~/assets/images/galeria.jpg'),
            position: '50% 38%',
          },
        },
        {
          name: 'Kontakt',
          path: '/kontakt',
          image: {
            path: require('~/assets/images/kontakt.jpg'),
            position: '50% 40%',
          },
        },
      ],
    };
  },
  computed: {
    isIndex() {
      if (this.$route.name === 'index') return true;
      return false;
    },
    pageExists() {
      return !!this.$route.name;
    },
  },
  mounted() {
    window.addEventListener('load', this.disableLoading);
  },
  destroyed() {
    window.removeEventListener('load', this.disableLoading);
  },
  methods: {
    disableLoading() {
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  color: $primary-dark;
  background-color: $primary-light;
  max-width: 100vw;
  padding-top: $header-height;

  &__header {
    position: fixed;
    top: 0;
  }

  &__page,
  &__spinner {
    display: flex;
    flex-direction: column;
    gap: 8vh;
    align-self: center;
    max-width: $content-max-width;
    margin: 10vh 10vw;
  }

  &__spinner {
    min-height: 50vh;
    justify-content: center;
  }
}
</style>
