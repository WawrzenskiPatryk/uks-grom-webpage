<template>
  <header class="header">
    <header-logo>
      <!-- Insert logo img instead of the placeholder template code -->
      <template #first>UKS</template>
      <template #second>GROM</template>
    </header-logo>
    <header-hamburger
      v-if="isMobile"
      :nav-visible="isNavVisible"
      @hamburgerToggle="toggleMenu"
    ></header-hamburger>
    <header-nav
      v-if="isNavVisible || !isMobile"
      :nav-items="navItems"
    ></header-nav>
  </header>
</template>

<script>
export default {
  props: { isMobile: Boolean },
  data() {
    return {
      isNavVisible: false,
      navItems: [
        { name: 'Strona Główna', href: '/', dropdown: null },
        {
          name: 'O nas',
          href: '/onas',
          dropdown: [
            { name: 'Trenerzy', href: '#' },
            { name: 'Wychowankowie', href: '#' },
            { name: 'Kadra', href: '#' },
            { name: 'Cele', href: '#' },
            { name: 'Inne', href: '#' },
          ],
        },
        { name: 'Treningi', href: '#', dropdown: null },
        {
          name: 'Aktualności',
          href: '#',
          dropdown: [
            { name: 'Wakacje 2022', href: '#' },
            { name: 'Ferie 2022', href: '#' },
            { name: 'Wakacje 2021', href: '#' },
            { name: 'Ferie 2021', href: '#' },
            { name: 'Wakacje 2020', href: '#' },
            { name: 'Ferie 2020', href: '#' },
          ],
        },
        { name: 'Galeria', href: '#', dropdown: null },
        {
          name: 'Kontakt',
          href: '#',
          dropdown: null,
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
  display: flex;
  // flex-direction: column;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: $main-light;
  width: 100%;
  min-height: 6rem;
  box-shadow: $main-shadow 0 0 1rem;
  // padding: 1rem 3rem;
  padding: 0 3rem;

  &__logo {
    display: inline-block;
  }

  // &__hamburger {}

  &__nav {
    position: absolute;
    text-align: center;
    // height: calc(100vh - 6rem);
    top: 6rem;
    right: 0;
    // border: 1px $main-dark solid;
    background-color: inherit;
    padding: 0 1rem;

    @media screen and (max-width: 767px) {
      height: calc(100vh - 6rem);
      width: 100%;
    }
    @media screen and (min-width: 768px) {
      // box-shadow: $main-shadow -1rem 1rem 1rem -1rem;
      text-align: right;
    }
    @media screen and (min-width: 1024px) {
      position: static;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      box-shadow: none;
    }
  }

  // @media screen and (min-width: 768px) {}
  // @media screen and (min-width: 1024px) {}
}
</style>
