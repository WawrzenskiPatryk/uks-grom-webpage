<template>
  <header class="header">
    <LogoPlaceholder class="header__logo" first-word="UKS" second-word="GROM" />
    <HeaderHamburger
      class="header__hamburger"
      :is-nav-visible="isNavVisible"
      @hamburgerToggle="toggleMenu"
    />
    <HeaderNavigation
      class="header__nav"
      :class="{
        'header__nav--displayed': isNavDisplayed,
        'header__nav--visible': isNavVisible,
      }"
      :nav-items="navItems"
      :is-nav-visible="isNavVisible"
    />
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isNavDisplayed: false,
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
    toggleMenu(isButtonActive) {
      if (isButtonActive) {
        this.animateMenuShowing();
      } else {
        this.animateMenuHiding();
      }
    },
    animateMenuShowing() {
      this.isNavDisplayed = true;
      setTimeout(() => {
        this.isNavVisible = true;
      }, 1);
    },
    animateMenuHiding() {
      this.isNavVisible = false;
      setTimeout(() => {
        this.isNavDisplayed = false;
      }, 300);
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
    }
    @media screen and (min-width: 768px) {
      box-shadow: $primary-shadow -1rem 1rem 1rem -1rem;
      text-align: right;
      padding: 0.5rem 1rem 2rem 4rem;
    }
    @media screen and (min-width: 1024px) {
      display: block;
      position: static;
      box-shadow: none;
      padding: 0 1rem;
      transform: none;
    }

    &--displayed {
      display: block;
      @media screen and (max-width: 767.9px) {
        transform: translateX(-100%);
      }
      @media screen and (min-width: 768px) {
        transform: translateX(100%);
      }
    }

    &--visible {
      transform: translateX(0);
    }
  }
}
</style>
