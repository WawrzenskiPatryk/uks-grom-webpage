<template>
  <main v-if="quotaError && !isLoading">
    <BaseHeading>
      <template #title>
        Nasza galeria została przeciążona
        <fa-icon icon="fa-solid fa-face-frown" />
      </template>
      <template #subtitle> Prosimy spróbować ponownie za 24h </template>
    </BaseHeading>
  </main>
  <!-- <main v-else-if="isLoading">
    <h2>
      <fa-icon icon="fa-solid fa-spinner" />
    </h2>
  </main> -->
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
    getReferenceItems(reference) {
      return listAll(reference).then(result => result.items);
    },
    getReferencePrefixes(reference) {
      return listAll(reference).then(result => result.prefixes);
    },
    setItemInSessionStorage(itemKey, itemValue) {
      sessionStorage.setItem(itemKey, JSON.stringify(itemValue));
    },
    getItemFromSessionStorage(itemKey) {
      return JSON.parse(sessionStorage.getItem(itemKey));
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
              this.setItemInSessionStorage('gallery', downloadedGalleries);
            }
          });
        });
      });

      return downloadedGalleries;
    },
  },
};
</script>
