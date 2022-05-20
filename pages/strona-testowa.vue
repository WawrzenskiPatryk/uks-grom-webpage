<template>
  <main>
    <PictureSection
      :image="
        require('~/assets/images/white_red_shirt_kids_football_players.jpg')
      "
    >
      <BaseHeading type="aside" />
    </PictureSection>
    <PictureSection
      direction="right"
      :image="require('~/assets/images/jumping_kids_football_fun.jpg')"
    >
      <BaseHeading type="aside" />
    </PictureSection>
    <PictureSection
      :image="require('~/assets/images/school_physical_education_football.jpg')"
    >
      <BaseHeading type="aside" />
    </PictureSection>

    <section>
      <h3>Pliki do pobrania:</h3>
      <h4>
        <a
          class="download-link"
          href="/downloads/sample.pdf"
          target="_blank"
          download
        >
          Pobierz PDF
        </a>
      </h4>
      <h4>
        <a class="download-link" href="/downloads/sample.docx" download>
          Pobierz DOCX
        </a>
      </h4>
      <h4>
        <a
          class="download-link"
          :href="
            require('~/assets/images/white_red_shirt_kids_football_players.jpg')
          "
          download
        >
          Pobierz zdjęcie
        </a>
      </h4>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TestPage',
};
</script>

<style lang="scss" scoped>
.download-link {
  color: $primary-color-darken;
  text-decoration: underline;
  transition: color 0.3s ease;
  @media (hover: hover) {
    &:hover {
      color: $primary-color-lighten;
    }
  }
}
</style>
