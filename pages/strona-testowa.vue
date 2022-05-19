<template>
  <main>
    <PictureSection
      :image="require('~/assets/images/white_red_shirt_kids_football_players.jpg')"
    >
      <BaseHeading type="aside" />
    </PictureSection>
    <PictureSection
      direction="right"
      :image="require('~/assets/images/jumping_kids_football_fun.jpg')"
    >
      <BaseHeading type="aside" />
    </PictureSection>
    <PictureSection
      :image="require('~/assets/images/school_physical_education_football.jpg')"
    >
      <BaseHeading type="aside" />
    </PictureSection>
  </main>
</template>

<script>
export default {
  name: 'TestPage',
};
</script>
