<template>
  <ul class="submenu">
    <li v-for="item in submenu" :key="item.name" class="submenu__item">
      <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HeaderNavigationSubmenu',
  props: {
    submenu: { type: Array, required: true },
  },
};
</script>

<style lang="scss" scoped>
.submenu {
  background-color: $primary-light;
  box-shadow: $secondary-shadow 0rem 1rem 1rem -1rem inset,
    $secondary-shadow 0rem -1rem 1rem -1rem inset;
  border-top: 1px solid $secondary-color;
  border-bottom: 1px solid $primary-color;

  @media screen and (min-width: 768px) {
    box-shadow: none;
  }
  @media screen and (min-width: 1024px) {
    box-shadow: $primary-shadow 0 1rem 1rem -1rem,
      $primary-shadow 1rem 0rem 1rem -1rem,
      $primary-shadow -1rem 0rem 1rem -1rem;

    border-top: none;
    border-bottom: $secondary-color 3px solid;
  }

  &__item {
    * {
      display: inline-block;
      color: $primary-dark;
      transition: color 0.2s ease;
    }

    @media screen and (min-width: 1024px) {
      padding: 0.5rem 1rem 0.5rem 2rem;
    }
    cursor: pointer;

    @media (hover: hover) {
      &:hover * {
        color: $primary-color;
      }
    }
  }
}
</style>
