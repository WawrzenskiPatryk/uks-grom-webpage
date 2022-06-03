<template>
  <section class="article-section">
    <NuxtLink :to="`/${parent}`" class="article-section__back-link">
      <fa-icon icon="fa-solid fa-arrow-left-long" />
      <span class="article-section__back-link--text">
        <slot name="back-link"> Back </slot>
      </span>
    </NuxtLink>

    <article class="article-section__article">
      <slot name="article-heading"> <BaseHeading /> </slot>

      <div
        class="article-section__article-illustration"
        :style="{ backgroundImage: `url(${illustrationUrl})` }"
      >
        <span
          v-if="isFull"
          class="article-section__article-illustration--full-background"
        >
          BRAK WOLNYCH MIEJSC
        </span>
      </div>

      <div class="article-section__article-columns-wrapper">
        <div
          class="article-section__article-column article-section__article-column--left"
        >
          <slot name="left-column">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            veritatis iste incidunt qui voluptatum omnis consectetur. Nulla
            nobis expedita doloribus? Quam dolorum omnis nostrum quisquam
            laudantium, iure vero corporis totam?
          </slot>
        </div>
        <div
          class="article-section__article-column article-section__article-column--right"
        >
          <slot name="right-column">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            tempore laudantium rerum odio voluptatum officiis dolores molestias,
            ipsa reiciendis a, repellat architecto quibusdam error eum illum
            dicta repudiandae unde possimus?
          </slot>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ArticleTripSection',
  inject: ['articleImage', 'articleIsFull'],
  computed: {
    parent() {
      const routeName = this.$route.name;
      const parentName = routeName.split('-')[0];
      return parentName;
    },
    illustrationUrl() {
      return this.articleImage();
    },
    isFull() {
      return this.articleIsFull();
    },
  },
};
</script>

<style lang="scss" scoped>
.article-section {
  &__article {
    text-align: center;
  }

  &__article-illustration {
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    height: 40vw;
    max-height: 30rem;
    width: 100%;
    margin: 4rem 0;
    color: $primary-light;
    font-weight: 600;
    overflow: hidden;

    font-size: 8vw;
    @media screen and (min-width: $desktop-min-screen-width) {
      font-size: 5vw;
    }
    @media screen and (min-width: $content-max-width) {
      font-size: 7rem;
    }

    &--full-background {
      background-color: $backdrop-color;
      opacity: 0.75;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 5vw;
    }
  }

  &__article-columns-wrapper {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $desktop-min-screen-width) {
      gap: 15rem;
      flex-direction: row;
    }
  }

  &__article-column {
    @media screen and (min-width: $desktop-min-screen-width) {
      &--left {
        width: 62%;
      }
      &--right {
        width: 38%;
      }
    }
  }

  &__back-link {
    display: inline-block;
    color: $primary-color-darken;
    transition: color 0.3s ease;
    position: relative;
    top: -2.5rem;
    border-bottom: 1px solid;
    padding-inline: 0.25rem;

    @media screen and (min-width: $tablet-min-screen-width) {
      top: 0;
    }

    @media (hover: hover) {
      &:hover {
        color: $primary-color;
        border-bottom: 1px solid $primary-color;
      }
    }

    &--text {
      margin-left: 1rem;
    }
  }
}
</style>
