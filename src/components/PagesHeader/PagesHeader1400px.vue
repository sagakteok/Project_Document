<template>
  <v-app-bar elevation="0" style="position: fixed; padding-top: calc(env(safe-area-inset-top) + 20px); background-color: #F7FAFC; display: flex; justify-content: center">
    <v-toolbar elevation="0" style="max-width: 1400px; margin: auto; background-color: transparent">
      <text>
        <v-img @click="GotoMainHome()" :src="BarLogo" style="width: 130px; margin-left: 40px; cursor: pointer"/>
      </text>
      <div style="width: 400px">
        <v-text-field class="PagesSearch1400" placeholder="원하는 서류 / 서비스를 검색해보세요" prepend-inner-icon="mdi-magnify" variant="outlined" bg-color="#FFFFFF" base-color="#77A4C4" hide-details density="comfortable" clearable rounded style="margin-left: 40px"/>
      </div>
      <template v-slot:append>
        <v-menu v-model="menuOpen" transition="slide-y-transition">
          <template v-slot:activator="{props: activatorProps}">
            <v-hover v-slot:default="{isHovering, props: hoverProps}">
              <v-icon v-bind="mergeProps(activatorProps, hoverProps)" icon="mdi-dots-vertical" v-if="ShowIcon" :style="VerticalDotButtonStyle(isHovering || menuOpen)"/>
            </v-hover>
          </template>
          <div style="width: 150px; height: 280px; background-color: #FFFFFF; text-align: center; margin-top: 5px; border-radius: 10px; border: 1px solid #C8C8C890">
            <v-hover v-slot="{isHovering, props}">
              <v-list-item-title v-bind="props" :style="MenuTextStyle(isHovering)" @click="GotoAllDocuments()">서류 모아보기</v-list-item-title>
            </v-hover>
            <v-hover v-slot="{isHovering, props}">
              <v-list-item-title v-bind="props" :style="MenuTextStyle(isHovering)">법률, 행정</v-list-item-title>
            </v-hover>
            <v-hover v-slot="{isHovering, props}">
              <v-list-item-title v-bind="props" :style="MenuTextStyle(isHovering)">금융, 세무</v-list-item-title>
            </v-hover>
            <v-hover v-slot="{isHovering, props}">
              <v-list-item-title v-bind="props" :style="MenuTextStyle(isHovering)">자동차</v-list-item-title>
            </v-hover>
            <v-hover v-slot="{isHovering, props}">
              <v-list-item-title v-bind="props" :style="MenuTextStyle(isHovering)">부동산</v-list-item-title>
            </v-hover>
            <v-hover v-slot="{isHovering, props}">
              <v-list-item-title v-bind="props" :style="MenuTextStyle(isHovering)">사업, 근로</v-list-item-title>
            </v-hover>
          </div>
        </v-menu>
      </template>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import router from "../../router.js"
import {useRoute} from 'vue-router';
import {mergeProps, computed} from 'vue';

export default {
  data() {
    return{
      BarLogo: new URL('../../assets/Documents.png', import.meta.url).href,
      menuOpen: false
    }
  },
  methods: {
    mergeProps,
    GotoMainHome() {
      router.push('/')
    },
    GotoAllDocuments() {
      router.push('/AllDocuments')
    },
    MenuTextStyle(isHovering) {
      return {
        transition: "all .1s ease-in-out",
        marginTop: "20px",
        fontFamily: "Inter-Bold, Helvetica",
        fontWeight: "600",
        fontSize: "15px",
        color: isHovering ? "#00A4FF" : "#000000",
        cursor: "pointer"
      }
    },
    VerticalDotButtonStyle(isHovering) {
      return {
        transition: "all .1s ease-in-out",
        fontSize: "25px",
        marginRight: "20px",
        color: isHovering ? "#00A4FF" : "#004B74"
      }
    }
  },
  setup() {
    const route = useRoute();
    const ShowIcon = computed(() => {
      return route.path !== '/AllDocuments'
    })
    return {ShowIcon};
  }
}
</script>

<style>
.PagesSearch1400 input {
  font-weight: 700;
  color: #006196
}
</style>