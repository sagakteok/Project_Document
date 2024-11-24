<template>
  <v-container style="max-width: 2000px">
    <v-row justify="space-around">
      <v-scroll-x-transition>
        <div v-show="Transition1">
          <div style="margin-left: 90px">
            <v-row>
              <text style="font-weight: bold; color: #FFFFFF; font-size: 40px; text-shadow: 0px 0px 1px 1px #000000">서비스를 선택해보세요.</text>
            </v-row>
            <v-row>
              <text style="font-weight: lighter; color: #FFFFFF; font-size: 70px">원하는 민원문서,</text>
            </v-row>
            <v-row>
              <text style="font-weight: lighter; color: #FFFFFF; font-size: 70px">한 곳에서 출력방법을 찾아보세요!</text>
            </v-row>
          </div>
          <div style="margin-top: 100px; margin-left: 70px">
            <v-row justify="start">
              <v-hover v-slot="{isHovering, props}">
                <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)" @click="GotoAllDocuments()">
                  <v-row>
                    <div style="margin: auto">
                      <v-row>
                        <text v-bind="props" :style="CardTitleStyle(isHovering)">{{Title[0]}}</text>
                      </v-row>
                      <v-row>
                        <text :style="CardSubtitleStyle()">{{SubTitle[0]}}</text>
                      </v-row>
                    </div>
                  </v-row>
                </v-card>
              </v-hover>
              <v-hover v-slot="{isHovering, props}">
                <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)">
                  <v-row>
                    <div style="margin: auto">
                      <v-row>
                        <text v-bind="props" :style="CardTitleStyle(isHovering)">{{Title[1]}}</text>
                      </v-row>
                      <v-row>
                        <text :style="CardSubtitleStyle()">{{SubTitle[1]}}</text>
                      </v-row>
                    </div>
                  </v-row>
                </v-card>
              </v-hover>
              <v-hover v-slot="{isHovering, props}">
                <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)">
                  <v-row>
                    <div style="margin: auto">
                      <v-row>
                        <text v-bind="props" :style="CardTitleStyle(isHovering)">{{Title[2]}}</text>
                      </v-row>
                      <v-row>
                        <text :style="CardSubtitleStyle()">{{SubTitle[2]}}</text>
                      </v-row>
                    </div>
                  </v-row>
                </v-card>
              </v-hover>
            </v-row>
          </div>
          <div style="margin-top: 35px; margin-left: 70px">
            <v-row justify="start">
              <v-hover v-slot="{isHovering, props}">
                <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)">
                  <v-row>
                    <div style="margin: auto">
                      <v-row>
                        <text v-bind="props" :style="CardTitleStyle(isHovering)">{{Title[3]}}</text>
                      </v-row>
                      <v-row>
                        <text :style="CardSubtitleStyle()">{{SubTitle[3]}}</text>
                      </v-row>
                    </div>
                  </v-row>
                </v-card>
              </v-hover>
              <v-hover v-slot="{isHovering, props}">
                <v-card v-bind="props" elevation="0" :style="CardStyle(isHovering)">
                  <v-row>
                    <div style="margin: auto">
                      <v-row>
                        <text v-bind="props" :style="CardTitleStyle(isHovering)">{{Title[4]}}</text>
                      </v-row>
                      <v-row>
                        <text :style="CardSubtitleStyle()">{{SubTitle[4]}}</text>
                      </v-row>
                    </div>
                  </v-row>
                </v-card>
              </v-hover>
            </v-row>
          </div>
        </div>
      </v-scroll-x-transition>
      <v-scroll-x-reverse-transition>
        <div v-show="Transition1" style="display: flex; align-items: center">
          <v-img :src="DesktopBanner1" style="width: 300px; margin-right: 90px"/>
        </div>
      </v-scroll-x-reverse-transition>
    </v-row>
  </v-container>
</template>

<script>
import router from "../../router.js";
import AllDocuments1400px from "../AllDocuments/AllDocuments1400px.vue";
export default {
  components: {AllDocuments1400px},
  data(){
    return {
      DesktopBanner1: new URL('../../assets/DesktopBanner1.png', import.meta.url).href,
      Transition1: false,
      Title:
          ['법률, 행정',
            '금융, 세무',
            '자동차',
            '부동산',
            '사업, 근로'],
      SubTitle:
          ['법률, 행정 업무를 처리하고 싶다면?',
          '금융 및 세무 업무를 처리하고 싶다면?',
          '자동차 관련 업무를 처리하고 싶다면?',
          '부동산 관련 업무를 처리하고 싶다면?',
          '근로에 관한 업무를 처리하고 싶다면?']
    }
  },
  methods: {
    GotoAllDocuments() {
      router.push('/AllDocuments')
    },
    CardStyle() {
      return {
        display: "flex",
        width: "180px",
        height: "100px",
        borderRadius: "15px",
        backgroundColor: "#FFFFFF",
        marginLeft: "20px"
      }
    },
    CardTitleStyle(isHovering) {
      return {
        transition: "all .1s ease-in-out",
        fontWeight: "bold",
        fontSize: "20px",
        margin: "auto",
        color: isHovering ? "#00A4FF" : "#2155D6",
      }
    },
    CardSubtitleStyle() {
      return {
        fontWeight: "normal",
        fontSize: "10px",
        color: "#808080",
        margin: "auto",
        marginTop: "3px"
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

<style>
@font-face {
  font-family: 'SpoqaHanSansNeo-Regular';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
}
</style>