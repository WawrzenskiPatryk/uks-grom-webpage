<template>
  <main v-if="quotaError && !isLoading">
    <BaseHeading title subtitle deco>
      <template #title>
        Nasza galeria została przeciążona
        <fa-icon icon="fa-solid fa-face-frown" />
      </template>
      <template #subtitle> Prosimy spróbować ponownie za 24h </template>
    </BaseHeading>
  </main>
  <main v-else-if="isLoading">
    <BaseSpinner />
  </main>
  <main v-else class="gallery">
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
      isLoading: true,
      quotaError: false,
      galleries: [],
    };
  },
  async mounted() {
    this.isLoading = true;
    const sessionStorageIsEmpty = !sessionStorage.getItem('gallery');
    if (sessionStorageIsEmpty) {
      try {
        this.galleries = await this.getGalleriesFromStorage();
      } catch (error) {
        if (error.code.includes('quota')) this.quotaError = true;
        else throw new Error(error);
      } finally {
        this.isLoading = false;
      }
    } else {
      this.galleries = this.getItemFromSessionStorage('gallery');
      this.isLoading = false;
    }
  },
  methods: {
    setGalleryName(name) {
      return name.slice(3).replace(/-/g, ' ');
    },
    setItemInSessionStorage(itemKey, itemValue) {
      sessionStorage.setItem(itemKey, JSON.stringify(itemValue));
    },
    getItemFromSessionStorage(itemKey) {
      return JSON.parse(sessionStorage.getItem(itemKey));
    },
    async getReferenceItems(reference) {
      const result = await listAll(reference);
      return result.items;
    },
    async getReferencePrefixes(reference) {
      const result = await listAll(reference);
      return result.prefixes;
    },
    addImagesToMatchingGallery(preparedGalleries, imagesReferences) {
      imagesReferences.forEach((imageReference, index) => {
        preparedGalleries.forEach(async gallery => {
          const imagePath = imageReference.fullPath;
          const galleryHyphenatedTitle = gallery.title.replace(/ /g, '-');

          const titlesAreMatching = imagePath.includes(galleryHyphenatedTitle);

          if (titlesAreMatching) {
            const imageUrl = await getDownloadURL(imageReference);
            this.$set(gallery.images, index, imageUrl);
            this.setItemInSessionStorage('gallery', preparedGalleries);
          }
        });
      });
    },
    async getGalleriesFromStorage() {
      const preparedGalleries = [];
      const storage = getStorage();
      const mainFolderName = 'gallery';
      const mainFolderRef = firebaseRef(storage, mainFolderName);

      const galleriesReferences = await this.getReferencePrefixes(
        mainFolderRef
      );

      galleriesReferences.forEach(async galleryReference => {
        const preparedGallery = {
          title: this.setGalleryName(galleryReference.name),
          images: [],
        };

        preparedGalleries.unshift(preparedGallery);
        const imagesReferences = await this.getReferenceItems(galleryReference);
        this.addImagesToMatchingGallery(preparedGalleries, imagesReferences);
      });

      return preparedGalleries;
    },
  },
};
</script>
