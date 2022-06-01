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
      ></div>

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
  name: 'ArticleSection',
  props: {
    illustrationUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    parent() {
      const routeName = this.$route.name;
      const parentName = routeName.split('-')[0];
      return parentName;
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
    color: $primary-color-darken;
    transition: all 0.3s ease;
    position: relative;
    top: -2.5rem;
    border-bottom: 1px solid;
    border-color: $primary-color-darken;
    padding-bottom: 0.5rem;

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
