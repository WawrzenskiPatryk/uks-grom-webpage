<template>
  <main>
    <p>{{ testText }}</p>
    <nuxt-link to="/subpage">Subpage</nuxt-link>
    <header-hamburger></header-hamburger>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'TheLayout',
  data() {
    return {
      testText: 'Below is a link for subpage',
    }
  },
}
</script>
