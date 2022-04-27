<template>
  <div class="wrapper" @click="toggleMenu">
    <div class="bar" :class="{ 'menu-opened': isMenuOpened }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpened: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened
    },
  },
}
</script>

<style scoped>
.wrapper {
  cursor: pointer;
  width: 4rem;
  height: 3rem;
  background-color: greenyellow;
}

.bar,
.bar::after,
.bar::before {
  display: block;
  height: 0.5rem;
  margin: 0.5rem 0;
  width: 4rem;
  border-radius: 1rem;
  background-color: black;
  transition: all 200ms ease;
}

.bar {
  transform: translateY(1.2rem);
}

.bar::after,
.bar::before {
  content: '';
  position: relative;
}

.bar::before {
  position: relative;
  top: -1rem;
}

.wrapper:hover .bar,
.wrapper:hover .bar::after,
.wrapper:hover .bar::before {
  background-color: black;
}

.menu-opened.bar {
  width: 0;
  transition: all 200ms ease;
}

.menu-opened.bar::after {
  transform: translateY(-1rem) rotate(45deg);
}

.menu-opened.bar::before {
  transform: translateY(1rem) rotate(-45deg);
}
</style>
