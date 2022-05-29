<template>
  <main v-if="!isLoading" class="gallery">
    <GallerySection
      v-for="(gallery) in unshiftedGalleries"
      :key="gallery.title"
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
      galleries: [],
      galleriesReferences: [],
      isLoading: false
    };
  },
  // @mnieznaj adviced to use mounted() here, but from my observation
  // created() allows the app to download images significantly faster
  computed: {
    unshiftedGalleries() {
      return [...this.galleries].reverse()
    }
  },
  async created() {
    this.isLoading = true
    try {
      this.galleries = await this.getImagesFromStorage();
    } finally {
      this.isLoading = false
    }
  },
  methods: {
    setGalleryName(name) {
      return name.replace(/-/g, ' ')
    },
    getReferenceItems(reference){
      return listAll(reference).then(result => result.items)
    },
    getReferencePrefixes(reference){
      return listAll(reference).then(result => result.prefixes)
    },
    async getImagesFromStorage() {
      const storage = getStorage();
      const mainFolderName = 'gallery';
      const mainFolderRef = firebaseRef(storage, mainFolderName);

      const imageGalleries = []

      this.galleriesReferences = await this.getReferencePrefixes(mainFolderRef)

      this.galleriesReferences.forEach(async (galleryReference) => {
        const itemsInGallery = await this.getReferenceItems(galleryReference)
        const imagesList = await Promise.all(itemsInGallery.map((item) => getDownloadURL(item)))
        // because it is a promise, sometimes they might be returned in different order
        imageGalleries.push({
          title: this.setGalleryName(galleryReference.name),
          images: [...imagesList]
        });
      });

      return imageGalleries
    },
  },
};
</script>
