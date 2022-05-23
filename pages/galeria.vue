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
          title: 'Wakacje 2022',
          images: [],
        },
      ],
    };
  },
  created() {
    this.getFileNamesFromGallery();
  },
  methods: {
    getFileNamesFromGallery() {
      const storedImages = require.context(
        '~/assets/images/gallery',
        true,
        /^.*\.jpg$/
      );
      const imagesKeys = storedImages.keys();
      const imagesNames = imagesKeys.map((key) => key.slice(2));
      imagesNames.forEach((name) => this.galleries[0].images.push(name));
    },
  },
};
</script>

<style lang="scss" scoped></style>
