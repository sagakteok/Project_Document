<template>
  <v-app-bar elevation="0" style="position: fixed; padding-top: calc(env(safe-area-inset-top) + 20px); background-color: #F7FAFC; display: flex; justify-content: center">
    <v-toolbar elevation="0" style="max-width: 1400px; margin: auto; background-color: transparent">
      <text>
        <v-img @click="GotoMainHome()" :src="BarLogo" style="width: 130px; margin-left: 40px; cursor: pointer"/>
      </text>
      <div style="width: 400px">
        <v-text-field class="PagesSearchDesktop" placeholder="원하는 서류 / 서비스를 검색해보세요" prepend-inner-icon="mdi-magnify" variant="outlined" bg-color="#FFFFFF" base-color="#77A4C4" hide-details density="comfortable" clearable rounded style="margin-left: 40px"/>
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
  methods: {
    GotoMainHome() {
      router.push('/')
    }
  }
}
</script>

<style>
.PagesSearchDesktop input {
  font-weight: 700;
  color: #006196
}
</style>