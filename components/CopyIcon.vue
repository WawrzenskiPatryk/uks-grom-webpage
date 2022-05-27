<template>
  <span class="copy-icon" @click="copyToClipboard">
    <fa-icon icon="fa-solid fa-copy" />
  </span>
</template>

<script>
export default {
  name: 'CopyIcon',
  props: {
    dataToCopy: {
      type: [String, Number],
      required: true,
    },
    message: {
      type: String,
      required: true,
      default: 'Copied!',
    },
  },
  methods: {
    acopyToClipboard() {
      navigator.clipboard.writeText(this.dataToCopy);
      alert(this.message);
    },
  },
};
</script>

<style lang="scss" scoped>
.copy-icon {
  cursor: pointer;
  @media screen and (min-width: $tablet-min-screen-width) {
    padding: 0 1rem;
  }
}
</style>
