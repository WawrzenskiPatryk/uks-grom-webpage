<template>
  <ul id="base-list" class="base-list">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'BaseList',
  mounted() {
    const items = [...document.getElementById('base-list').children];
    items.forEach(item => (item.textContent = item.textContent.trim()));
  },
};
</script>

<style lang="scss" scoped>
.base-list {
  *:before {
    content: '';
    background-image: $button-gradient;
    display: inline-block;
    position: relative;
    margin-right: 1rem;
    border-radius: 100rem;
    height: 0.8rem;
    width: 0.8rem;
    bottom: 1px;
    @media screen and (min-width: $tablet-min-screen-width) {
      height: 0.9rem;
      width: 0.9rem;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      height: 1rem;
      width: 1rem;
      bottom: 2px;
    }
  }
}
</style>
