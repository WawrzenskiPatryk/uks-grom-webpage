<template>
  <ul>
    <li v-for="item in submenu" :key="item.name">{{ item.name }}</li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['submenu'],
};
</script>

<style></style>
