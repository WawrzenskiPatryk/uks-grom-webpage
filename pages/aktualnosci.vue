<template>
  <main>
    <nav class="article-navigation">
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
          path: '/strona-testowa',
        },
        {
          title: 'Bułgaria 2021',
          subtitle:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
          image: require('~/assets/images/jumping_kids_football_fun.jpg'),
          path: '/strona-testowa',
        },
        {
          title: 'Kąty Rybackie 2015',
          subtitle:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
          image: require('~/assets/images/jumping_kids_football_fun.jpg'),
          path: '/strona-testowa',
        },
        {
          title: 'Jarosławiec 2018',
          subtitle:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
          image: require('~/assets/images/jumping_kids_football_fun.jpg'),
          path: '/strona-testowa',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.article-navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
}
</style>
