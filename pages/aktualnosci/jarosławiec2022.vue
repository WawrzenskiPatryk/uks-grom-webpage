<template>
  <ArticleSection :illustration-url="image" :is-full="isFull">
    <template #back-link>Aktualności</template>

    <template #article-heading>
      <BaseHeading>
        <template #title> Wypoczynek dla dzieci i młodzieży </template>
        <template #subtitle>
          <strong> 25 lipca - 4 sierpnia 2022 r. </strong>
          <br />
          <span class="text-colored"> Cena: 1750 złotych </span>
        </template>
      </BaseHeading>
    </template>

    <template #left-column>
      <ArticleParagraph type="titled">
        <template #title>Miejsce zakwaterowania</template>
        <strong class="text-colored"> Ośrodek Barka </strong>
        z dostępnym podgrzewanym basenem. Zakwaterowanie w domkach 6-osobowych z
        tarasem i pełnym węzłem sanitarnym + TV, wi-fi na stołówce, bilard,
        pingpong.
      </ArticleParagraph>

      <ArticleParagraph>
        Bogate wyżywienie - trzy posiłki dziennie:
        <strong> śniadanie, lunch, obiado-kolacja + woda. </strong>
        Śniadanie w formie bufetu: sałatki, dostawki, desery. Danie główne
        serwowane + woda.
      </ArticleParagraph>

      <ArticleParagraph type="titled">
        <template #title>Dodatkowe atrakcje</template>
        Aquapark w Koszalinie, zwiedzanie latarni morskiej, wizyta w domu
        rybaka, Muzeum Bursztynu, zajęcia rekreacyjno-sportowe, nielimitowany
        dostęp do basenu, plażowanie i kąpiele w morzu, zajęcia na plaży i
        orliku (boiska do piłki nożnej, siatkówki i koszykówki).
      </ArticleParagraph>

      <ArticleParagraph>
        <strong> Cena obejmuje: </strong>
        przejazd autokarem, 10 noclegów w domkach 6-osobowych, wyżywienie: 9
        śniadań, 9x obiad, 9x kolacja, pierwszym świadczeniem będzie
        obiadokolacja w dniu przyjazdu, ostatnim śniadanie + suchy prowiant w
        dniu wyjazdu. Wycieczki fakultatywne, ubezpieczenie, opiekę kadry.
      </ArticleParagraph>
    </template>

    <template #right-column>
      <ArticleParagraph type="important centered">
        <strong class="text-colored upper">
          Wpłata zaliczki w kwocie 500 złotych decyduje o zapisie dziecka na
          wypoczynek.
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
        <strong class="upper text-colored">Brak wolnych miejsc! </strong>
        <br />
        Za rok planowany wyjazd nad polskie morze lub do Zakopanego!
      </ArticleParagraph>

      <ArticleParagraph type="centered">
        <strong> Do pobrania: </strong>
        <br />
        <DownloadLink
          path="/downloads/KARTA-KWALIFIKACYJNA-UCZESTNIKA-WYPOCZYNKU.odt"
        >
          Karta uczestnika wypoczynku
        </DownloadLink>
        <DownloadLink path="/downloads/info-2022-jarosławiec.odt">
          Informacje przed wyjazdem
        </DownloadLink>
      </ArticleParagraph>
    </template>
  </ArticleSection>
</template>

<script>
export default {
  name: 'NewsJaroslawiec2022',
  props: {
    image: {
      type: String,
      required: true,
    },
    isFull: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
