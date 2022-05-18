<template>
  <section class="error-section">
    <h2>Nie znaleźliśmy takiej strony.</h2>
    <div>
      <NuxtLink to="/">
        <BaseButton> Strona Główna </BaseButton>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.error-section {
  justify-content: center;
  text-align: center;
  height: 65vh;
}
</style>
