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
            'Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży w Grecji, nad morzem Egejskim. Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.',
          image: require('~/assets/images/grecja2022.jpg'),
          path: '/aktualnosci/grecja2022',
        },
        {
          title: 'Grecja 2022',
          subtitle:
            'Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży w Grecji, nad morzem Egejskim. Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.',
          image: require('~/assets/images/grecja2022.jpg'),
          path: '/aktualnosci/grecja2022',
        },
        {
          title: 'Grecja 2022',
          subtitle:
            'Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży w Grecji, nad morzem Egejskim. Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.',
          image: require('~/assets/images/grecja2022.jpg'),
          path: '/aktualnosci/grecja2022',
        },
        {
          title: 'Grecja 2022',
          subtitle:
            'Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży w Grecji, nad morzem Egejskim. Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.',
          image: require('~/assets/images/grecja2022.jpg'),
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
  &__navigation {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
  }
}
</style>
