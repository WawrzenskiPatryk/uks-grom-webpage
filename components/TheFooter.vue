<template>
  <footer class="footer">
    <div class="footer__columns-wrapper">
      <div class="footer__column">
        <div class="footer__details">
          <the-logo class="footer__logo">
            <!-- Insert logo img instead of the placeholder template code -->
            <template #first>UKS</template>
            <template #second>GROM</template>
          </the-logo>
          <p>{{ titleTop }}</p>
          <p>{{ titleBottom }}</p>
        </div>
      </div>

      <div class="footer__column">
        <div class="footer__details">
          <h4>{{ bankData.title }}</h4>
          <p>{{ bankData.bankName }}</p>
          <p>{{ bankData.accountNum }}</p>
        </div>
      </div>

      <div class="footer__column">
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
  color: $main-light;
  background-color: $main-dark;
  padding: 4rem 0 2rem 0;

  &__columns-wrapper {
    display: flex;
    margin: 2rem 0;
    // border: 2px solid green;
  }

  &__column {
    display: flex;
    justify-content: center;
    padding: 0 4rem;
    width: 100%;

    &:not(:last-of-type) {
      border-right: 1px solid $main-light;
    }

    // border: 1px solid red;
  }

  &__logo {
    display: inline-block;
    // border: 1px solid red;
  }

  &__details {
    * {
      padding: 0.5rem 0;
      // border: 2px solid green;
    }
    // border: 1px solid red;
  }

  &__copyrights {
    text-align: center;
    font-size: 1.2rem;
    font-family: Arial, sans-serif;
    margin-top: 5rem;
    // border: 1px solid red;
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
