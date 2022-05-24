<template>
  <main>
    <PictureSection
      :image="
        require('~/assets/images/white_red_shirt_kids_football_players.jpg')
      "
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

    <section>
      <h3>Pliki do pobrania:</h3>

      <div>
        <BaseLink path="/downloads/sample.pdf" download> Pobierz PDF </BaseLink>
      </div>
      <div>
        <BaseLink path="/downloads/sample.docx" download>
          Pobierz DOCX
        </BaseLink>
      </div>
      <div>
        <BaseLink
          :path="require('~/assets/images/jumping_kids_football_fun.jpg')"
          download
        >
          Pobierz zdjęcie
        </BaseLink>
      </div>
    </section>

    <img :src="testStorageImageURL" alt="Testowa grafika" />
  </main>
</template>

<script>
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export default {
  name: 'TestPage',
  data() {
    return {
      testStorageImageURL: null,
    };
  },
  created() {
    this.getImageFromStorage();
  },
  methods: {
    getImageFromStorage() {
      const storage = getStorage();
      const imagePath = 'gallery/Wakacje-2021/1.jpg';
      const imageRef = ref(storage, imagePath);

      getDownloadURL(imageRef).then(url => {
        this.testStorageImageURL = url;
      });
    },
  },
};
</script>
