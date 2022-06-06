<template>
  <main class="index">
    <!-- <BaseHeading title class="index__first-heading">
      <template #title>
        <span class="upper text-colored">
          Organizujemy dla dzieci i młodzieży
        </span>
      </template>
    </BaseHeading> -->

    <PictureSection :image="require('~/assets/images/grecja.jpg')">
      <BaseHeading title subtitle aside deco>
        <template #title>
          Zajęcia, zawody i festyny profilaktyczne i rekreacyjno - sportowe
        </template>
        <template #subtitle>
          Naszym celem jest prawidłowy rozwój fizyczny i psychiczny naszych
          podopiecznych. Razem budujemy tak ważną świadomość ciała i pozytywne
          nastawienie do całożyciowej aktywności fizycznej jakimi są ruch i
          rekreacja.
        </template>
      </BaseHeading>
      <NuxtLink to="/o-nas">
        <BaseButton type="hollow-color" label="Więcej o nas" />
      </NuxtLink>
    </PictureSection>

    <PictureSection
      direction="right"
      :image="require('~/assets/images/grecja.jpg')"
    >
      <BaseHeading title subtitle aside deco>
        <template #title> Wycieczki i kolonie </template>
        <template #subtitle>
          Organizujemy obozy wakacyjne i zimowiska profilaktyczno - sportowe
          zarówno w kraju jak i za granicą. <br />
          Idealna forma wypoczynku dla aktywnych dzieci i młodzieży, promująca
          zdrowy styl życia.
        </template>
      </BaseHeading>

      <NuxtLink to="/aktualnosci">
        <BaseButton type="hollow-color" label="Sprawdź aktualności" />
      </NuxtLink>
    </PictureSection>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss" scoped>
.index {
  &__first-heading {
    margin-top: 5rem;
  }
}
</style>
