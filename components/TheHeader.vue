<template>
  <header class="header">
    <header-logo>
      <!-- Insert logo img instead of the placeholder template code -->
      <template #first>UKS</template>
      <template #second>GROM</template>
    </header-logo>
    <header-hamburger
      v-if="isMobile"
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
        { name: 'Strona Główna', href: '#', dropdown: null },
        {
          name: 'O nas',
          href: '#',
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
  flex-direction: column;
  align-items: center;
  background-color: $main-light;
  width: 100%;
  min-height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0 0 2rem;
  padding: 1rem 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3rem;
  }
  @media screen and (min-width: 1024px) {
  }
}
</style>
