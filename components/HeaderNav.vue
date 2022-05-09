<template>
  <nav>
    <ul class="nav">
      <nav-item
        v-for="item in navItems"
        :key="item.name"
        :name="item.name"
        :path="item.path"
        :submenu="item.submenu"
        :is-mobile="isMobile"
        class="nav__item"
      ></nav-item>
    </ul>
  </nav>
</template>

<script>
export default {
  // props: ['navItems', 'isMobile'],
  props: {
    navItems: { type: Array, required: true },
    isMobile: { type: Boolean },
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
