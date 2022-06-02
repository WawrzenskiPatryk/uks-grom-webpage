<template>
  <ArticleSection :illustration-url="image" :is-full="isFull">
    <template #back-link>Powrót</template>

    <template #article-heading>
      <BaseHeading>
        <template #title> Wypoczynek dla dzieci i młodzieży </template>
        <template #subtitle>
          <strong> 28 czerwca - 7 lipca 2022 r. </strong>
          <br />
          <span class="text-colored"> Cena: 1000 złotych + 320 euro </span>
        </template>
      </BaseHeading>
    </template>

    <template #left-column>
      <ArticleParagraph>
        Przedstawiamy ofertę wypoczynku dla aktywnych dzieci i młodzieży
        <strong>w Grecji, nad morzem Egejskim.</strong>
        Opiekę szkoleniowo - wychowawczą pełnić będą czynni nauczyciele
        posiadający wszystkie niezbędne kwalifikacje do prowadzenia zajęć.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong> Riviera Olimpijska / Olimpic Beach </strong>
        to rozległa, piaszczysta plaża, 4km długości o kryształowo czystych
        wodach i wspaniałymi widokami, na Zatokę Thermaikos. Ma drobny, czysty i
        złoty piasek, woda jest płytka bez dużych fal, co czyni go idealnym
        miejscem dla grup z dziećmi. Oferuje piękne widoki na Olimp i morze.
      </ArticleParagraph>

      <ArticleParagraph type="titled">
        <template #title>Miejsce zakwaterowania</template>
        <strong class="text-colored">
          Olimpic Beach - Resort Demopoulos Palace Platon Beach.
        </strong>
        Hotel z basenem, znajduje się 30 metrów od zorganizowanej plaży i jej
        boisk sportowych. Wysoki standard zakwaterowania w pokojach 4-osobowych
        z pełnym węzłem sanitarnym + TV, Wi-Fi, klimatyzacja, leżaki przy
        basenie, suszarki, lodówka, balkon, ręczniki w łazienkach. Na plaży -
        leżaki przy zakupie kawy / napoju.
      </ArticleParagraph>

      <ArticleParagraph>
        Bogate wyżywienie - trzy posiłki dziennie:
        <strong> śniadanie, lunch, obiado-kolacja + woda. </strong>
        Śniadanie w formie bufetu: sałatki, dostawki, desery. Danie główne
        serwowane + woda.
      </ArticleParagraph>

      <ArticleParagraph type="titled">
        <template #title>Dodatkowe atrakcje</template>
        Dwie wycieczki fakultatywne w cenie, zajęcia rekreacyjno-sportowe,
        nielimitowany dostęp do basenu z podgrzewaną wodą, plażowanie i kąpiel w
        morzu, zajęcia na plaży.
      </ArticleParagraph>

      <ArticleParagraph>
        <strong class="upper">Dokumenty:</strong>
        Wymagany ważny
        <span class="text-colored">
          paszport lub dowód osobisty (ważność 6 miesięcy).
        </span>
      </ArticleParagraph>

      <ArticleParagraph>
        <strong> Cena obejmuje: </strong>
        przejazd autokarem, 7 noclegów w pokojach 4-osobowych, wyżywieniem, 6
        śniadań, 7 razy lunch, 7 razy obiadokolacja, pierwszym świadczeniem
        będzie obiadokolacja w dniu przyjazdu, ostatnim obiadokolacja w dniu
        wyjazdu. Opłatę klimatyczną, klimatyzacja w pokojach, 2 wycieczki
        fakultetywne, ubezpieczenie, opiekę kadry.
      </ArticleParagraph>
    </template>

    <template #right-column>
      <ArticleParagraph type="important centered">
        <strong class="text-colored upper">
          Wpłata zaliczki w kwocie 100 euro +400 złotych decyduje o zapisie
          dziecka na wypoczynek!
        </strong>
      </ArticleParagraph>

      <ArticleParagraph type="centered">
        <strong class="upper"> Numer konta do wpłat: </strong>
        <br />
        <strong class="text-colored"> 12 1240 2470 1111 0010 6881 3209 </strong>
        <br />
        <strong class="text-colored"> Bank Pekao S.A. </strong>
      </ArticleParagraph>

      <ArticleParagraph type="centered">
        <strong class="upper"> Informacje i zapisy: </strong>
        <br />
        <strong class="text-colored"> Piotr Łuszczew - 609 006 576</strong>
      </ArticleParagraph>

      <ArticleParagraph type="important centered">
        <strong class="upper text-colored"> Ilość miejsc ograniczona! </strong>
      </ArticleParagraph>

      <ArticleParagraph type="centered">
        <strong> Do pobrania: </strong>
        <br />
        <DownloadLink
          path="/downloads/KARTA-KWALIFIKACYJNA-UCZESTNIKA-WYPOCZYNKU.odt"
        >
          Karta uczestnika wypoczynku
        </DownloadLink>
        <!-- <DownloadLink path="/"> Informacje przed wyjazdem </DownloadLink> -->
      </ArticleParagraph>
    </template>
  </ArticleSection>
</template>

<script>
export default {
  name: 'NewsGrecja2022',
  data() {
    return {
      image: require('~/assets/images/grecja.jpg'),
      isFull: false,
    };
  },
};
</script>
