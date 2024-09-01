<template>
  <v-bottom-navigation elevation="0" style="position: fixed; background-color: #FFFFFF; padding-bottom: env(safe-area-inset-bottom); display: flex; align-items: center; height: calc(env(safe-area-inset-bottom) + 80px); border-top-left-radius: 30px; border-top-right-radius: 30px">
    <div style="width: clamp(350px, 60vw, 500px)">
      <v-text-field placeholder="원하는 서류 / 서비스를 검색해보세요" prepend-inner-icon="mdi-magnify" variant="outlined" bg-color="#F8F8F8" base-color="#FFFFFF" hide-details density="comfortable" clearable rounded style="margin: auto; font-size: 12px"/>
    </div>
  </v-bottom-navigation>
</template>