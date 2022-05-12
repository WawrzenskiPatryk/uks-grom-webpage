<template>
  <section class="placeholder">
    <ul class="placeholder__list">
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
        <p>{{ post.height }}</p>
        <ol>
          <li v-for="country in post.countries" :key="country">
            {{ country }}
          </li>
        </ol>
        <p>{{ post.continent }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ThePlaceholder',
  props: {
    pageTitle: { type: String, default: 'Page Title' },
  },
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    );
  },
};
</script>

<style lang="scss" scoped>
.placeholder {
  &__list {
    margin-top: 2rem;
  }
}
</style>
