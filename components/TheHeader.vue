<template>
  <header class="header">
    <LogoPlaceholder class="header__logo" first-word="UKS" second-word="GROM" />
    <HeaderHamburger
      class="header__hamburger"
      :is-nav-visible="isNavVisible"
      @hamburgerToggle="toggleMenu"
    />
    <HeaderNavigation
      class="header__navigation"
      :class="{
        'header__navigation--displayed': isNavDisplayed,
        'header__navigation--visible': isNavVisible,
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
          path: '/o-nas',
          submenu: [],
        },
        {
          name: 'Treningi',
          path: '/treningi',
          submenu: [
            // { name: 'Trenerzy', path: '/trenerzy' },
            // { name: 'Wychowankowie', path: '/wychowankowie' },
          ],
        },
        {
          name: 'Aktualności',
          path: '/aktualnosci',
          submenu: [
            // { name: 'Wakacje 2022', path: '/wakacje2022' },
            // { name: 'Ferie 2022', path: '/ferie2022' },
          ],
        },
        {
          name: 'Galeria',
          path: '/galeria',
          submenu: [],
        },
        {
          name: 'Kontakt',
          path: '/kontakt',
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: $primary-light;
  width: 100%;
  height: $header-height;
  box-shadow: $primary-shadow 0 0 1rem;
  padding: 0 3rem;
  user-select: none;
  z-index: 100;

  &__hamburger {
    @media screen and (min-width: $desktop-min-screen-width) {
      display: none;
    }
  }

  &__navigation {
    display: none;
    position: absolute;
    top: $header-height;
    right: 0;

    transition: transform 0.3s ease;

    @media screen and (min-width: $tablet-min-screen-width) {
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      display: block;
      position: static;
    }

    &--displayed {
      display: block;
      transform: translateX(-100%);
      @media screen and (min-width: $tablet-min-screen-width) {
        transform: translateX(100%);
      }
    }

    &--visible {
      transform: translateX(0);
    }
  }
}
</style>
