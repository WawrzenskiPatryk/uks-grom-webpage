<template>
  <section
    class="picture-section"
    :class="{ 'picture-section__right': direction === 'right' }"
  >
    <div class="picture-section__texts-wrapper">
      <slot>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
        perferendis, aliquam vitae architecto porro harum, itaque alias quis
        quam amet sequi asperiores omnis possimus. Expedita voluptates debitis
        ipsa magnam nobis.
      </slot>
    </div>
    <div class="picture-section__picture-wrapper">
      <img :src="image" alt="picture" class="picture-section__image" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PictureSection',
  props: {
    direction: { type: String, default: 'left' },
    image: {
      type: String,
      default: require('~/assets/images/white_red_shirt_kids_football_players.jpg'),
    },
  },
};
</script>

<style lang="scss" scoped>
.picture-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8vw;
  margin: 2vh 0;

  @media screen and (min-width: $tablet-min-screen-width) {
    flex-direction: row;
    margin: 0vh 0;
    &__right {
      flex-direction: row-reverse;
    }
  }

  @media screen and (min-width: $desktop-min-screen-width) {
    margin: 8vh 0;
  }

  &__picture-wrapper,
  &__texts-wrapper {
    @media screen and (min-width: $tablet-min-screen-width) {
      width: 50%;
    }
  }

  &__texts-wrapper {
    padding-bottom: 3%;
  }

  &__picture-wrapper {
    position: relative;
    z-index: 10;
  }
  &__image {
    width: 100%;
    border-radius: 1rem;
    box-shadow: $primary-shadow 0 0 1rem;
  }
}
</style>
