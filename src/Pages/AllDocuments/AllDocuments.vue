<template>
  <v-main v-if="Width500px" :style="VMainStyle()">
    <PagesHeader500px/>
    <AllDocuments1400px/>
    <SearchFooter500px/>
  </v-main>
  <v-main v-else-if="Width800px" :style="VMainStyle()">
    <PagesHeader800px/>
    <AllDocuments1400px/>
    <SearchFooter800px/>
  </v-main>
  <v-main v-else-if="Width1400px" :style="VMainStyle()">
    <PagesHeader1400px/>
    <AllDocuments1400px/>
  </v-main>
  <v-main v-else :style="VMainStyle()">
    <PagesHeaderDesktop/>
    <AllDocuments1400px/>
  </v-main>
</template>

<script>
import router from "../../router.js"
import PagesHeaderDesktop from "../../components/PagesHeader/PagesHeaderDesktop.vue";
import PagesHeader1400px from "../../components/PagesHeader/PagesHeader1400px.vue";
import PagesHeader800px from "../../components/PagesHeader/PagesHeader800px.vue";
import PagesHeader500px from "../../components/PagesHeader/PagesHeader500px.vue";
import AllDocuments1400px from "../../Pages/AllDocuments/AllDocuments1400px.vue";
import SearchFooter800px from "../../components/SearchFooter/SearchFooter800px.vue";
import SearchFooter500px from "../../components/SearchFooter/SearchFooter500px.vue";

export default {
  components: {PagesHeaderDesktop, PagesHeader1400px, PagesHeader800px, PagesHeader500px, AllDocuments1400px, SearchFooter800px, SearchFooter500px},
  data() {
    return {
      windowWidth: window.innerWidth,
      VMainStyle() {
        return {
          backgroundColor: "#F8F8F8"
        }
      }
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  computed: {
    Width1400px() {
      return this.windowWidth <= 1400;
    },
    Width800px() {
      return this.windowWidth <= 800;
    },
    Width500px() {
      return this.windowWidth <= 500;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>