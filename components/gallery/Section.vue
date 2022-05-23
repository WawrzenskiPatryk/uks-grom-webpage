<template>
  <main class="gallery-section">
    <h3 class="gallery-section__title">
      {{ gallery.title }}
      <span class="gallery-section__title--counter">
        ({{ galleryLength }} {{ countWord }})
      </span>
    </h3>
    <section class="gallery-section__images-wrapper">
      <div
        v-for="(image, index) in filteredImages"
        :key="index"
        class="gallery-section__image-container"
        @click="openLightBox(index)"
      >
        <img
          :src="require(`~/assets/galleries/${image}`)"
          :alt="`${image}`"
          class="gallery-section__image"
        />
      </div>
    </section>

    <GalleryLightbox
      v-if="isLightBoxOpen"
      class="gallery-section__lightbox"
      :images="gallery.images"
      :initial-index="initialImageIndex"
      @close-lightbox="closeLightBox"
    />
  </main>
</template>

<script>
export default {
  name: 'GallerySection',
  props: {
    gallery: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isLightBoxOpen: false,
      initialImageIndex: 0,
      galleryLength: this.gallery.images.length,
    };
  },
  computed: {
    filteredImages() {
      const images = this.gallery.images;
      const amountOfDisplayedImgs = 4;
      const filteredImgs = images.slice(0, amountOfDisplayedImgs);
      return filteredImgs;
    },
    countWord() {
      if (this.galleryLength === 1) return 'zdjęcie';
      if ([2, 3, 4].includes(this.galleryLength)) return 'zdjęcia';
      return 'zdjęć';
    },
  },
  methods: {
    openLightBox(index) {
      this.initialImageIndex = index;
      this.isLightBoxOpen = true;
    },
    closeLightBox() {
      this.isLightBoxOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-section {
  &__title {
    &--counter {
      font-size: 2rem;
    }
  }

  &__image-container {
    display: inline-block;
    overflow: hidden;
    position: relative;
    margin: 1rem;
    border-radius: 1rem;

    width: 25rem;
    height: 15rem;

    cursor: pointer;
    transition: opacity 0.3s ease;

    @media (hover: hover) {
      &:hover {
        opacity: 0.75;
      }
    }

    // &:nth-child(4) {
    //   display: none;
    // }
    &:nth-child(4):after {
      content: 'Zobacz wszystkie';
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $primary-shadow;
      color: $primary-light;
      text-shadow: 0 0 0.75rem black, 0 0 2rem black;
      font-size: 2.5rem;
      height: 100%;
      width: 100%;
    }
  }

  &__image {
    min-height: 100%;
    max-width: 100%;
    overflow: hidden;
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
  }
}
</style>
