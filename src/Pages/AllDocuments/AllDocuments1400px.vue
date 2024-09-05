<template>
  <div style="margin-top: 100px">
    <div style="margin-top: 20px">
      <div style="display: flex; align-items: center; justify-content: center">
        <v-card class="ma-6" elevation="0" @click="GotoItem1()" style="height: 150px; width: 250px; border-radius: 20px"/>
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
      </div>
    </div>
    <div style="margin-top: 20px">
      <div style="display: flex; align-items: center; justify-content: center">
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
      </div>
    </div>
    <div style="margin-top: 20px">
      <div style="display: flex; align-items: center; justify-content: center">
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
      </div>
    </div>
    <div style="margin-top: 20px">
      <div style="display: flex; align-items: center; justify-content: center">
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
      </div>
    </div>
    <div style="margin-top: 20px">
      <div style="display: flex; align-items: center; justify-content: center">
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
      </div>
    </div>
    <div style="margin-top: 20px">
      <div style="display: flex; align-items: center; justify-content: center">
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
      </div>
    </div>
    <div style="margin-top: 20px">
      <div style="display: flex; align-items: center; justify-content: center">
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
        <v-card class="ma-6" elevation="0" style="height: 150px; width: 250px; border-radius: 20px"/>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router.js";
import item1 from "../../Pages/AllDocuments/Items/Item1.vue";

export default {
  components: {item1},
  data() {
    return {
    }
  },
  methods: {
    GotoItem1() {
      router.push('/AllDocuments/item1')
    }
  }
}
</script>