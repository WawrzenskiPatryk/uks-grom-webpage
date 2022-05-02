<template>
  <li>
    <nuxt-link v-if="!submenu" :to="href" class="nav__link">{{
      name
    }}</nuxt-link>
    <span v-else class="nav__link" @click="toggleSubmenu">{{ name }}</span>
    <transition name="nav__submenu">
      <nav-submenu
        v-if="submenu"
        :submenu="submenu"
        class="nav__submenu"
        :class="{ 'nav__submenu--visible': isSubmenuVisible }"
      ></nav-submenu>
    </transition>
  </li>
</template>

<script>
export default {
  /* eslint-disable vue/require-prop-types */
  props: ['name', 'href', 'submenu'],
  data() {
    return {
      isSubmenuVisible: false,
    };
  },
  methods: {
    toggleSubmenu() {
      this.isSubmenuVisible = !this.isSubmenuVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    position: relative;
    * {
      color: $main-dark;
    }
    @media (hover: hover) {
      &:hover {
        .nav__submenu {
          @media screen and (min-width: 1024px) {
            display: block;
          }
        }
      }
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
    display: none;
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

    &--visible {
      @media screen and (max-width: 1023.9px) {
        display: block;
      }
    }
  }
}
</style>
