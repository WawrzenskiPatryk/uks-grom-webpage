<template>
  <section class="slider">
    <div class="slider__content-wrapper">
      <div class="slider__content">
        <h1 class="slider__title">LOREM IPSUM</h1>
        <h2 class="slider__subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          perferendis itaque voluptas a illo iste possimus aliquam, asperiores,
          doloribus deleniti enim nihil fuga voluptates quia porro dignissimos
          ducimus culpa? Nesciunt!
        </h2>
        <BaseButton class="slider__button">Lorem Ipsum</BaseButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.slider {
  background-image: url('~/assets/images/white_red_shirt_kids_football_players.jpg');
  background-size: cover;
  background-position: 42% 80%;
  height: calc(100vh - $header-height);
  color: $primary-light;

  &__content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: $heading-gradient;
  }
  &__content {
    max-width: $content-max-width;
    padding: 0 5rem;
    text-align: center;
    @media screen and (min-width: $tablet-min-screen-width) {
      text-align: left;
    }
  }
  &__title {
    font-family: $title-font-family;
    font-size: $small-title-font-size;

    @media screen and (min-width: $tablet-min-screen-width) {
      font-size: $medium-title-font-size;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      font-size: $large-title-font-size;
    }
  }
  &__subtitle {
    font-size: $default-font-size;
    font-weight: 100;
    width: 100%;
    @media screen and (min-width: $tablet-min-screen-width) {
      width: 67%;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      width: 50%;
      font-size: $large-subtitle-font-size;
    }
  }
  &__button {
    margin-top: 3rem;
  }
}
</style>
