<template>
  <v-app-bar elevation="0" style="position: fixed; padding-top: env(safe-area-inset-top); background-color: #F8F8F8">
    <v-app-bar-title style="font-family: Inter-Bold, Helvetica; font-weight: 700; margin-left: 4px; font-size: 20px">{{pageTitle}}</v-app-bar-title>
    <template v-slot:prepend>
      <v-btn icon="mdi-chevron-left" style="font-size: 16px" @click="GotoBack()"/>
    </template>
    <template v-slot:append>
      <v-btn icon="mdi-home-outline" v-if="ShowIcon" style="font-size: 12px" @click="GotoMainHome()"/>
      <v-app-bar-nav-icon v-if="ShowIcon" style="font-size: 12px" @click.stop="drawer = !drawer"/>
    </template>
  </v-app-bar>
  <v-navigation-drawer elevation="0" v-model="drawer" :location="'top'" temporary style="border-bottom-left-radius: 30px; border-bottom-right-radius: 30px">
    <div style="margin-top: calc(env(safe-area-inset-top) + 22px)"/>
    <v-hover v-slot="{isHovering, props}">
      <v-list-item-title v-bind="props" :style="DrawerTextStyle(isHovering)" @click="GotoAllDocuments()">서류 모아보기</v-list-item-title>
    </v-hover>
    <v-hover v-slot="{isHovering, props}">
      <v-list-item-title v-bind="props" :style="DrawerTextStyle(isHovering)">법률, 행정</v-list-item-title>
    </v-hover>
    <v-hover v-slot="{isHovering, props}">
      <v-list-item-title v-bind="props" :style="DrawerTextStyle(isHovering)">금융, 세무</v-list-item-title>
    </v-hover>
    <v-hover v-slot="{isHovering, props}">
      <v-list-item-title v-bind="props" :style="DrawerTextStyle(isHovering)">자동차</v-list-item-title>
    </v-hover>
    <v-hover v-slot="{isHovering, props}">
      <v-list-item-title v-bind="props" :style="DrawerTextStyle(isHovering)">부동산</v-list-item-title>
    </v-hover>
    <v-hover v-slot="{isHovering, props}">
      <v-list-item-title v-bind="props" :style="DrawerTextStyle(isHovering)">사업, 근로</v-list-item-title>
    </v-hover>
    <div style="margin-bottom: 30px"/>
  </v-navigation-drawer>
</template>

<script>
import router from "../../router.js"
import {useRoute} from 'vue-router';
import {computed} from 'vue';

export default {
  data() {
    return {
      drawer: false,
      group: null,
      DrawerTextStyle(isHovering) {
        return {
          transition: "all .1s ease-in-out",
          marginLeft: "30px",
          marginTop: "22px",
          fontFamily: "Inter-Bold, Helvetica",
          fontWeight: "500",
          fontSize: "15px",
          color: isHovering ? "#00A4FF" : "#000000",
          cursor: "pointer"
        }
      }
    }
  },
  methods: {
    GotoMainHome() {
      router.push('/')
    },
    GotoBack() {
      const pathArray = this.$route.path.split('/');
      pathArray.pop();
      const parentPath = pathArray.join('/') || '/';
      this.$router.push(parentPath);
    },
    GotoAllDocuments() {
      router.push('/AllDocuments')
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  setup() {
    const route = useRoute();
    const pageTitle = route.meta.title;
    const ShowIcon = computed(() => {
      return route.path !== '/AllDocuments'
    })
    return {pageTitle, ShowIcon};
  }
}
</script>