<template>
  <header class="header">
    <the-logo class="header__logo">
      <!-- Insert logo img instead of the placeholder template code -->
      <template #first>UKS</template>
      <template #second>GROM</template>
    </the-logo>
    <header-hamburger
      class="header__hamburger"
      :is-nav-visible="isNavVisible"
      @hamburgerToggle="toggleMenu"
    ></header-hamburger>
    <header-nav
      class="header__nav"
      :class="{ 'header__nav--visible': isNavVisible }"
      :nav-items="navItems"
    ></header-nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavVisible: false,
      navItems: [
        {
          name: 'Strona Główna',
          path: '/',
          submenu: [],
        },
        {
          name: 'O nas',
          path: '/onas/',
          submenu: [
            { name: 'Trenerzy', path: '/onas/trenerzy/' },
            { name: 'Wychowankowie', path: '/onas/wychowankowie/' },
            { name: 'Kadra', path: '/onas/kadra/' },
            { name: 'Cele', path: '/onas/cele/' },
          ],
        },
        {
          name: 'Treningi',
          path: '/treningi/',
          submenu: [],
        },
        {
          name: 'Aktualności',
          path: '/aktualnosci/',
          submenu: [
            { name: 'Wakacje 2022', path: '/aktualnosci/wakacje2022/' },
            { name: 'Ferie 2022', path: '/aktualnosci/ferie2022/' },
          ],
        },
        {
          name: 'Galeria',
          path: '/galeria/',
          submenu: [],
        },
        {
          name: 'Kontakt',
          path: '/kontakt/',
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

  &__hamburger {
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  &__nav {
    display: none;
    position: absolute;
    text-align: center;
    top: 6rem;
    right: 0;
    background-color: inherit;

    transition: transform 0.3s ease;

    @media screen and (max-width: 767.9px) {
      height: calc(100vh - 6rem);
      width: 100%;

      transform: translateX(-100%);
    }
    @media screen and (min-width: 768px) {
      box-shadow: $primary-shadow -1rem 1rem 1rem -1rem;
      text-align: right;
      padding: 0.5rem 1rem 2rem 4rem;

      transform: translateX(100%);
    }
    @media screen and (min-width: 1024px) {
      display: block;
      position: static;
      box-shadow: none;
      padding: 0 1rem;
      transform: none;
    }

    &--visible {
      display: block;
      transform: translateX(0);
    }
  }
}
</style>
