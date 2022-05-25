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
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

export default {
  name: 'GalleryPage',
  data() {
    return {
      galleries: [],
    };
  },
  created() {
    this.getImagesFromStorage();
    // eslint-disable-next-line no-console
    console.log(this.galleries);
  },
  methods: {
    getImagesFromStorage() {
      const storage = getStorage();
      const galleryPath = 'gallery';
      const listRef = ref(storage, galleryPath);

      listAll(listRef).then(result => {
        result.prefixes.forEach(folderRef => {
          this.galleries.unshift({
            title: folderRef.name.replace(/-/g, ' '),
            images: [],
          });

          listAll(folderRef).then(result => {
            result.items.forEach((itemRef, index) => {
              this.galleries.forEach(gallery => {
                if (
                  itemRef.fullPath.includes(gallery.title.replace(/ /g, '-'))
                ) {
                  getDownloadURL(itemRef).then(url => {
                    gallery.images[index] = url;
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
