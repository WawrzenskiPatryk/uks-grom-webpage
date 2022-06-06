<template>
  <main class="index">
    <PictureSection :image="require('~/assets/images/onas.jpg')">
      <BaseHeading title subtitle :aside="isAside" deco>
        <template #title>
          Zajęcia, zawody i festyny
        </template>
        <template #subtitle>
          Naszym celem jest prawidłowy rozwój fizyczny i psychiczny naszych
          podopiecznych. Razem budujemy tak ważną świadomość ciała i pozytywne
          nastawienie do całożyciowej aktywności fizycznej jakimi są ruch i
          rekreacja.
        </template>
      </BaseHeading>
      <NuxtLink v-if="isAside" to="/o-nas">
        <BaseButton type="hollow-color" label="Więcej o nas" />
      </NuxtLink>
    </PictureSection>
    <NuxtLink v-if="!isAside" to="/o-nas">
      <BaseButton type="hollow-color" label="Więcej o nas" />
    </NuxtLink>

    <PictureSection
      direction="right"
      :image="require('~/assets/images/katy_rybackie_ponton.jpg')"
    >
      <BaseHeading title subtitle :aside="isAside" deco>
        <template #title> Wycieczki i kolonie </template>
        <template #subtitle>
          Organizujemy obozy wakacyjne i zimowiska profilaktyczno - sportowe dla
          dzieci i młodzieży zarówno w kraju jak i za granicą. Stanowią one
          idealną formę wypoczynku promującą zdrowy styl życia.
        </template>
      </BaseHeading>
      <NuxtLink v-if="isAside" to="/aktualnosci">
        <BaseButton type="hollow-color" label="Sprawdź aktualności" />
      </NuxtLink>
    </PictureSection>
    <NuxtLink v-if="!isAside" to="/aktualnosci">
      <BaseButton type="hollow-color" label="Sprawdź aktualności" />
    </NuxtLink>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      windowWidth: null,
    };
  },
  computed: {
    isAside() {
      if (this.windowWidth < 768) return false;
      return true;
    },
  },
  mounted() {
    this.setWindowWidth();
    window.addEventListener('resize', this.setWindowWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.setWindowWidth);
  },
  methods: {
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.index {
  &__first-heading {
    margin-top: 5rem;
  }
  a {
    text-align: center;
    margin-top: -3rem;
    @media screen and (min-width: $tablet-min-screen-width) {
      text-align: initial;
      margin-top: initial;
    }
  }
}
</style>
