<template>
  <v-app-bar elevation="0" style="position: fixed; padding-top: calc(env(safe-area-inset-top) + 20px); background-color: #F1FAFF; display: flex; justify-content: center">
    <v-toolbar elevation="0" style="max-width: 1400px; position: fixed; margin: auto; background-color: transparent">
      <v-img :src="BarLogo" style="width: 130px; margin: auto"/>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import router from "../../router.js"

export default {
  data() {
    return {
      BarLogo: new URL('../../assets/Documents.png', import.meta.url).href
    }
  }
}
</script>