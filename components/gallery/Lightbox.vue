<template>
  <BaseBackdrop class="gallery-lightbox" @close-backdrop="closeLightbox">
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
        :src="require(`~/assets/images/${image}`)"
        alt=""
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
}
</style>
