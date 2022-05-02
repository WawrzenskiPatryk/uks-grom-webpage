<template>
  <main>
    <h1><slot></slot></h1>
    <hr />
    <ul>
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
  </main>
</template>

<script>
/* eslint-disable vue/require-prop-types */
export default {
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

<style>
main {
  padding: 2rem 5rem;
}
ul {
  margin-top: 2rem;
}
</style>
