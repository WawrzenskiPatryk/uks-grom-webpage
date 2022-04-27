<template>
  <the-layout>
    <h1>{{ testText }}</h1>
    <nuxt-link to="/subpage">Subpage</nuxt-link>
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
