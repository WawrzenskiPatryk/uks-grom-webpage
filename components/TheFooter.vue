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
          <p>{{ titleTop }}</p>
          <p>{{ titleBottom }}</p>
        </div>
      </div>

      <div class="footer__section">
        <div class="footer__details">
          <h4>{{ bankData.title }}</h4>
          <p>{{ bankData.bankName }}</p>
          <p>{{ bankData.accountNum }}</p>
        </div>
      </div>

      <div class="footer__section">
        <div class="footer__details">
          <p>
            {{ address.firstLine }} <br />
            {{ address.secondLine }}
          </p>
          <p>&#9993; {{ email }}</p>
          <p>&#9742; {{ phone }}</p>
        </div>
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

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      titleTop: 'Uczniowski Klub Sportowy',
      titleBottom: 'GROM Lublin',
      bankData: {
        title: 'Dane do przelewu',
        bankName: 'mBank',
        accountNum: '00 0000 0000 0000 0000 0000 0000',
      },
      address: {
        firstLine: 'ul. Adama Mickiewicza 24',
        secondLine: '20-433 Lublin',
      },
      email: 'info@uksgrom.lublin.pl',
      phone: '500-500-500',
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  color: $primary-light;
  background-color: $primary-dark;
  padding: 2rem 0;
  text-align: center;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }

  &__sections-wrapper {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    padding: 0 10vw;
    @media screen and (min-width: 1024px) {
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

    @media screen and (min-width: 1024px) {
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
        color: $primary-color;
      }
    }
  }
}
</style>
