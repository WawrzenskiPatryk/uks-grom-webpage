<template>
  <main class="gallery-section">
    <h3 class="gallery-section__title">
      <span class="gallery-section__title--heading">
        {{ gallery.title }}
      </span>
    </h3>
    <section class="gallery-section__images-wrapper">
      <div
        v-for="(image, index) in loadedImages"
        :key="index"
        class="gallery-section__image-container"
        @click="openLightBox(index)"
      >
        <img :src="image" class="gallery-section__image" />
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
      windowWidth: null,
    };
  },
  computed: {
    loadedImages() {
      const images = this.gallery.images;
      let amountOfLoadedImgs;
      if (this.windowWidth < 768) {
        amountOfLoadedImgs = 1;
      } else if (this.windowWidth >= 768 && this.windowWidth < 1034) {
        amountOfLoadedImgs = 2;
      } else if (this.windowWidth >= 1034 && this.windowWidth < 1440) {
        amountOfLoadedImgs = 3;
      } else if (this.windowWidth >= 1440 && this.windowWidth < 1700) {
        amountOfLoadedImgs = 4;
      } else {
        amountOfLoadedImgs = 5;
      }
      const filteredImgs = images.slice(0, amountOfLoadedImgs);
      return filteredImgs;
    },
  },
  mounted() {
    this.setWindowWidth();
    window.addEventListener('resize', this.setWindowWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.setWindowWidth);
  },
  methods: {
    openLightBox(index) {
      this.initialImageIndex = index;
      this.isLightBoxOpen = true;
    },
    closeLightBox() {
      this.isLightBoxOpen = false;
    },
    setWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-section {
  &__title {
    &--heading {
      text-transform: capitalize;
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

    &:last-child:not(:first-child):after {
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
