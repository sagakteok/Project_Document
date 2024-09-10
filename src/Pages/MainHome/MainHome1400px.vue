<template>
  <v-scroll-y-transition>
    <div v-show="Transition1">
      <div style="margin-top: calc(env(safe-area-inset-top) + 70px)"/>
      <div>
        <v-row>
          <v-hover v-slot="{isHovering, props}">
            <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)" @click="GotoAllDocuments()">
              <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                <template v-slot:prepend>
                  <text v-bind="props" :style="CardTitleStyle(isHovering)">서류 모아보기</text>
                </template>
                <template v-slot:append>
                  <text :style="CardSubtitleStyle()">서류 하나하나 찾고 싶다면?</text>
                </template>
              </v-list-item>
            </v-card>
          </v-hover>
        </v-row>
      </div>
      <div style="margin-top: 35px">
        <v-row>
          <v-hover v-slot="{isHovering, props}">
            <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)">
              <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                <template v-slot:prepend>
                  <text v-bind="props" :style="CardTitleStyle(isHovering)">법률, 행정</text>
                </template>
                <template v-slot:append>
                  <text :style="CardSubtitleStyle()">법률, 행정 업무를 처리하고 싶다면?</text>
                </template>
              </v-list-item>
            </v-card>
          </v-hover>
        </v-row>
      </div>
      <div style="margin-top: 35px">
        <v-row>
          <v-hover v-slot="{isHovering, props}">
            <v-card  v-bind="props" elevation="0" :style="CardStyle(isHovering)">
              <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                <template v-slot:prepend>
                  <text v-bind="props" :style="CardTitleStyle(isHovering)">금융, 세무</text>
                </template>
                <template v-slot:append>
                  <text :style="CardSubtitleStyle()">금융 및 세무 업무를 처리하고 싶다면?</text>
                </template>
              </v-list-item>
            </v-card>
          </v-hover>
        </v-row>
      </div>
      <div style="margin-top: 35px">
        <v-row>
          <v-hover v-slot="{isHovering, props}">
            <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)">
              <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                <template v-slot:prepend>
                  <text v-bind="props" :style="CardTitleStyle(isHovering)">자동차</text>
                </template>
                <template v-slot:append>
                  <text :style="CardSubtitleStyle()">자동차 관련 업무를 처리하고 싶다면?</text>
                </template>
              </v-list-item>
            </v-card>
          </v-hover>
        </v-row>
      </div>
      <div style="margin-top: 35px">
        <v-row>
          <v-hover v-slot="{isHovering, props}">
            <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)">
              <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                <template v-slot:prepend>
                  <text v-bind="props" :style="CardTitleStyle(isHovering)">부동산</text>
                </template>
                <template v-slot:append>
                  <text :style="CardSubtitleStyle()">부동산 관련 업무를 처리하고 싶다면?</text>
                </template>
              </v-list-item>
            </v-card>
          </v-hover>
        </v-row>
      </div>
      <div style="margin-top: 35px">
        <v-row>
          <v-hover v-slot="{isHovering, props}">
            <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)">
              <v-list-item v-bind="props" :style="CardListitemStyle(isHovering)">
                <template v-slot:prepend>
                  <text v-bind="props" :style="CardTitleStyle(isHovering)">사업, 근로</text>
                </template>
                <template v-slot:append>
                  <text :style="CardSubtitleStyle()">근로에 관한 업무를 처리하고 싶다면?</text>
                </template>
              </v-list-item>
            </v-card>
          </v-hover>
        </v-row>
      </div>
      <div style="height: calc(env(safe-area-inset-top) + 60px)"/>
    </div>
  </v-scroll-y-transition>
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
        width: "clamp(500px, 50vw, 650px)",
        margin: "auto",
        borderRadius: "15px",
        border: "1px solid #B8CDDF",
        backgroundColor: "#FFFFFF",
        fontFamily: "Inter-Bold, Helvetica"
      }
    },
    CardListitemStyle() {
      return {
        height: "clamp(60px, 8vh, 100px)"
      }
    },
    CardTitleStyle(isHovering) {
      return {
        transition: "all .1s ease-in-out",
        fontWeight: "700",
        fontSize: isHovering ? "22px" : "20px",
        color: isHovering ? "#00A4FF" : "#000000",
        marginLeft: "15px"
      }
    },
    CardSubtitleStyle() {
      return {
        fontWeight: "400",
        fontSize: "15px",
        color: "#808080",
        marginRight: "15px"
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