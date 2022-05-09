<template>
  <header class="header">
    <the-logo class="header__logo">
      <!-- Insert logo img instead of the placeholder template code -->
      <template #first>UKS</template>
      <template #second>GROM</template>
    </the-logo>
    <header-hamburger
      v-if="isMobile"
      class="header__hamburger"
      :nav-visible="isNavVisible"
      @hamburgerToggle="toggleMenu"
    ></header-hamburger>
    <transition name="header__nav">
      <header-nav
        v-if="isNavVisible || !isMobile"
        class="header__nav"
        :nav-items="navItems"
        :is-mobile="isMobile"
      ></header-nav>
    </transition>
  </header>
</template>

<script>
export default {
  props: { isMobile: Boolean },
  data() {
    return {
      isNavVisible: false,
      navItems: [
        {
          name: 'Strona Główna',
          href: '/',
          submenu: [],
        },
        {
          name: 'O nas',
          href: '/onas/',
          submenu: [
            { name: 'Trenerzy', href: '/onas/trenerzy/' },
            { name: 'Wychowankowie', href: '/onas/wychowankowie/' },
            { name: 'Kadra', href: '/onas/kadra/' },
            { name: 'Cele', href: '/onas/cele/' },
          ],
        },
        {
          name: 'Treningi',
          href: '/treningi/',
          submenu: [],
        },
        {
          name: 'Aktualności',
          href: '/aktualnosci/',
          submenu: [
            { name: 'Wakacje 2022', href: '/aktualnosci/wakacje2022/' },
            { name: 'Ferie 2022', href: '/aktualnosci/ferie2022/' },
          ],
        },
        {
          name: 'Galeria',
          href: '/galeria/',
          submenu: [],
        },
        {
          name: 'Kontakt',
          href: '/kontakt/',
          submenu: [],
        },
      ],
    };
  },
  methods: {
    toggleMenu(isActive) {
      this.isNavVisible = isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none;
  user-select: none;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: $primary-light;
  width: 100%;
  min-height: 6rem;
  box-shadow: $primary-shadow 0 0 1rem;
  padding: 0 3rem;

  &__logo {
    display: inline-block;
  }

  // &__hamburger {}

  &__nav {
    position: absolute;
    text-align: center;
    top: 6rem;
    right: 0;
    background-color: inherit;

    &-enter-active,
    &-leave-active {
      transition: transform 0.3s ease;
    }

    @media screen and (max-width: 767.9px) {
      height: calc(100vh - 6rem);
      width: 100%;

      &-enter,
      &-leave-to {
        transform: translateX(-100%);
      }
    }
    @media screen and (min-width: 768px) {
      box-shadow: $primary-shadow -1rem 1rem 1rem -1rem;
      text-align: right;
      padding: 0.5rem 1rem 2rem 4rem;

      &-enter,
      &-leave-to {
        transform: translateX(100%);
      }
    }
    @media screen and (min-width: 1024px) {
      position: static;
      box-shadow: none;
      padding: 0 1rem;
      // transform: none; --> actually this animation on resize is kinda cool ;)
    }
  }

  // @media screen and (min-width: 768px) {}
  // @media screen and (min-width: 1024px) {}
}
</style>
