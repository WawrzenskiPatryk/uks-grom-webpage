<template>
  <main>
    <nuxt-link to="/">Home</nuxt-link>

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
        <!-- <img :src="post.image" :alt="post.title" /> -->
      </li>
    </ul>

    <nuxt-link to="/">Home</nuxt-link>
  </main>
</template>

<script>
export default {
  layout: 'TheLayout',
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then((res) =>
      res.json()
    )
  },
}
</script>
