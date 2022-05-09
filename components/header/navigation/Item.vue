<template>
  <li>
    <NuxtLink
      v-if="!submenu || submenu.length === 0"
      :to="path"
      class="nav__link"
      >{{ name }}</NuxtLink
    >
    <span
      v-else
      class="nav__link nav__link--with-submenu"
      @click="toggleSubmenu"
    >
      <span v-if="isSubmenuVisible" class="nav__dropdown-icon">&#9652;</span>
      <span v-else class="nav__dropdown-icon">&#9662;</span>
      {{ name }}
    </span>
    <HeaderNavigationSubmenu
      v-if="submenu && submenu.length !== 0"
      :submenu="submenu"
      class="nav__submenu"
      :class="{ 'nav__submenu--visible': isSubmenuVisible }"
    ></HeaderNavigationSubmenu>
  </li>
</template>

<script>
export default {
  name: 'HeaderNavigationItem',
  props: {
    name: { type: String, required: true },
    path: { type: String, required: true },
    submenu: { type: Array, default: null },
    isNavVisible: { type: Boolean, required: true },
  },
  data() {
    return {
      isSubmenuVisible: false,
    };
  },
  watch: {
    isNavVisible() {
      this.closeSubmenu();
    },
  },
  methods: {
    toggleSubmenu() {
      this.isSubmenuVisible = !this.isSubmenuVisible;
    },
    closeSubmenu() {
      this.isSubmenuVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    position: relative;
    * {
      color: $primary-dark;
      transition: color 0.2s ease;
    }
    @media (hover: hover) {
      &:hover {
        * {
          color: $primary-color;
        }
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

    &--with-submenu {
      &::after {
        content: none;
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
    background-color: $primary-light;

    @media screen and (min-width: 768px) {
      padding-right: 2rem;
    }
    @media screen and (min-width: 1024px) {
      position: absolute;
      right: 0;
      padding: 0;
      min-width: 110%;
    }

    &--visible {
      @media screen and (max-width: 1023.9px) {
        display: block;
      }
    }
  }

  &__dropdown-icon {
    position: absolute;
    left: 0;
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
}
</style>
