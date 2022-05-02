<template>
  <header class="header">
    <header-logo class="header__logo">
      <!-- Insert logo img instead of the placeholder template code -->
      <template #first>UKS</template>
      <template #second>GROM</template>
    </header-logo>
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
      // After implementing submenu components,
      // check if it also works without "null" submenu property value.
      // In other words "submenu: null" ==> no submenu property.
      navItems: [
        { name: 'Strona Główna', href: '/', submenu: null },
        {
          name: 'O nas',
          href: '/onas',
          submenu: [
            { name: 'Trenerzy', href: '#' },
            { name: 'Wychowankowie', href: '#' },
            { name: 'Kadra', href: '#' },
            { name: 'Cele', href: '#' },
            { name: 'Inne', href: '#' },
          ],
        },
        { name: 'Treningi', href: '#', submenu: null },
        {
          name: 'Aktualności',
          href: '#',
          submenu: [
            { name: 'Wakacje 2022', href: '#' },
            { name: 'Ferie 2022', href: '#' },
            { name: 'Wakacje 2021', href: '#' },
            { name: 'Ferie 2021', href: '#' },
            { name: 'Wakacje 2020', href: '#' },
            { name: 'Ferie 2020', href: '#' },
          ],
        },
        { name: 'Galeria', href: '#', submenu: null },
        {
          name: 'Kontakt',
          href: '#',
          submenu: null,
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
  background-color: $main-light;
  width: 100%;
  min-height: 6rem;
  box-shadow: $main-shadow 0 0 1rem;
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
    // border: 1px $main-dark solid;
    background-color: inherit;
    z-index: -1;

    &-enter-active,
    &-leave-active {
      transition: transform 0.3s ease;
    }

    @media screen and (max-width: 767.9px) {
      height: calc(100vh - 6rem);
      width: 100%;
      padding-top: 3rem;

      &-enter,
      &-leave-to {
        transform: translateY(-90vh);
      }
    }
    @media screen and (min-width: 768px) {
      box-shadow: $main-shadow -1rem 1rem 1rem -1rem;
      text-align: right;
      padding: 0.5rem 1rem 2rem 4rem;

      &-enter,
      &-leave-to {
        transform: translateX(20rem);
      }
    }
    @media screen and (min-width: 1024px) {
      position: static;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      box-shadow: none;
      padding: 0 1rem;
      transform: none;
    }
  }

  // @media screen and (min-width: 768px) {}
  // @media screen and (min-width: 1024px) {}
}
</style>
