<template>
  <v-main v-if="Width500px" :style="VMainStyle()">
    <MainHomeHeader500px/>
    <MainHome500px/>
    <SearchFooter500px/>
  </v-main>
  <v-main v-else-if="Width800px" :style="VMainStyle()">
    <MainHomeHeader800px/>
    <MainHome800px/>
    <SearchFooter800px/>
  </v-main>
  <v-main v-else-if="Width1400px" :style="VMainStyle()">
    <MainHomeHeader1400px/>
    <MainHome1400px/>
  </v-main>
  <v-main v-else :style="VMainStyle()">
    <MainHomeHeader1400px/>
    <MainHomeDesktop/>
  </v-main>
</template>

<script>
import router from "../../router.js";
import MainHomeHeader1400px from "../../components/MainHomeHeader/MainHomeHeader1400px.vue";
import MainHomeHeader800px from "../../components/MainHomeHeader/MainHomeHeader800px.vue";
import MainHomeHeader500px from "../../components/MainHomeHeader/MainHomeHeader500px.vue";
import MainHomeDesktop from "../../Pages/MainHome/MainHomeDesktop.vue";
import MainHome1400px from "../../Pages/MainHome/MainHome1400px.vue";
import MainHome800px from "../../Pages/MainHome/MainHome800px.vue";
import MainHome500px from "../../Pages/MainHome/MainHome500px.vue";
import SearchFooter800px from "../../components/SearchFooter/SearchFooter800px.vue";
import SearchFooter500px from "../../components/SearchFooter/SearchFooter500px.vue";

export default {
  components: {MainHomeHeader1400px, MainHomeHeader800px, MainHomeHeader500px, MainHomeDesktop, MainHome1400px, MainHome800px, MainHome500px, SearchFooter800px, SearchFooter500px},
  data() {
    return {
      windowWidth: window.innerWidth,
      VMainStyle() {
        return {
          backgroundColor: "#F1FAFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
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