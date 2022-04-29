<template>
  <main>
    <p>{{ testText }}</p>
    <nuxt-link to="/onas">O Nas</nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'TheLayout',
  data() {
    return {
      testText: 'Below is a link for subpage',
    };
  },
};
</script>
