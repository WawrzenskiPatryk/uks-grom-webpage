<template>
  <main class="news">
    <NoteRibbon
      v-if="!hasChildPage"
      :texts="articleNoteTexts"
      class="news__note-ribbon"
    />

    <NuxtChild class="news__content" />

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
          :has-caution="article.hasCaution"
          :caution-message="article.cautionMessage"
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
      articleIsFull: () =>
        this.articles[this.lastActiveArticleIndex].hasCaution,
      cautionMessage: () =>
        this.articles[this.lastActiveArticleIndex].cautionMessage,
    };
  },
  data() {
    return {
      lastActiveArticleIndex: 0,
      articleNoteTexts: [
        'W ferie planujemy wyjazd na narty - więcej informacji w maju!',
        'Za rok planowany wyjazd do Czarnogóry, nad Polskie Morze lub do Zakopanego!',
      ],
      articles: [
        {
          title: 'Grecja 2022',
          subtitle:
            'Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży w Grecji, nad morzem Egejskim. Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.',
          image: require('~/assets/images/grecja.jpg'),
          path: '/aktualnosci/grecja2022',
          hasCaution: true,
          cautionMessage: 'Pozostałe miejsca: 2',
        },
        {
          title: 'Jarosławiec 2022',
          subtitle:
            'Ośrodek Barka z dostępnym podgrzewanym basenem. Zakwaterowanie w domkach 6-osobowych z tarasem i pełnym węzłem sanitarnym + TV, wi-fi na stołówce, bilard , pingpong.',
          image: require('~/assets/images/jaroslawiec.jpg'),
          path: '/aktualnosci/jarosławiec2022',
          hasCaution: true,
          cautionMessage: 'Brak wolnych miejsc!',
        },
      ],
    };
  },
  computed: {
    hasChildPage() {
      const routeName = this.$route.name;
      const expectedPrefix = 'aktualnosci-';
      if (routeName.includes(expectedPrefix)) return true;
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

  &__note-ribbon {
    margin: -2rem 0 -1rem 0;
  }
}
</style>
