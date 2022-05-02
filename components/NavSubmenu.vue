<template>
  <nav>
    <ul class="submenu">
      <li v-for="item in submenu" :key="item.name" class="submenu__item">
        <nuxt-link :to="item.href">{{item.name}}</nuxt-link>
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
  @media screen and (min-width: 768px) {
  }
  &__item {
    border: 1px solid greenyellow;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
