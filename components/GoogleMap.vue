<template>
  <iframe
    class="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.048419955961!2d22.580240615645696!3d51.2181836795886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472257ab579c642b%3A0x315d7c7a5625057!2sAdama%20Mickiewicza%2024%2C%2020-443%20Lublin!5e0!3m2!1spl!2spl!4v1652795401702!5m2!1spl!2spl"
    style="border: 0"
    width="500"
    height="400"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>

<script>
export default {
  name: 'GoogleMap',
};
</script>

<style lang="scss" scoped>
.map {
  border-radius: 1rem;
  box-shadow: $primary-shadow 0 0 1rem;
}
</style>
