<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: $default-font-size;
  line-height: 1.7;
  box-sizing: border-box;
  color: $the-text-color;
  background-color: $the-background-color;
  // padding-top: 8rem;
}
</style>
