<template>
  <li
    class="navigation-item"
    :class="{ 'navigation-item--transparent': isTransparent }"
  >
    <span
      v-if="submenu && submenu.length"
      class="navigation-item__link navigation-item__link--submenu"
      @click="toggleSubmenu"
    >
      <span v-if="isSubmenuVisible" class="navigation-item__dropdown-icon"
        >&#9652;</span
      >
      <span v-else class="navigation-item__dropdown-icon">&#9662;</span>
      {{ name }}
    </span>
    <NuxtLink v-else :to="path" class="navigation-item__link">
      {{ name }}
    </NuxtLink>
    <HeaderNavigationSubmenu
      v-if="submenu && submenu.length !== 0"
      :submenu="submenu"
      class="navigation-item__submenu"
      :class="{ 'navigation-item__submenu--visible': isSubmenuVisible }"
    />
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
    isTransparent: { type: Boolean, required: true },
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
.navigation-item {
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
    }
  }

  @media screen and (min-width: $desktop-min-screen-width) {
    &--transparent {
      * {
        color: $primary-light;
        transition: color 0.2s ease;
        text-shadow: 0 0 1rem $secondary-dark;
      }
      @media (hover: hover) {
        &:hover {
          * {
            color: $secondary-color;
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
    font-size: $large-subtitle-font-size;
    cursor: pointer;

    @media screen and (min-width: $desktop-min-screen-width) {
      display: flex;
      font-size: $small-subtitle-font-size;
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

    &--submenu {
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
  @media screen and (min-width: $desktop-min-screen-width) {
    &--transparent &__link {
      &:hover {
        &::after {
          width: 80%;
        }
      }
      &::after {
        background-color: $primary-light;
        bottom: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 100%;
      }

      &.nuxt-link {
        &-exact-active {
          color: $secondary-color;
        }
      }
    }
  }

  &__submenu {
    display: none;

    @media screen and (min-width: $tablet-min-screen-width) {
      padding-right: 2rem;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      position: absolute;
      right: 0;
      padding: 0;
      min-width: 110%;
    }

    &--visible {
      @media screen and (max-width: $desktop-min-screen-width) {
        display: block;
      }
    }
  }
  @media (hover: hover) {
    &:hover &__submenu {
      @media screen and (min-width: $desktop-min-screen-width) {
        display: block;
      }
    }
  }

  &__dropdown-icon {
    position: absolute;
    left: 0;
    @media screen and (min-width: $desktop-min-screen-width) {
      display: none;
    }
  }
}
</style>
