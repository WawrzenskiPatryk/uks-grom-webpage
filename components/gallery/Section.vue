<template>
  <main class="gallery-section">
    <h3>{{ gallery.title }}</h3>
    <section class="gallery-section__images-wrapper">
      <div
        v-for="(image, index) in filteredImages"
        :key="index"
        class="gallery-section__image-container"
        @click="openLightBox(index)"
      >
        <img
          :src="require(`~/assets/images/${image}`)"
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
    };
  },
  computed: {
    filteredImages() {
      const images = this.gallery.images;
      const filteredImgs = images.slice(0, 4);
      return filteredImgs;
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
  // &__images-wrapper {
  //! TODO: CSS-GRID THAT OUT!
  // }

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

    &:nth-child(4) {
      &::after {
        content: 'Zobacz więcej';
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $primary-shadow;
        color: $primary-light;
        text-shadow: 0 0 0.75rem black, 0 0 2rem black;
        font-size: 3rem;
        height: 100%;
        width: 100%;
      }
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
