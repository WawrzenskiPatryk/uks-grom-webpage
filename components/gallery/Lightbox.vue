<template>
  <BaseBackdrop class="gallery-lightbox" @close-backdrop="closeLightbox">
    <div class="gallery-lightbox__counter">
      {{ currentImgIndex + 1 }} / {{ galleryLength }}
    </div>

    <div class="gallery-lightbox__icons">
      <a
        class="gallery-lightbox__icon gallery-lightbox__icon--download"
        :href="require(`~/assets/galleries/${images[currentImgIndex]}`)"
        download
      >
        <fa-icon icon="fa-solid fa-download" />
      </a>
      <span class="gallery-lightbox__icon" @click="closeLightbox">
        <fa-icon icon="fa-solid fa-xmark" />
      </span>
    </div>
    <GalleryButton
      class="gallery-lightbox__button gallery-lightbox__button--left"
      @clicked="showPrevImage"
    />

    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery-lightbox__slide"
    >
      <img
        v-show="index === currentImgIndex"
        class="gallery-lightbox__slide-image"
        :src="require(`~/assets/galleries/${image}`)"
        :alt="`${image}`"
      />
    </div>

    <GalleryButton
      class="gallery-lightbox__button gallery-lightbox__button--right"
      direction="right"
      @clicked="showNextImage"
    />
  </BaseBackdrop>
</template>

<script>
export default {
  name: 'GalleryLightbox',
  props: {
    images: {
      type: Array,
      required: true,
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentImgIndex: this.initialIndex,
    };
  },
  computed: {
    galleryLength() {
      return this.images.length;
    },
  },
  methods: {
    showNextImage() {
      if (this.currentImgIndex + 1 === this.images.length) {
        this.currentImgIndex = 0;
      } else {
        this.currentImgIndex++;
      }
    },
    showPrevImage() {
      if (this.currentImgIndex === 0) {
        this.currentImgIndex = this.images.length - 1;
      } else {
        this.currentImgIndex--;
      }
    },
    closeLightbox() {
      this.$emit('close-lightbox');
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-lightbox {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    color: $primary-light;
  }

  &__slide {
    display: flex;
    justify-content: center;

    &-image {
      user-select: none;
      max-width: 100%;
      max-height: 75vh;
      box-shadow: $secondary-dark 0 0 3rem;
    }
  }

  &__button {
    &--left {
      left: 5vw;
    }
    &--right {
      right: 5vw;
    }
  }

  &__icons {
    display: flex;
    font-size: 4rem;
    gap: 4rem;
    position: absolute;
    top: 1rem;
    right: 5rem;
  }
  &__icon {
    opacity: 0.75;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    * {
      color: $primary-light;
    }
    @media (hover: hover) {
      &:hover {
        opacity: 1;
      }
    }

    &--download {
      font-size: 3.5rem;
    }
  }

  &__counter {
    opacity: 0.75;
    font-size: 2.5rem;
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
