<template>
  <main class="about">
    <BaseHeading type="aside">
      <template #title>
        Uczniowski Klub Sportowy GROM SP2 Lublin powstał 31 marca 2016 roku.
      </template>
      <template #subtitle>
        Głównym celem klubu są obozy sportowe i profilaktyczne w kraju i za
        granicą oraz szkolenie dzieci i młodzieży. Dyscypliny, w których się
        specjalizujemy to piłka nożna, pływanie, lekkoatletyka oraz koszykówka.
      </template>
    </BaseHeading>
    <BaseParagraph>
      Dzieci poszczególnych dyscyplin sportowych osiągają bardzo wysoki poziom
      umiejętności sportowy, reprezentując Szkołę Podstawową nr 2 w Lublinie w
      Igrzyskach Dzieci i Młodzieży Miasta Lublin, Wojewódzkich Igrzyskach
      Sportowych oraz w różnych turniejach i rozgrywkach miejskich, wojewódzkich
      czy ogólnopolskich.
    </BaseParagraph>
    <BaseParagraph>
      <strong>
        Naszym największym osiągnięciem jest zdobycie I miejsca w Województwie
        Lubelskim oraz III miejsca w Polsce w minipiłce nożnej chłopców!
      </strong>
    </BaseParagraph>
    <BaseParagraph>
      <span class="text-colored"
        >Naszym priorytetem jest zapewnienie dzieciom miłego czasu w
        towarzystwie przekochanych osób oraz dobrej zabawy, by oderwać się
        chociaż na chwilę od życia realnego.
      </span>
      Wszystkie zajęcia w klubie, na obozach sportowych czy koloniach dla dzieci
      prowadzone są przez wykwalifikowanych trenerów, instruktorów, nauczycieli
      i pedagogów posiadających wykształcenie do pracy z młodzieżą oraz ogromne
      doświadczenie w tym zakresie.
      <strong>
        Pracownikami klubu oraz wolontariuszami mogą być wyłącznie osoby
        niekarane oraz dające rękojmię należytego sprawowania opieki nad
        dzieckiem.
      </strong>
      <span class="text-colored">
        W kadrze mamy osoby pomysłowe i bardzo pomocne. Zdecydowanie można
        poczuć się u nas jak w domu!
      </span>
      Wszystko to sprawia, że naszym celem jest prawidłowy rozwój fizyczny i
      psychiczny naszych podopiecznych. W ten sposób u dziecka budujemy tak
      ważną świadomość ciała i pozytywne nastawienie do całożyciowej aktywności
      fizycznej jakimi są ruch i rekreacja.
    </BaseParagraph>
    <BaseParagraph>
      Współpracujemy z wieloma organizacjami m.in. Urzędem Miasta Lublin, Szkołą
      Podstawową nr 2 w Lublinie, Przedszkolem nr 70 w Lublinie, Sygnałem
      Lublin, Motorem Lublin, AZS Lublin oraz wieloma innymi.
    </BaseParagraph>
    <BaseHeading type="aside">
      <template #title>Organizujemy:</template>
      <template #subtitle>
        <ul class="about__list">
          <li>Zajęcia profilaktyczne</li>
          <li>Zajęcia rekreacyjno – sportowe</li>
          <li>Zawody rekreacyjno – sportowe dla dzieci i młodzieży</li>
          <li>
            Festyny profilaktyczne i rekreacyjno – sportowe dla dzieci i
            młodzieży
          </li>
          <li>Zimowiska profilaktyczno – sportowe</li>
          <li>Obozy profilaktyczno – sportowe w kraju i zagranicą</li>
        </ul>
      </template>
    </BaseHeading>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style lang="scss" scoped>
.about {
  &__list {
    *:before {
      content: '';
      background-image: $button-gradient;
      display: inline-block;
      position: relative;
      margin-right: 1rem;
      border-radius: 100rem;
      height: 0.8rem;
      width: 0.8rem;
      bottom: 1px;
      @media screen and (min-width: $tablet-min-screen-width) {
        height: 0.9rem;
        width: 0.9rem;
      }
      @media screen and (min-width: $desktop-min-screen-width) {
        height: 1rem;
        width: 1rem;
        bottom: 2px;
      }
    }
  }
}
.text-colored {
  color: $primary-color;
}
</style>
