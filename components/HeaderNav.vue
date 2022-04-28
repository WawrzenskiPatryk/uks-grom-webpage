<template>
  <nav class="header__nav">
    <ul class="nav">
      <li v-for="btn in navElements" :key="btn.name" class="nav__item">
        <nuxt-link :to="btn.link">{{ btn.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['navElements'],
};
</script>

<style lang="scss" scoped>
.header__nav {
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 1rem 0;
}

.nav {
  @media screen and (min-width: 1024px) {
    display: flex;
    // TODO: Desktop navigation styling!
  }

  &__item * {
    color: $main-dark;
  }
}
</style>
