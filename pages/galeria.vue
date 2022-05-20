<template>
  <main class="gallery">
    <section class="gallery__images-wrapper">
      <div
        v-for="(image, index) in galleryImages"
        :key="index"
        class="gallery__image-container"
        @click="openLightBox(index)"
      >
        <img
          :src="require(`~/assets/images/${image.fileName}`)"
          class="gallery__image"
        />
      </div>
    </section>

    <GalleryLightbox
      v-if="isLightBoxOpen"
      class="gallery__lightbox"
      :images="galleryImages"
      :initial-index="initialImageIndex"
      @close-lightbox="closeLightBox"
    />
  </main>
</template>

<script>
export default {
  name: 'GalleryPage',
  data() {
    return {
      isLightBoxOpen: false,
      initialImageIndex: 0,
      galleryImages: [
        {
          title: 'Test Title 1',
          fileName: 'white_red_shirt_kids_football_players.jpg',
        },
        {
          title: 'Test Title 2',
          fileName: 'school_physical_education_football.jpg',
        },
        {
          title: 'Test Title 1',
          fileName: 'jumping_kids_football_fun.jpg',
        },
        {
          title: 'Test Title 1',
          fileName: 'white_red_shirt_kids_football_players.jpg',
        },
        {
          title: 'Test Title 2',
          fileName: 'school_physical_education_football.jpg',
        },
        {
          title: 'Test Title 1',
          fileName: 'jumping_kids_football_fun.jpg',
        },
      ],
    };
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
.gallery {
  &__image-container {
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 320px;
    height: 200px;
    margin: 1rem;
    border-radius: 1rem;

    cursor: pointer;
    transition: opacity 0.3s ease;

    @media (hover: hover) {
      &:hover {
        opacity: 0.75;
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
