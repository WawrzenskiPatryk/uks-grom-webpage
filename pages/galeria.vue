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
      galleries: [],
    };
  },
  created() {
    this.getGalleriesFromAssets();
  },
  methods: {
    getGalleriesFromAssets() {
      const storedImages = require.context(
        '~/assets/galleries',
        true,
        /^.*\.jpg$/
      );
      const imagesNames = storedImages.keys().map((key) => key.slice(2));
      const galleriesNames = [];

      imagesNames.forEach((name) => {
        const endOfGalleryName = name.indexOf('/');
        const galleryName = name.slice(0, endOfGalleryName).replace(/-/g, ' ');

        if (!galleriesNames.includes(galleryName)) {
          galleriesNames.push(galleryName);
        }
      });

      galleriesNames.forEach((galleryName) => {
        this.galleries.push({
          title: galleryName,
          images: [],
        });
      });

      imagesNames.forEach((name) => {
        this.galleries.forEach((gallery) => {
          if (name.includes(gallery.title.replace(/ /g, '-'))) {
            gallery.images.push(name);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
