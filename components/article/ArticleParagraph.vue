<template>
  <div class="article-paragraph">
    <h4 v-if="hasTitle" class="article-paragraph__title">
      <slot name="title"> Lorem Ipsum </slot>
    </h4>

    <p
      class="article-paragraph__content"
      :class="{
        'article-paragraph__content--important': isImportant,
        'article-paragraph__content--centered': isCentered,
      }"
    >
      <slot name="default">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsum
        quasi? Quibusdam soluta necessitatibus voluptates esse laudantium aut et
        cumque, quo rerum inventore unde dignissimos, in ratione est ducimus ad.
      </slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ArticleParagraph',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'titled', 'important', 'centered']
          .join(' ')
          .includes(value);
      },
    },
  },
  computed: {
    hasTitle() {
      return this.type.includes('titled');
    },
    isImportant() {
      return this.type.includes('important');
    },
    isCentered() {
      return this.type.includes('centered');
    },
  },
};
</script>

<style lang="scss" scoped>
.article-paragraph {
  &__title {
    text-transform: uppercase;
    margin-bottom: 0;
    margin-top: 3rem;
    @media screen and (min-width: $desktop-min-screen-width) {
      margin-top: 6rem;
    }
  }

  &__content {
    margin-top: 1rem;
    margin-bottom: 3rem;

    &--important {
      border-top: 1px solid $primary-dark;
      border-bottom: 1px solid $primary-dark;
      padding: 5rem 0;

      font-size: $small-subtitle-font-size;
      @media screen and (min-width: $tablet-min-screen-width) {
        font-size: $large-subtitle-font-size;
      }
    }
    &--centered {
      text-align: center;
    }
  }
}
</style>
