<template>
  <nav>
    <ul class="nav">
      <HeaderNavigationItem
        v-for="item in navItems"
        :key="item.name"
        :name="item.name"
        :path="item.path"
        :submenu="item.submenu"
        :is-nav-visible="isNavVisible"
        class="nav__item"
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
.nav {
  position: relative;
  top: 15%;
  @media screen and (min-width: 768px) {
    top: 0;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 6rem;
  }
}
</style>
