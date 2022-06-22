<template>
  <header class="header" :class="{ 'header--transparent': isTransparent }">
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
      :nav-items="navigationItems"
      :is-nav-visible="isNavVisible"
      :is-transparent="isTransparent"
    />
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    isIndex: { type: Boolean, required: true },
    navigationItems: {
      type: Array,
      required: true,
      default() {
        return [
          {
            name: 'Home',
            path: '/',
            submenu: [],
          },
          {
            name: 'About',
            path: '/about',
            submenu: [],
          },
          {
            name: "What's new",
            path: '/news',
            submenu: [
              { name: 'Topic 1', path: 'news/topic1' },
              { name: 'Topic 2', path: 'news/topic2' },
            ],
          },
          {
            name: 'Gallery',
            path: '/gallery',
            submenu: [],
          },
          {
            name: 'Contact',
            path: '/contact',
            submenu: [],
          },
        ];
      },
    },
  },
  data() {
    return {
      isNavDisplayed: false,
      isNavVisible: false,
      isScrolled: false,
    };
  },
  computed: {
    isTransparent() {
      return !this.isScrolled && this.isIndex;
    },
  },
  watch: {
    isIndex() {
      this.listenToScrollIfIndex();
    },
  },
  mounted() {
    this.listenToScrollIfIndex();
  },
  destroyed() {
    this.removeListenToScroll();
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
    listenToScrollIfIndex() {
      if (this.isIndex) this.addListenToScroll();
      else this.removeListenToScroll();
    },
    addListenToScroll() {
      window.addEventListener('scroll', this.changeScrollState);
    },
    removeListenToScroll() {
      window.removeEventListener('scroll', this.changeScrollState);
    },
    changeScrollState() {
      if (window.scrollY > 0) this.isScrolled = true;
      else this.isScrolled = false;
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
  width: 100%;
  height: $header-height;
  padding: 0 3rem;
  user-select: none;
  z-index: 100;
  background-color: $primary-light;
  box-shadow: $primary-shadow 0 0 1rem;
  transition: background-color 200ms ease;

  @media screen and (min-width: $desktop-min-screen-width) {
    &--transparent {
      background-color: transparent;
      box-shadow: none;
    }
  }

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
