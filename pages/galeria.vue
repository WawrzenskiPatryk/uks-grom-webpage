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
import {
  getStorage,
  ref as firebaseRef,
  listAll,
  getDownloadURL,
} from 'firebase/storage';

export default {
  name: 'GalleryPage',
  data() {
    return {
      isLoading: false,
      galleries: [],
    };
  },
  async created() {
    this.isLoading = true;
    try {
      this.galleries = await this.getGalleriesFromStorage();
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    setGalleryName(name) {
      return name.slice(3).replace(/-/g, ' ');
    },
    getReferenceItems(reference) {
      return listAll(reference).then(result => result.items);
    },
    getReferencePrefixes(reference) {
      return listAll(reference).then(result => result.prefixes);
    },
    async getGalleriesFromStorage() {
      const downloadedGalleries = [];

      const storage = getStorage();
      const mainFolderName = 'gallery';
      const mainFolderRef = firebaseRef(storage, mainFolderName);

      const galleriesReferences = await this.getReferencePrefixes(
        mainFolderRef
      );

      galleriesReferences.forEach(async galleryReference => {
        downloadedGalleries.unshift({
          title: this.setGalleryName(galleryReference.name),
          images: [],
        });

        const imagesReferences = await this.getReferenceItems(galleryReference);

        imagesReferences.forEach((imageReference, index) => {
          this.galleries.forEach(async gallery => {
            const areTitlesMatching = imageReference.fullPath.includes(
              gallery.title.replace(/ /g, '-')
            );

            if (areTitlesMatching) {
              const imageUrl = await getDownloadURL(imageReference);
              this.$set(gallery.images, index, imageUrl);
            }
          });
        });
      });

      return downloadedGalleries;
    },
  },
};
</script>
