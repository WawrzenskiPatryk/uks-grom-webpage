<template>
  <article class="article-card">
    <div
      class="article-card__heading"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    >
      <div class="article-card__heading--title-gradient">
        <h3 class="article-card__heading--title">
          {{ title }}
        </h3>
        <span v-if="isFull" class="article-card__heading--full upper">
          Brak wolnych miejsc
        </span>
      </div>
    </div>
    <div class="article-card__description">
      <p class="article-card__description--subtitle">
        {{ subtitle }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    imageUrl: {
      type: String,
      required: true,
      default: require('~/assets/images/white_red_shirt_kids_football_players.jpg'),
    },
    title: {
      type: String,
      required: true,
      default: 'Article Title',
    },
    subtitle: {
      type: String,
      required: true,
      default:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iusto ratione molestiae harum laboriosam sed maxime, ducimus explicabo...',
    },
    isFull: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.article-card {
  box-shadow: $primary-shadow 0 0 1rem;
  border-radius: 2rem;
  height: 100%;
  overflow: hidden;
  color: $primary-dark;
  transition: all 0.3s ease-in-out;
  @media screen and (min-width: $desktop-min-screen-width) {
    width: 55rem;
  }

  * {
    text-align: left;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-0.5rem);
    }
  }

  &__heading {
    width: 100%;
    height: 15rem;
    background-size: cover;
    background-position: center;
    position: relative;

    &--title-gradient {
      background-image: $heading-gradient-weaker;
      width: 100%;
      height: 100%;
    }

    &--title {
      transition: color 0.3s ease;
      position: absolute;
      padding: 1rem 2rem;
      bottom: 0;
      left: 0;
      color: $primary-light;
      text-shadow: 0 0 4rem black;
    }

    &--full {
      position: absolute;
      top: 0;
      right: 0;
      background-color: $secondary-color;
      font-weight: 600;

      padding: 0.5rem 1.5rem;
      border-radius: 0 0 0 1rem;
      box-shadow: $primary-shadow 0 0 1rem, $primary-shadow 0 0 2rem;
    }
  }

  &__description {
    padding: 1rem 2rem 2rem 2rem;
    &--subtitle {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
