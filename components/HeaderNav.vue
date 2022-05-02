<template>
  <nav>
    <ul class="nav">
      <nav-item
        v-for="item in navItems"
        :key="item.name"
        :name="item.name"
        :href="item.href"
        :submenu="item.submenu"
        class="nav__item"
      ></nav-item>
    </ul>
  </nav>
</template>

<script>
export default {
  /* eslint-disable vue/require-prop-types */
  props: ['navItems'],
};
</script>

<style lang="scss" scoped>
.nav {
  position: relative;

  @media screen and (min-width: 1024px) {
    display: flex;
    height: 6rem;
  }
}
</style>
