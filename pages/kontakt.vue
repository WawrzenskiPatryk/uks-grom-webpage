<template>
  <main class="contact">
    <section class="contact__info">
      <div class="contact__info-items">
        <BaseHeading class="contact__address-info" type="aside">
          <template #title>Adres</template>
          <template #subtitle>
            <BaseParagraph>
              ul. Adama Mickiewicza 24<br />
              20-433 Lublin
            </BaseParagraph>
          </template>
        </BaseHeading>

        <BaseHeading class="contact__address-info" type="aside">
          <template #title>Telefon</template>
          <template #subtitle>
            <BaseParagraph>
              Piotr Łuszczew <br />
              609-006-576
            </BaseParagraph>
          </template>
        </BaseHeading>

        <BaseHeading class="contact__address-info" type="aside">
          <template #title>Dane do przelewu</template>
          <template #subtitle>
            <BaseParagraph>Bank Pekao S.A.</BaseParagraph>
            <BaseParagraph>12 1240 2470 1111 0010 6881 3209</BaseParagraph>
          </template>
        </BaseHeading>
      </div>

      <GoogleMap class="contact__map" />
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
};
</script>

<style lang="scss" scoped>
.contact {
  &__info {
    display: flex;
    gap: 6rem;

    flex-direction: column;
    @media screen and (min-width: $desktop-min-screen-width) {
      flex-direction: row;
    }
  }
  &__map,
  &__info-items {
    width: 100%;
    @media screen and (min-width: $desktop-min-screen-width) {
      width: 50%;
    }
  }
  &__info-items {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 4rem;
    @media screen and (min-width: $desktop-min-screen-width) {
      flex-wrap: wrap;
      gap: 8rem;
    }
    padding-right: 4rem;
  }
}
</style>
