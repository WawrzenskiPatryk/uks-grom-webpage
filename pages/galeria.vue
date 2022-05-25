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
      galleries: [],
    };
  },
  // @mnieznaj adviced to use mounted() here, but from my observation
  // created() allows the app to download images significantly faster
  created() {
    this.getImagesFromStorage();
  },
  methods: {
    getImagesFromStorage() {
      const storage = getStorage();
      const mainFolderName = 'gallery';
      const mainFolderRef = firebaseRef(storage, mainFolderName);

      listAll(mainFolderRef).then(result => {
        result.prefixes.forEach(folderRef => {
          this.galleries.unshift({
            title: folderRef.name.replace(/-/g, ' '),
            images: [],
          });

          listAll(folderRef).then(result => {
            result.items.forEach((itemRef, index) => {
              this.galleries.forEach(gallery => {
                const areTitlesMatching = itemRef.fullPath.includes(
                  gallery.title.replace(/ /g, '-')
                );

                if (areTitlesMatching) {
                  getDownloadURL(itemRef).then(url => {
                    gallery.images[index] = url;
                    gallery.images.push();
                  });
                }
              });
            });
          });
        });
      });
    },
  },
};
</script>
