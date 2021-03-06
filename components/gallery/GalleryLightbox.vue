<template>
  <BaseBackdrop class="gallery-lightbox" @close-backdrop="closeLightbox">
    <div class="gallery-lightbox__counter">
      {{ currentImgIndex + 1 }} / {{ galleryLength }}
    </div>

    <div class="gallery-lightbox__icons">
      <a
        class="gallery-lightbox__icon gallery-lightbox__icon--download"
        :href="images[currentImgIndex]"
        target="_blank"
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
        :src="image"
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
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = 'auto';
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
    bottom: 12vh;
    &--left {
      left: 30%;
    }
    &--right {
      right: 30%;
    }
    @media screen and (min-width: $tablet-min-screen-width) {
      bottom: 5vh;
    }
    @media screen and (min-width: 1024px) {
      bottom: initial;
      &--left {
        left: 5vw;
      }
      &--right {
        right: 5vw;
      }
    }
  }

  &__icons {
    display: flex;
    font-size: 4rem;
    position: absolute;
    line-height: 0;
    top: 2rem;
    right: 8vw;
    gap: 4rem;
    @media screen and (min-width: $tablet-min-screen-width) {
      right: 5rem;
    }
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
    top: 2rem;
    left: 8vw;

    @media screen and (min-width: $tablet-min-screen-width) {
      top: 3rem;
      left: initial;
    }
  }
}
</style>
