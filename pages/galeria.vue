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
  getStorage as firebaseGetStorage,
  ref as firebaseRef,
  listAll as firebaseListAll,
  getDownloadURL as firebaseGetDownloadURL,
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
    const mainFolderName = 'gallery';
    const sessionStorageIsEmpty = !sessionStorage.getItem(mainFolderName);
    if (sessionStorageIsEmpty) {
      try {
        this.galleries = await this.getGalleriesFromFirebase(mainFolderName);
      } catch (error) {
        const quotaErrorKeyword = 'quota';
        const errorCode = error.code;
        if (errorCode.includes(quotaErrorKeyword)) this.quotaError = true;
        else throw new Error(error);
      } finally {
        this.isLoading = false;
      }
    } else {
      this.galleries = this.getItemFromSessionStorage(mainFolderName);
      this.isLoading = false;
    }
  },
  methods: {
    // firebase methods
    async getReferenceItems(reference) {
      const result = await firebaseListAll(reference);
      return result.items;
    },
    async getReferencePrefixes(reference) {
      const result = await firebaseListAll(reference);
      return result.prefixes;
    },

    // session methods
    setItemInSessionStorage(itemKey, itemValue) {
      sessionStorage.setItem(itemKey, JSON.stringify(itemValue));
    },
    getItemFromSessionStorage(itemKey) {
      return JSON.parse(sessionStorage.getItem(itemKey));
    },

    // main methods
    createGalleryTitle(galleryReference) {
      return galleryReference.name.slice(3).replace(/-/g, ' ');
    },
    createGalleryObject(galleryTitle) {
      const galleryObject = {
        title: galleryTitle,
        images: [],
      };
      return galleryObject;
    },
    addImageToGalleryObject(galleryObj, imgIndex, imageURL) {
      const imagesArray = galleryObj.images;
      this.$set(imagesArray, imgIndex, imageURL);
    },
    async galleryMatchHandler(galleryObj, imgIndex, imgRef, mainFolderName) {
      const imageURL = await firebaseGetDownloadURL(imgRef);
      this.addImageToGalleryObject(galleryObj, imgIndex, imageURL);
      this.setItemInSessionStorage(mainFolderName, this.galleries);
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
      const storage = firebaseGetStorage();
      const mainFolderReference = firebaseRef(storage, mainFolderName);

      const galleriesReferences = await this.getReferencePrefixes(
        mainFolderReference
      );

      galleriesReferences.forEach(async galleryReference => {
        const galleryTitle = this.createGalleryTitle(galleryReference);
        const galleryObject = this.createGalleryObject(galleryTitle);
        galleries.unshift(galleryObject);
        const imagesReferences = await this.getReferenceItems(galleryReference);

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
