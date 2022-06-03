<template>
  <main class="news">
    <ArticleNote v-show="!hasChildPage" :text="articleNoteText" />

    <NuxtChild
      :image="articles[lastActiveArticleIndex].image"
      :is-full="articles[lastActiveArticleIndex].isFull"
      class="news__content"
    />

    <nav v-if="!hasChildPage" class="news__navigation">
      <NuxtLink
        v-for="(article, index) in articles"
        :key="article.title"
        :to="article.path"
      >
        <ArticleCard
          :image-url="article.image"
          :title="article.title"
          :subtitle="article.subtitle"
          :is-full="article.isFull"
          @clicked="setActiveArticleIndex(index)"
        />
      </NuxtLink>
    </nav>
  </main>
</template>

<script>
export default {
  name: 'NewsPage',
  provide() {
    return {
      articleImage: () => this.articles[this.lastActiveArticleIndex].image,
      articleIsFull: () => this.articles[this.lastActiveArticleIndex].isFull,
    };
  },
  data() {
    return {
      lastActiveArticleIndex: 0,
      articleNoteText:
        'Za rok planowany wyjazd do Czarnogóry, nad Polskie Morze lub do Zakopanego!',
      articles: [
        {
          title: 'Grecja 2022',
          subtitle:
            'Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży w Grecji, nad morzem Egejskim. Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.',
          image: require('~/assets/images/grecja.jpg'),
          path: '/aktualnosci/grecja2022',
          isFull: false,
        },
        {
          title: 'Jarosławiec 2022',
          subtitle:
            'Ośrodek Barka z dostępnym podgrzewanym basenem. Zakwaterowanie w domkach 6-osobowych z tarasem i pełnym węzłem sanitarnym + TV, wi-fi na stołówce, bilard , pingpong.',
          image: require('~/assets/images/jaroslawiec.jpg'),
          path: '/aktualnosci/jarosławiec2022',
          isFull: true,
        },
      ],
    };
  },
  computed: {
    hasChildPage() {
      const routeName = this.$route.name;
      if (routeName.includes('aktualnosci-')) return true;
      return false;
    },
  },
  methods: {
    setActiveArticleIndex(index) {
      this.lastActiveArticleIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  position: relative;
  &__navigation {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
  }
}
</style>
