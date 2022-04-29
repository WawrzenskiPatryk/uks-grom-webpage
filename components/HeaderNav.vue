<template>
  <nav class="header__nav">
    <ul class="nav">
      <li v-for="item in navItems" :key="item.name" class="nav__item">
        <nuxt-link :to="item.href" class="nav__link">{{ item.name }}</nuxt-link>
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
// .header__nav {
//   // bottom: 0;
//   height: 100%;
//   text-align: center;
//   position: absolute;
//   top: 5rem;
//   right: 0;
//   // border: 1px red solid;
//   // @media screen and (min-width: 768px) {}
//   @media screen and (min-width: 1024px) {
//     position: static;
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     // width: 100%;
//   }
// }

.nav {
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 6rem;
  }

  &__item * {
    // display: flex;
    position: relative;
    align-items: center;
    padding: 0 2rem;
    color: $main-dark;
    // background-color: aqua;
    // border: 1px solid black;
    @media (hover: hover) {
      &:hover {
        color: $primary-color;
      }
    }

    @media screen and (max-width: 767px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1024px) {
      display: flex;
      @media (hover: hover) {
        &:hover {
          cursor: pointer;
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
          background-color: #efdb03;
          transition: width 150ms ease;
        }
      }
    }
  }
  &__link {
    height: 100%;
  }
}
</style>
