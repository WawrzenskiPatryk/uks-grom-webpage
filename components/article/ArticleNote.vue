<template>
  <div class="article-note">
    <p class="article-note__text">
      <fa-icon
        class="article-note__icon"
        icon="fa-solid fa-circle-exclamation"
      />
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true,
      default:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit laboriosam eaque',
    },
  },
};
</script>

<style lang="scss" scoped>
.article-note {
  margin: -2rem 0 -1rem 0;
  border-radius: 1rem;
  box-shadow: $secondary-shadow 0 0 1rem;

  @media screen and (min-width: $tablet-min-screen-width) {
    align-self: flex-start;
    box-shadow: $secondary-shadow -1rem 0 1rem;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    align-self: flex-start;
    box-shadow: $secondary-shadow -3rem 0 1rem;
  }

  &__text {
    position: relative;
    background-color: $secondary-color;
    font-weight: 600;
    padding: 1rem 1rem 1rem 4rem;
    border-radius: 1rem;
    width: 100%;
    text-align: center;

    @media screen and (min-width: $tablet-min-screen-width) {
      text-align: left;
      clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0 100%, 0 0);
      border-radius: 1rem 0 0 1rem;
      padding: 1rem 8rem 1rem 5rem;
      box-shadow: 1rem;
      left: -1rem;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      left: -3rem;
    }
  }
  &__icon {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    @media screen and (min-width: $tablet-min-screen-width) {
      left: 1.5rem;
    }
    font-size: 2.5rem;
    padding-right: 1rem;
  }
}
</style>
