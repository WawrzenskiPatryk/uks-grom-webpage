<template>
  <div class="note-ribbon">
    <div class="note-ribbon__content" :style="animationDurationStyle">
      <p class="note-ribbon__text">
        <fa-icon
          class="note-ribbon__icon"
          icon="fa-solid fa-circle-exclamation"
        />
        {{ texts[chosenTextIndex] }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteRibbon',
  props: {
    texts: {
      type: Array,
      require: true,
      default() {
        return [
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit laboriosam eaque',
        ];
      },
    },
  },
  data() {
    return {
      isBlinking: false,
      chosenTextIndex: 0,
      animationTime: 4500,
    };
  },
  computed: {
    animationDurationStyle() {
      return { animationDuration: this.animationTime + 'ms' };
    },
  },
  mounted() {
    this.switchText();
  },
  methods: {
    switchText() {
      const textsArrayLength = this.texts.length;

      if (textsArrayLength > 1) {
        this.isBlinking = true;

        setInterval(() => {
          if (this.chosenTextIndex + 1 < textsArrayLength)
            this.chosenTextIndex++;
          else this.chosenTextIndex = 0;
        }, this.animationTime);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.note-ribbon {
  // border: 1px solid red;
  // height: 5rem;

  &__content {
    // position: absolute;
    border-radius: 1rem;
    box-shadow: $secondary-shadow 0 0 1rem;
    animation: switch-down infinite ease;

    @media screen and (min-width: $tablet-min-screen-width) {
      animation: switch-left infinite ease;
      align-self: flex-start;
      box-shadow: $secondary-shadow -1rem 0 1rem;
      width: fit-content;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      align-self: flex-start;
      box-shadow: $secondary-shadow -3rem 0 1rem;
    }
  }

  &__text {
    position: relative;
    background-color: $secondary-color;
    font-weight: 600;
    padding: 1rem 1rem 1rem 4rem;
    border-radius: 1rem;
    width: 100%;
    text-align: center;

    @media screen and (min-width: $tablet-min-screen-width) {
      text-align: left;
      clip-path: polygon(
        100% 0,
        calc(100% - 3.5rem) 50%,
        100% 100%,
        0 100%,
        0 0
      );
      border-radius: 3rem 0 0 3rem;
      padding: 1rem 8rem 1rem 5rem;
      box-shadow: 1rem;
      left: -1rem;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      left: -3rem;
    }
  }

  &__icon {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    @media screen and (min-width: $tablet-min-screen-width) {
      left: 1.5rem;
    }
    font-size: 2.5rem;
    padding-right: 1rem;
  }
}

$switch-left-value: 2rem;
$switch-down-value: 1rem;

@keyframes switch-left {
  0% {
    opacity: 0;
    transform: translateX($switch-left-value);
  }
  10% {
    opacity: 1;
    transform: translateX(0rem);
  }
  90% {
    opacity: 1;
    transform: translateX(0rem);
  }
  100% {
    opacity: 0;
    transform: translateX(-$switch-left-value);
  }
}
@keyframes switch-down {
  0% {
    opacity: 0;
    transform: translateY(-$switch-down-value);
  }
  10% {
    opacity: 1;
    transform: translateY(0rem);
  }
  90% {
    opacity: 1;
    transform: translateY(0rem);
  }
  100% {
    opacity: 0;
    transform: translateY($switch-down-value);
  }
}
</style>
