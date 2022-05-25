<template>
  <footer class="footer">
    <div class="footer__sections-wrapper">
      <div class="footer__section">
        <div class="footer__details">
          <LogoPlaceholder
            class="footer__details-element"
            first-word="UKS"
            second-word="GROM"
          />
          <span class="footer__details-element">Uczniowski Klub Sportowy</span>
          <span class="footer__details-element">GROM SP 2 Lublin</span>
        </div>
      </div>

      <div class="footer__section">
        <div class="footer__details">
          <span class="footer__details-element">
            <strong>Dane do przelewu</strong>
          </span>
          <span class="footer__details-element">Bank Pekao</span>
          <span class="footer__details-element">
            12 1240 2470 1111 0010 6881 3209
          </span>
        </div>
      </div>

      <div class="footer__section">
        <div class="footer__details">
          <span class="footer__details-element">
            <fa-icon class="footer__icon" icon="fa-solid fa-map-location-dot" />
            <br class="footer__icon-line-break" />
            ul. Adama Mickiewicza 24 <br />
            20-433 Lublin
          </span>
          <span class="footer__details-element">
            <fa-icon class="footer__icon" icon="fa-solid fa-phone" />
            <br class="footer__icon-line-break" />
            <strong>Piotr Łuszczew </strong> <br />
            609-006-576
          </span>
        </div>
      </div>
    </div>

    <div class="footer__copyrights">
      <span>
        2022 &copy; Powered by
        <a
          class="footer__author-link"
          href="https://www.linkedin.com/in/patryk-wawrze%C5%84ski-41303a233/"
          target="_blank"
          >Patryk Wawrzeński</a
        >
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  color: $primary-light;
  background-color: $primary-dark;
  background-image: $primary-gradient-dark;
  padding: 2rem 0;
  text-align: center;

  @media screen and (min-width: $desktop-min-screen-width) {
    text-align: left;
    padding: 7rem 0 2rem 0;
    clip-path: polygon(0 0%, 100% 15%, 100% 100%, 0% 100%);
  }

  &__sections-wrapper {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    padding: 0 10vw;
    @media screen and (min-width: $desktop-min-screen-width) {
      padding: 0;
      flex-direction: row;
    }
  }

  &__section {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
    &:not(:last-of-type) {
      border-bottom: 1px solid $primary-light;
    }

    @media screen and (min-width: $desktop-min-screen-width) {
      padding: 0 4rem;
      &:not(:last-of-type) {
        border-bottom: none;
        border-right: 1px solid $primary-light;
      }
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    * {
      padding: 0.5rem 0;
    }
    @media screen and (min-width: $desktop-min-screen-width) {
      align-items: flex-start;
    }
  }

  &__details-element {
    position: relative;
  }

  &__icon {
    @media screen and (min-width: $desktop-min-screen-width) {
      position: absolute;
      left: -4rem;
      top: 2rem;
      &-line-break {
        display: none;
      }
    }
  }

  &__copyrights {
    text-align: center;
    font-size: 1.2rem;
    font-family: Arial, sans-serif;
    margin-top: 5rem;
  }

  &__author-link {
    color: $secondary-color;
    transition: color 0.3s ease;
    @media (hover: hover) {
      &:hover {
        color: $primary-color-lighten;
      }
    }
  }
}
</style>
