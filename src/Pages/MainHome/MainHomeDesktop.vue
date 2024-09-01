<template>
  <div style="display: flex; align-items: center; justify-content: center">
    <v-row>
      <v-scroll-x-reverse-transition>
        <div v-show="Transition1">
          <v-card width="600px" height="600px" elevation="0" style="background-color: transparent; display: flex; align-items: center; justify-content: center; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 50px; color: #006196">
            <text>멋진 배너가 들어올 자리!</text>
          </v-card>
        </div>
      </v-scroll-x-reverse-transition>
    </v-row>
    <v-row>
      <v-dialog-transition>
        <div v-show="Transition1" style="margin-right: 100px; margin-left: 100px;border-left: thin solid #00619630; height: 50vh"/>
      </v-dialog-transition>
    </v-row>
    <v-row>
      <v-scroll-x-transition>
        <div v-show="Transition1">
          <div>
            <v-hover v-slot="{isHovering, props}">
              <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)" @click="GotoAllDocuments()">
                <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                  <template v-slot:prepend>
                    <text v-bind="props" :style="CardTitleStyle(isHovering)">서류 모아보기</text>
                  </template>
                  <template v-slot:append>
                    <text style="font-weight: 500; font-size: 15px; color: #808080; margin-right: 15px">서류 하나하나 찾고 싶다면?</text>
                  </template>
                </v-list-item>
              </v-card>
            </v-hover>
          </div>
          <div style="margin-top: 35px">
            <v-hover v-slot="{isHovering, props}">
              <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)" link>
                <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                  <template v-slot:prepend>
                    <text v-bind="props" :style="CardTitleStyle(isHovering)">법률, 행정</text>
                  </template>
                  <template v-slot:append>
                    <text style="font-weight: 500; font-size: 15px; color: #808080; margin-right: 15px">법륩, 행정 업무를 처리하고 싶다면?</text>
                  </template>
                </v-list-item>
              </v-card>
            </v-hover>
          </div>
          <div style="margin-top: 35px">
            <v-hover v-slot="{isHovering, props}">
              <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)" link>
                <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                  <template v-slot:prepend>
                    <text v-bind="props" :style="CardTitleStyle(isHovering)">금융, 세무</text>
                  </template>
                  <template v-slot:append>
                    <text style="font-weight: 500; font-size: 15px; color: #808080; margin-right: 15px">금융 및 세무 업무를 처리하고 싶다면?</text>
                  </template>
                </v-list-item>
              </v-card>
            </v-hover>
          </div>
          <div style="margin-top: 35px">
            <v-hover v-slot="{isHovering, props}">
              <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)" link>
                <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                  <template v-slot:prepend>
                    <text v-bind="props" :style="CardTitleStyle(isHovering)">자동차</text>
                  </template>
                  <template v-slot:append>
                    <text style="font-weight: 500; font-size: 15px; color: #808080; margin-right: 15px">자동차 관련 업무를 처리하고 싶다면?</text>
                  </template>
                </v-list-item>
              </v-card>
            </v-hover>
          </div>
          <div style="margin-top: 35px">
            <v-hover v-slot="{isHovering, props}">
              <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)" link>
                <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                  <template v-slot:prepend>
                    <text v-bind="props" :style="CardTitleStyle(isHovering)">부동산</text>
                  </template>
                  <template v-slot:append>
                    <text style="font-weight: 500; font-size: 15px; color: #808080; margin-right: 15px">부동산 관련 업무를 처리하고 싶다면?</text>
                  </template>
                </v-list-item>
              </v-card>
            </v-hover>
          </div>
          <div style="margin-top: 35px">
            <v-hover v-slot="{isHovering, props}">
              <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)" link>
                <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                  <template v-slot:prepend>
                    <text v-bind="props" :style="CardTitleStyle(isHovering)">사업, 근로</text>
                  </template>
                  <template v-slot:append>
                    <text style="font-weight: 500; font-size: 15px; color: #808080; margin-right: 15px">근로에 관한 업무를 처리하고 싶다면?</text>
                  </template>
                </v-list-item>
              </v-card>
            </v-hover>
          </div>
        </div>
      </v-scroll-x-transition>
    </v-row>
  </div>
</template>

<script>
import router from "../../router.js";
import AllDocuments1400px from "../AllDocuments/AllDocuments1400px.vue";
export default {
  components: {AllDocuments1400px},
  data() {
    return {
      Transition1: false,
    }
  },
  methods: {
    GotoAllDocuments() {
      router.push('/AllDocuments')
    },
    CardStyle() {
      return {
        width: "600px",
        margin: "auto",
        borderRadius: "15px",
        fontFamily: "Inter-Bold, Helvetica"
      }
    },
    CardListitemStyle() {
      return {
        height: "80px"
      }
    },
    CardTitleStyle(isHovering) {
      return {
        transition: "all .1s ease-in-out",
        fontWeight: "800",
        fontSize: isHovering ? "22px" : "20px",
        color: isHovering ? "#006196" : "#000000",
        marginLeft: "15px"
      }
    }
  },
  mounted() {
    setTimeout(()=>{
      this.Transition1 = true;
    }, 200)
  }
}
</script>