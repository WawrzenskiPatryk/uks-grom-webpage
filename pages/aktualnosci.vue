<template>
  <main class="news">
    <NuxtChild class="news__content" />

    <nav v-if="!hasChildComponent" class="news__navigation">
      <NuxtLink
        v-for="article in articles"
        :key="article.title"
        :to="article.path"
      >
        <ArticleCard
          :image-url="article.image"
          :title="article.title"
          :subtitle="article.subtitle"
        />
      </NuxtLink>
    </nav>
  </main>
</template>

<script>
export default {
  name: 'NewsPage',
  data() {
    return {
      articles: [
        {
          title: 'Grecja 2022',
          subtitle:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
          image: require('~/assets/images/jumping_kids_football_fun.jpg'),
          path: '/aktualnosci/grecja2022',
        },
      ],
    };
  },
  computed: {
    hasChildComponent() {
      const routeName = this.$route.name;
      if (routeName.includes('-')) return true;
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  align-self: stretch;

  &__navigation {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
  }
}
</style>
