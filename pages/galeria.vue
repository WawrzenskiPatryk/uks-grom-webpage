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
import StorageService from '../service/storage.js';
import FirebaseService from '../service/firebase.js';

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
    const mainFolderName = 'gallery';
    const quotaErrorKeyword = 'quota';
    const sessionStorageIsEmpty = !sessionStorage.getItem(mainFolderName);

    if (sessionStorageIsEmpty) {
      try {
        this.galleries = await this.getGalleriesFromFirebase(mainFolderName);
      } catch (error) {
        if (error.code.includes(quotaErrorKeyword)) this.quotaError = true;
        else throw new Error(error);
      } finally {
        this.isLoading = false;
      }
    } else {
      this.galleries = StorageService.getSessionItem(mainFolderName);
      this.isLoading = false;
    }
  },
  methods: {
    createGalleryTitle(galleryReference) {
      return galleryReference.name.slice(3).replace(/-/g, ' ');
    },

    createGalleryObject(galleryTitle) {
      return {
        title: galleryTitle,
        images: [],
      };
    },

    addImageToGalleryObject(galleryObj, imgIndex, imageURL) {
      const imagesArray = galleryObj.images;
      this.$set(imagesArray, imgIndex, imageURL);
    },

    async galleryMatchHandler(galleryObj, imgIndex, imgRef, mainFolderName) {
      const imageURL = await FirebaseService.getFileURL(imgRef);
      this.addImageToGalleryObject(galleryObj, imgIndex, imageURL);
      StorageService.setSessionItem(mainFolderName, this.galleries);
    },

    matchImagesToGalleries(galleries, imagesRefs, mainFolderName, callbackFn) {
      imagesRefs.forEach((imageReference, index) => {
        galleries.forEach(galleryObject => {
          const imagePath = imageReference.fullPath;
          const galleryHyphenatedTitle = galleryObject.title.replace(/ /g, '-');
          const titlesAreMatching = imagePath.includes(galleryHyphenatedTitle);
          if (titlesAreMatching) {
            callbackFn(galleryObject, index, imageReference, mainFolderName);
          }
        });
      });
    },

    async getGalleriesFromFirebase(mainFolderName) {
      const galleries = [];
      const mainFolderReference =
        FirebaseService.createMainReference(mainFolderName);

      const galleriesReferences = await FirebaseService.getReferencePrefixes(
        mainFolderReference
      );

      galleriesReferences.forEach(async galleryReference => {
        const galleryTitle = this.createGalleryTitle(galleryReference);
        const galleryObject = this.createGalleryObject(galleryTitle);
        galleries.unshift(galleryObject);
        const imagesReferences = await FirebaseService.getReferenceItems(
          galleryReference
        );

        this.matchImagesToGalleries(
          galleries,
          imagesReferences,
          mainFolderName,
          this.galleryMatchHandler
        );
      });

      return galleries;
    },
  },
};
</script>
