<template>
  <v-bottom-navigation elevation="0" style="position: fixed; background-color: #FFFFFF; padding-bottom: env(safe-area-inset-bottom); display: flex; align-items: center; height: calc(env(safe-area-inset-bottom) + 80px); border-top-left-radius: 30px; border-top-right-radius: 30px; border-top: 1px solid #E0E0E0">
    <div style="width: clamp(350px, 60vw, 500px)">
      <v-text-field class="Search800" placeholder="원하는 서류 / 서비스를 검색해보세요" prepend-inner-icon="mdi-magnify" variant="outlined" bg-color="#F7FAFC" base-color="#77A4C4" hide-details density="comfortable" clearable rounded style="margin: auto"/>
    </div>
  </v-bottom-navigation>
</template>

<style>
.Search800 input {
  font-weight: 700;
  color: #006196
}
</style>