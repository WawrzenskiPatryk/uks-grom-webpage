<template>
  <footer class="footer">
    <div class="footer__columns-wrapper">
      <div class="footer__column">
        <the-logo class="footer__logo">
          <!-- Insert logo img instead of the placeholder template code -->
          <template #first>UKS</template>
          <template #second>GROM</template>
        </the-logo>
        <p>Uczniowski Klub Sportowy</p>
        <p>GROM Lublin</p>
      </div>

      <div class="footer__column">
        <span class="footer__details">
          <h4>Dane do przelewu:</h4>
          <p>testBank</p>
          <p>00 0000 0000 0000 0000 0000 0000</p>
        </span>
      </div>

      <div class="footer__column">
        <span class="footer__details">
          <p>ul. Adama Mickiewicza 24</p>
          <p>20-433 Lublin</p>
          <p>&#9993; info@uksgrom.lublin.pl</p>
          <p>&#9742; 500-500-500</p>
        </span>
      </div>
    </div>

    <div class="footer__copyrights">
      <p>
        2022 &copy; Powered by
        <a
          class="footer__author-link"
          href="https://github.com/WawrzenskiPatryk/"
          target="_blank"
          >Patryk Wawrzeński</a
        >
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  color: $main-light;
  background-color: $main-dark;
  padding: 4rem 0 2rem 0;

  &__columns-wrapper {
    display: flex;
    margin: 2rem 0;
  }

  &__column {
    display: flex;
    flex-direction: column;
    padding-left: 10rem;
    padding-bottom: 2rem;

    &:not(:last-of-type) {
      border-right: 1px solid $main-light;
    }
    width: 100%;
  }

  &__logo {
    // border: 1px solid red;
    display: inline-block;
  }

  &__copyrights {
    text-align: center;
    font-size: 1.2rem;
    font-family: Arial, sans-serif;
    margin-top: 5rem;
  }

  &__details {
    * {
      padding: 0.5rem 0;
    }
  }

  &__author-link {
    color: $secondary-color;
    transition: color 0.3s ease;
    @media (hover: hover) {
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
