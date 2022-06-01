<template>
  <section class="news-section">
    <NuxtLink to="/aktualnosci" class="news-section__back-link">
      <fa-icon icon="fa-solid fa-arrow-left-long" />
      <span class="news-section__back-link--text"> Powrót </span>
    </NuxtLink>

    <article class="news-section__article">
      <BaseHeading>
        <template #title> Wypoczynek dla dzieci i młodzieży </template>
        <template #subtitle>
          <strong> 28 czerwca - 7 sierpnia 2022 r. </strong>
          <br />
          <span class="text-colored"> Cena: 1000 złotych + 320 euro </span>
        </template>
      </BaseHeading>

      <div class="news-section__article-illustration"></div>

      <div class="news-section__article-columns-wrapper">
        <div
          class="news-section__article-column news-section__article-column--left"
        >
          <p class="news-section__description">
            Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży
            <strong>w Grecji, nad morzem Egejskim</strong>
            . Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele
            posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.
          </p>

          <p class="news-section__description">
            <strong> Riviera Olimpijska / Olimpic Beach </strong>
            to rozległa, piaszczysta plaża, 4km długości o kryształowo czystych
            wodach i wspaniałymi widokami, na Zatokę Thermaikos. Ma drobny,
            czysty i złoty piasek, woda jest płytka bez dużych fal, co czyni go
            idealnym miejscem dla grup z dziećmi. Oferuje piękne widoki na Olimp
            i morze.
          </p>

          <h4 class="news-section__description-title upper">
            Miejsce zakwaterowania
          </h4>

          <p class="news-section__description">
            <strong class="text-colored">
              Olimpic Beach - Resort Demopoulos Palace Platon Beach.
            </strong>
            Hotel z basenem, znajduje się 30 metrów od zorganizowanej plaży i
            jej boisk sportowych. Wysoki standard zakwaterowania w pokojach
            4-osobowych z pełnym węzłem sanitarnym + TV, Wi-Fi, klimatyzacja,
            leżaki przy basenie, suszarki, lodówka, balkon, ręczniki w
            łazienkach. Na plaży - leżaki przy zakupie kawy / napoju.
          </p>

          <p class="news-section__description">
            Bogate wyżywienie - trzy posiłki dziennie:
            <strong> śniadanie, lunch, obiado-kolacja + woda. </strong>
            Śniadanie w formie bufetu: sałatki, dostawki, desery. Danie główne
            serwowane + woda.
          </p>

          <h4 class="news-section__description-title upper">
            Dodatkowe atrakcje
          </h4>

          <p class="news-section__description">
            Dwie wycieczki fakultatywne w cenie, zajęcia rekreacyjno-sportowe,
            nielimitowany dostęp do basenu z podgrzewaną wodą, plażowanie i
            kąpiel w morzu, zajęcia na plaży.
          </p>

          <p class="news-section__description">
            <strong class="upper">Dokumenty:</strong>
            Wymagany ważny
            <span class="text-colored">
              paszport lub dowód osobisty (ważność 6 miesięcy).
            </span>
          </p>

          <p class="news-section__description">
            <strong> Cena obejmuje: </strong>
            przejazd autkarem, 7 noclegów w pokojach 4-osobowych, wyżywieniem, 6
            śniadań, 7 razy lunch, 7 razy obiadokolacja, pierwszym świadczeniem
            będzie obiadokolacja w dniu przyjazdu, ostatnim obiadokolacja w dniu
            wyjazdu. Opłatę klimatyczną, klimatyzacja w pokojach, 2 wycieczki
            fakultetywne, ubezpieczenie, opiekę kadry.
          </p>
        </div>

        <div
          class="news-section__article-column news-section__article-column--right"
        >
          <p class="news-section__description-important centered">
            <strong class="text-colored upper">
              Wpłata zaliczki w kwocie 100 euro +400 złotych decyduje o zapisie
              dziecka na wypoczynek!
            </strong>
          </p>

          <p class="news-section__description centered">
            <strong class="upper"> Numer konta do wpłat: </strong>
            <br />
            <strong class="text-colored"> Bank Pekao S.A. </strong>
            <br />
            <strong class="text-colored">
              12 1240 2470 1111 0010 6881 3209
            </strong>
          </p>

          <p class="news-section__description centered">
            <strong class="upper"> Informacje i zapisy: </strong>
            <br />
            <strong class="text-colored"> Piotr Łuszczew - 609 006 576</strong>
          </p>

          <p class="news-section__description-important centered">
            <strong class="upper text-colored">
              Ilość miejsc ograniczona!
            </strong>
          </p>

          <p class="news-section__description centered">
            <strong> Do pobrania: </strong>
            <br />
            <BaseLink
              path="/downloads/KARTA-KWALIFIKACYJNA-UCZESTNIKA-WYPOCZYNKU-GRECJA-2022.odt"
              download
            >
              Karta uczestnika wypoczynku
            </BaseLink>
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'NewsGrecja2022',
};
</script>

<style lang="scss" scoped>
.news-section {
  &__article {
    text-align: center;
  }

  &__article-illustration {
    background-image: url('~/assets/images/grecja2022.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    height: 40vw;
    max-height: 30rem;
    width: 100%;
    margin: 4rem 0;
  }

  &__article-columns-wrapper {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $desktop-min-screen-width) {
      gap: 15rem;
      flex-direction: row;
    }
  }

  &__article-column {
    @media screen and (min-width: $desktop-min-screen-width) {
      &--left {
        width: 62%;
      }
      &--right {
        width: 38%;
      }
    }
  }

  &__back-link {
    color: $primary-color-darken;
    transition: all 0.3s ease;
    position: relative;
    top: -2.5rem;
    border-bottom: 1px solid;
    border-color: $primary-color-darken;
    padding-bottom: 0.5rem;

    @media (hover: hover) {
      &:hover {
        color: $primary-color;
        border-bottom: 1px solid $primary-color;
      }
    }

    @media screen and (min-width: $tablet-min-screen-width) {
      top: 0;
    }

    &--text {
      margin-left: 1rem;
    }
  }

  &__description {
    margin-bottom: 3rem;
    margin-top: 1rem;
  }
  &__description-title,
  &__description-heading {
    @media screen and (min-width: $desktop-min-screen-width) {
      margin-top: 6rem;
    }
    margin-top: 3rem;
  }

  &__description-important {
    position: relative;
    margin-bottom: 3rem;
    margin-top: 1rem;
    padding: 5rem 0;
    font-size: $small-subtitle-font-size;
    @media screen and (min-width: $tablet-min-screen-width) {
      font-size: $large-subtitle-font-size;
    }
    border-bottom: 1px solid $primary-dark;
    border-top: 1px solid $primary-dark;
  }
}
</style>
