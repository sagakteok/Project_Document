<template>
  <v-app-bar elevation="0" style="position: fixed; padding: calc(env(safe-area-inset-top) + 10px); background-color: #FFFFFF; display: flex; justify-content: center">
    <v-toolbar elevation="0" style="max-width: 2000px; margin: auto; background-color: transparent">
      <text>
        <v-img :src="BarLogo" style="width: 130px; margin-left: 40px"/>
      </text>
      <div style="width: 400px">
        <v-text-field class="MainSearch1400" placeholder="원하는 서류를 검색해보세요" prepend-inner-icon="mdi-magnify" variant="outlined" bg-color="#F8FAFF" base-color="#F8FAFF" hide-details density="comfortable" clearable rounded style="margin-left: 40px"/>
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

<style>
@font-face {
  font-family: 'SpoqaHanSansNeo';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
}
.MainSearch1400 input {
  font-weight: normal;
  font-size: 15px;
  color: #91AEF7
}
</style>