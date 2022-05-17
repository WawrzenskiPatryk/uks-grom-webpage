<template>
  <footer class="footer">
    <div class="footer__sections-wrapper">
      <div class="footer__section">
        <div class="footer__details">
          <LogoPlaceholder
            class="footer__logo"
            first-word="UKS"
            second-word="GROM"
          />
          <BaseParagraph>Uczniowski Klub Sportowy</BaseParagraph>
          <BaseParagraph>GROM SP 2 Lublin</BaseParagraph>
        </div>
      </div>

      <div class="footer__section">
        <div class="footer__details">
          <BaseParagraph><strong>Dane do przelewu</strong></BaseParagraph>
          <BaseParagraph>Bank Pekao</BaseParagraph>
          <BaseParagraph>12 1240 2470 1111 0010 6881 3209</BaseParagraph>
        </div>
      </div>

      <div class="footer__section">
        <div class="footer__details">
          <BaseParagraph>
            ul. Adama Mickiewicza 24 <br />
            20-433 Lublin
          </BaseParagraph>
          <BaseParagraph>
            <strong>Piotr Łuszczew </strong> <br />
            &#9742; 609-006-576
          </BaseParagraph>
        </div>
      </div>
    </div>

    <div class="footer__copyrights">
      <BaseParagraph>
        2022 &copy; Powered by
        <a
          class="footer__author-link"
          href="https://www.linkedin.com/in/patryk-wawrze%C5%84ski-41303a233/"
          target="_blank"
          >Patryk Wawrzeński</a
        >
      </BaseParagraph>
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

  &__logo {
    display: inline-block;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    * {
      padding: 0.5rem 0;
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
