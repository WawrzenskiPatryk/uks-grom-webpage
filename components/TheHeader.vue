<template>
  <header class="header">
    <header-logo>
      <!-- Insert logo img instead of the placeholder template code -->
      <template #first>UKS</template>
      <template #second>GROM</template>
    </header-logo>
    <header-hamburger @hamburgerToggle="toggleMenu"></header-hamburger>
    <header-nav v-if="isNavVisible" :nav-elements="navElements"></header-nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavVisible: false,
      navElements: [
        { name: 'Strona Główna', link: '#', dropdown: null },
        {
          name: 'O nas',
          link: '#',
          dropdown: [
            { name: 'Trenerzy', link: '#' },
            { name: 'Wychowankowie', link: '#' },
            { name: 'Kadra', link: '#' },
            { name: 'Cele', link: '#' },
            { name: 'Inne', link: '#' },
          ],
        },
        { name: 'Treningi', link: '#', dropdown: null },
        {
          name: 'Aktualności',
          link: '#',
          dropdown: [
            { name: 'Wakacje 2022', link: '#' },
            { name: 'Ferie 2022', link: '#' },
            { name: 'Wakacje 2021', link: '#' },
            { name: 'Ferie 2021', link: '#' },
            { name: 'Wakacje 2020', link: '#' },
            { name: 'Ferie 2020', link: '#' },
          ],
        },
        { name: 'Galeria', link: '#', dropdown: null },
        {
          name: 'Kontakt',
          link: '#',
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
  position: fixed;
  background-color: $main-light;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0 0 2rem;
  top: 0;
}
</style>
