<template>
  <v-navigation-drawer floating elevation="0" style="background-color: transparent">
    <v-scroll-x-transition>
      <div v-show="Transition1" style="margin-top: 100px">
        <text style="margin-left: 30px; font-family: Inter-Bold, Helvetica; color: #006196; font-weight: 700; font-size: 40px">메뉴</text>
        <div style="width: 100%; height: 400px; background-color: #FFFFFF; margin-top: 10px; border-top: 3px solid #006196; border-radius: 0">
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
        </div>
      </div>
    </v-scroll-x-transition>
  </v-navigation-drawer>
</template>

<script>
import router from "../router.js"

export default {
  data() {
    return {
      Transition1: false
    }
  },
  methods: {
    GotoAllDocuments() {
      router.push('/AllDocuments')
    },
    DrawerTextStyle(isHovering) {
      return {
        transition: "all .1s ease-in-out",
        marginLeft: "30px",
        marginTop: "30px",
        fontFamily: "Inter-Bold, Helvetica",
        fontWeight: "500",
        fontSize: "20px",
        color: isHovering ? "#00A4FF" : "#000000",
        cursor: "pointer"
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.Transition1 = true;
    }, 100)
  }
}
</script>