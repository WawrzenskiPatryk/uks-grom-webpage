<template>
  <main class="gallery">
    <GallerySection
      v-for="(gallery, index) in galleries"
      :key="index"
      :gallery="gallery"
      class="gallery__section"
    />
  </main>
</template>

<script>
export default {
  name: 'GalleryPage',
  data() {
    return {
      galleries: [
        {
          title: 'Galeria testowa 2022',
          images: [
            'jumping_kids_football_fun.jpg',
            'school_physical_education_football.jpg',
            'jumping_kids_football_fun.jpg',
            'school_physical_education_football.jpg',
            'jumping_kids_football_fun.jpg',
            'school_physical_education_football.jpg',
            'school_physical_education_football.jpg',
          ],
        },
        {
          title: 'Galeria testowa 2021',
          images: [
            'white_red_shirt_kids_football_players.jpg',
            'school_physical_education_football.jpg',
            'jumping_kids_football_fun.jpg',
            'white_red_shirt_kids_football_players.jpg',
            'school_physical_education_football.jpg',
            'jumping_kids_football_fun.jpg',
          ],
        },
        {
          title: 'Galeria testowa 2020',
          images: [
            'white_red_shirt_kids_football_players.jpg',
            'jumping_kids_football_fun.jpg',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
