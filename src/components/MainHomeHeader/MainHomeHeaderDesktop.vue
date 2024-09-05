<template>
  <v-app-bar elevation="0" style="position: fixed; padding-top: calc(env(safe-area-inset-top) + 20px); background-color: #F1FAFF; display: flex; align-items: center">
    <v-toolbar elevation="0" style="max-width: 1400px; margin: auto; background-color: transparent">
      <text>
        <v-img :src="BarLogo" style="width: 130px; margin-left: 40px"/>
      </text>
      <div style="width: 400px">
        <v-text-field placeholder="서류 / 서비스를 검색해보세요" prepend-inner-icon="mdi-magnify" variant="outlined" bg-color="#FFFFFF" base-color="#FFFFFF" hide-details density="comfortable" clearable rounded style="margin-left: 40px"/>
      </div>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import router from "../../router.js"

export default {
  data() {
    return{
      BarLogo: new URL('../../assets/Documents.png', import.meta.url).href
    }
  },
}
</script>