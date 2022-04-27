<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<style lang="scss">
$color-primary: #55c57a;
$primary-color: #0a92e0;
$secondary-color: #efdb03;
$main-dark: #35495e;
$secondary-dark: #252525;
$main-light: #ffffff;

// Light Theme Colors
$the-text-color: $main-dark;
$the-background-color: $main-light;

// Dark Theme Colors
// $the-text-color: $main-light;
// $the-background-color: $secondary-dark;

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
  font-size: 1.6rem;
  // padding-top: 8rem;
  line-height: 1.7;
  box-sizing: border-box;
  color: $the-text-color;
  background-color: $the-background-color;
}
</style>
