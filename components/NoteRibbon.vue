<template>
  <div class="note-ribbon" :style="animationDurationStyle">
    <p class="note-ribbon__text-container">
      <fa-icon
        class="note-ribbon__icon"
        icon="fa-solid fa-circle-exclamation"
      />
      <span
        class="note-ribbon__text"
        :class="{ 'note-ribbon__text--blinking': isBlinking }"
        :style="animationDurationStyle"
      >
        {{ texts[chosenTextIndex] }}
      </span>
    </p>
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
      chosenTextIndex: 0,
      animationTime: 6000,
      isBlinking: false,
    };
  },
  computed: {
    animationDurationStyle() {
      return { animationDuration: this.animationTime + 'ms' };
    },
  },
  created() {
    this.switchText();
  },
  methods: {
    switchText() {
      const textsArrayLength = this.texts.length;
      const blinkingTime = 1150;

      if (textsArrayLength > 1) {
        setTimeout(() => {
          this.isBlinking = true;
        }, this.animationTime);

        setTimeout(() => {
          setInterval(() => {
            if (this.chosenTextIndex + 1 < textsArrayLength)
              this.chosenTextIndex++;
            else this.chosenTextIndex = 0;
          }, this.animationTime);
        }, blinkingTime);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.note-ribbon {
  border-radius: 1rem;
  box-shadow: $secondary-shadow 0 0 1rem;
  animation: bounce infinite ease-out;

  @media screen and (min-width: $tablet-min-screen-width) {
    align-self: flex-start;
    box-shadow: $secondary-shadow -1rem 0 1rem;
  }
  @media screen and (min-width: $desktop-min-screen-width) {
    align-self: flex-start;
    box-shadow: $secondary-shadow -3rem 0 1rem;
  }

  &__text-container {
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

  &__text {
    &--blinking {
      animation: text-blinking infinite ease-out;
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

@keyframes bounce {
  15% {
    transform: translateX(0);
  }
  18% {
    transform: translateX(-1rem);
  }
  21% {
    transform: translateX(1rem);
  }
  24% {
    transform: translateX(-0.5rem);
  }
  27% {
    transform: translateX(0);
  }
}

@keyframes text-blinking {
  15% {
    opacity: 1;
  }
  21% {
    opacity: 0;
  }
  27% {
    opacity: 1;
  }
}
</style>
