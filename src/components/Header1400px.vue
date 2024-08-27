<template>
  <v-app-bar elevation="0" style="height: 100px;background-color: transparent; display: flex; justify-content: center">
    <v-toolbar elevation="0" style="max-width: 1400px; margin: auto; background-color: transparent">
      <text style="margin-left: 40px" @click="GotoMainHome()">서류봉투</text>
      <div style="width: 400px">
        <v-text-field placeholder="원하는 서류 / 서비스를 검색해보세요" prepend-inner-icon="mdi-magnify" variant="outlined" bg-color="#FFFFFF" base-color="#FFFFFF" hide-details density="comfortable" clearable rounded style="margin-left: 40px"/>
      </div>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import router from "../router.js"

export default {
  methods: {
    GotoMainHome() {
      router.push('/')
    }
  }
}
</script>