<template>
  <main>
    <img :src="testStorageImageURL" alt="Testowa grafika" />
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
      const imageRef = ref(storage, '/gallery/1.jpg');

      getDownloadURL(imageRef)
        .then(url => {
          this.testStorageImageURL = url;
        })
        .catch(error => {
          switch (error.code) {
            case 'storage/object-not-found':
              break;
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              break;
            case 'storage/unknown':
              break;
          }
        });
    },
  },
};
</script>
