<template>
  <nav>
    <ul class="submenu">
      <li v-for="item in submenu" :key="item.name" class="submenu__item">
        <nuxt-link :to="item.href">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['submenu'],
};
</script>

<style lang="scss" scoped>
.submenu {
  box-shadow: $weak-shadow 0rem 1rem 1rem -1rem inset,
    $weak-shadow 0rem -1rem 1rem -1rem inset;
  border-top: 1px solid $secondary-color;
  border-bottom: 1px solid $primary-color;

  @media screen and (min-width: 768px) {
    box-shadow: none;
  }
  @media screen and (min-width: 1024px) {
    box-shadow: $main-shadow 0 1rem 1rem -1rem,
      $main-shadow 1rem 0rem 1rem -1rem, $main-shadow -1rem 0rem 1rem -1rem;

    border-top: none;
    border-bottom: $secondary-color 3px solid;
  }

  &__item {
    * {
      display: inline-block;
      color: $main-dark;
    }

    @media screen and (min-width: 1024px) {
      padding: 0.5rem 1rem 0.5rem 2rem;
    }
    // border: 1px solid greenyellow;
    cursor: pointer;

    @media (hover: hover) {
      &:hover * {
        color: $primary-color;
      }
    }
  }
}
</style>
