<template>
  <PagesHeader1400px/>
  <v-main style="background-color: #F8F8F8">
    <Drawer/>
    <div style="margin-top: 30px; margin-left: 10px">
      <v-dialog-transition>
        <v-btn v-show="Transition1" variant="text" prepend-icon="mdi-arrow-left" rounded @click="GotoBack()" style="font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 20px">이전 화면</v-btn>
      </v-dialog-transition>
    </div>
    <div>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition1" style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 60px; color: #006196; margin: auto; margin-top: 50px; cursor: default">가족관계증명서</text>
        </v-scroll-y-reverse-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <div v-show="Transition1" style="margin: auto">
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 20px; color: #000000; margin: auto; margin-top: 0px; cursor: default">보안 프로그램 X</text>
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 25px; color: #000000; margin: auto; margin-top: 0px; margin-right: 10px; margin-left: 10px; cursor: default">|</text>
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 20px; color: #000000; margin: auto; margin-top: 0px; cursor: default">출력 비용: 1,000원</text>
          </div>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <div style="margin-top: 120px;">
      <v-row>
        <v-scroll-y-transition>
          <v-card v-show="Transition2" elevation="0" style="width: 800px; margin: auto; border-radius: 20px; font-family: Inter-Bold, Helvetica">
            <v-list>
              <v-list-group v-model="open[0]">
                <template v-slot:activator="{props: activatorProps}">
                  <v-list-item v-bind="activatorProps" style="font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 20px; color: #000000; margin-left: 10px">출력 방법</v-list-item>
                </template>
                <v-list-item>
                  <div>
                    Hi Faker
                  </div>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <div style="margin-top: 50px;">
      <v-row>
        <v-scroll-y-transition>
          <v-card v-show="Transition3" elevation="0" style="width: 800px; margin: auto; border-radius: 20px; font-family: Inter-Bold, Helvetica">
            <v-list>
              <v-list-group v-model="open[0]">
                <template v-slot:activator="{props: activatorProps}">
                  <v-list-item v-bind="activatorProps" style="font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 20px; color: #000000; margin-left: 10px">서류 양식</v-list-item>
                </template>
                <v-list-item>
                  <div>
                    Hi Faker
                  </div>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-scroll-y-transition>
      </v-row>
    </div>
  </v-main>
</template>

<script>
import router from "../../../router.js";
import Drawer from "../../../components/Drawer.vue"
import PagesHeader1400px from "../../../components/PagesHeader/PagesHeader1400px.vue";

export default {
  components: {Drawer, PagesHeader1400px},
  data() {
    return {
      Transition1: false,
      Transition2: false,
      Transition3: false,
      open: [false, false] // Updated to array of booleans
    }
  },
  methods: {
    GotoBack() {
      router.go(-1);
    }
  },
  mounted() {
    setTimeout(() => {
      this.Transition1 = true;
    }, 100)
    setTimeout(() => {
      this.Transition2 = true;
    }, 400)
    setTimeout(() => {
      this.Transition3 = true;
    }, 500)
  }
}
</script>
