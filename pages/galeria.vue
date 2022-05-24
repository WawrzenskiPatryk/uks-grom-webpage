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
      const imagesFormattedPaths = storedImages.keys().map(key => key.slice(2));
      const galleriesTitles = [];

      imagesFormattedPaths.forEach(path => {
        const endOfGalleryName = path.indexOf('/');
        const galleryName = path.slice(0, endOfGalleryName).replace(/-/g, ' ');

        if (!galleriesTitles.includes(galleryName)) {
          galleriesTitles.push(galleryName);
        }
      });

      galleriesTitles.forEach(title => {
        this.galleries.unshift({
          title,
          images: [],
        });
      });

      this.galleries.forEach(gallery => {
        imagesFormattedPaths.forEach(path => {
          if (path.includes(gallery.title.replace(/ /g, '-'))) {
            gallery.images.push(path);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
