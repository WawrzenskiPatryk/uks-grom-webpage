<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <HeaderNavigationItem
        v-for="item in navItems"
        :key="item.name"
        :name="item.name"
        :path="item.path"
        :submenu="item.submenu"
        :is-nav-visible="isNavVisible"
      />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNavigation',
  props: {
    navItems: { type: Array, required: true },
    isNavVisible: { type: Boolean, required: true },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  text-align: center;
  background-color: $primary-light;
  height: calc(100vh - $header-height);
  width: 100%;
  border-radius: none;

  @media screen and (min-width: $tablet-min-screen-width) {
    box-shadow: $primary-shadow -1rem 1rem 1rem -1rem;
    border-radius: 0 0 0 1rem;
    text-align: right;
    padding: 0.5rem 1rem 2rem 4rem;
    height: initial;
    width: initial;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    box-shadow: none;
    padding: 0 1rem;
    border-radius: none;
  }

  &__list {
    position: relative;
    top: 15%;

    @media screen and (min-width: $tablet-min-screen-width) {
      top: 0;
    }

    @media screen and (min-width: $desktop-min-screen-width) {
      display: flex;
      height: $header-height;
    }
  }
}
</style>
