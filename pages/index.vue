<template>
  <the-layout>
    <p>{{ testText }}</p>
    <nuxt-link to="/subpage">Subpage</nuxt-link>
    
    <header-hamburger></header-hamburger>
  </the-layout>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      testText: 'Below is a link for subpage',
    }
  },
}
</script>
