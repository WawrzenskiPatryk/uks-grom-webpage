<template>
  <div class="header__logo">
    <slot>
      <h1 class="logo-placeholder">
        <nuxt-link to="/">
          <span><slot name="first">Logo</slot></span>
          <span><slot name="second">Test</slot></span>
        </nuxt-link>
      </h1>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.logo-placeholder {
  a {
    font-family: 'Jost';
    color: $primary-color;
    display: flex;
    align-items: center;
    text-shadow: rgba(0, 0, 0, 1) 0 0 1px;

    :first-child {
      color: $secondary-color;
    }
  }
}
</style>
