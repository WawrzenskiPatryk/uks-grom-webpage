<template>
  <nav>
    <ul class="nav">
      <li v-for="item in navItems" :key="item.name" class="nav__item">
        <nuxt-link :to="item.href" class="nav__link">{{ item.name }}</nuxt-link>
        <nav-submenu
          v-if="item.submenu"
          :submenu="item.submenu"
          class="nav__submenu"
        ></nav-submenu>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['navItems'],
};
</script>

<style lang="scss" scoped>
.nav {
  position: relative;

  @media screen and (min-width: 1024px) {
    display: flex;
    height: 6rem;
  }

  &__item {
    position: relative;
    * {
      color: $main-dark;
    }
  }

  &__link {
    padding: 0 2rem;
    align-items: center;
    position: relative;
    height: 100%;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        color: $primary-color;
      }
    }

    @media screen and (max-width: 1023.9px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1024px) {
      display: flex;
      @media (hover: hover) {
        &:hover {
          &::after {
            width: 100%;
          }
        }
        &::after {
          content: '';
          width: 0%;
          position: absolute;
          height: 3px;
          bottom: 0;
          left: 0;
          background-color: $secondary-color;
          transition: width 150ms ease;
        }
      }
    }

    &.nuxt-link {
      &-exact-active {
        color: $primary-color;
        pointer-events: none;
        cursor: default;
        &::after {
          content: none;
        }
      }
    }
  }

  &__submenu {
    min-width: 100%;
    background-color: $main-light;
    // border: 1px solid red;

    @media screen and (min-width: 768px) {
      padding-right: 2rem;
    }
    @media screen and (min-width: 1024px) {
      position: absolute;
      right: 0;
      padding: 0;
    }
  }
}
</style>
