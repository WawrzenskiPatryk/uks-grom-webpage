<template>
  <main>
    <header>This is the header with nav</header>
    <slot></slot>
    <footer>This is the footer</footer>
  </main>
</template>

<script>
export default {}
</script>

<style>
main {
  height: 100vh;
}

header,
footer {
  width: 100%;
  text-align: center;
  font-size: 30px;
}
</style>
