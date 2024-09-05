<template>
  <v-main v-if="Width500px" :style="VMainStyle()">
    <PagesHeader500px/>
    <SearchFooter500px/>
  </v-main>
  <v-main v-else-if="Width800px" :style="VMainStyle()">
    <PagesHeader800px/>
    <SearchFooter800px/>
  </v-main>
  <v-main v-else :style="VMainStyle()">
    <PagesHeader1400px v-if="Width1400px"/>
    <PagesHeaderDesktop v-if="WidthDesktop"/>
    <Drawer v-if="WidthDesktop"/>
    <div style="margin-top: 30px; margin-left: 10px">
      <v-dialog-transition>
        <v-btn v-show="Transition1" variant="text" prepend-icon="mdi-chevron-left" rounded @click="GotoBack()" style="font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 20px">이전 화면</v-btn>
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
          <v-card v-show="Transition2" elevation="0" style="width: clamp(600px, 70vw, 800px); margin: auto; border-radius: 20px; font-family: Inter-Bold, Helvetica">
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
          <v-card v-show="Transition3" elevation="0" style="width: clamp(600px, 70vw, 800px); margin: auto; border-radius: 20px; font-family: Inter-Bold, Helvetica">
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
import PagesHeader500px from "../../../components/PagesHeader/PagesHeader500px.vue";
import PagesHeader800px from "../../../components/PagesHeader/PagesHeader800px.vue";
import PagesHeader1400px from "../../../components/PagesHeader/PagesHeader1400px.vue";
import PagesHeaderDesktop from "../../../components/PagesHeader/PagesHeaderDesktop.vue";
import SearchFooter500px from "../../../components/SearchFooter/SearchFooter500px.vue";
import SearchFooter800px from "../../../components/SearchFooter/SearchFooter800px.vue";
import Drawer from "../../../components/Drawer.vue"

export default {
  components: {PagesHeader500px, PagesHeader800px, PagesHeader1400px, PagesHeaderDesktop, SearchFooter500px, SearchFooter800px, Drawer},
  data() {
    return {
      windowWidth: window.innerWidth,
      Transition1: false,
      Transition2: false,
      Transition3: false,
      open: [false, false],
      VMainStyle() {
        return {
          backgroundColor: "#F8F8F8"
        }
      }
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    GotoBack() {
      const pathArray = this.$route.path.split('/');
      pathArray.pop();
      const parentPath = pathArray.join('/') || '/';
      this.$router.push(parentPath);
    },
  },
  computed: {
    WidthDesktop() {
      return this.windowWidth > 1400;
    },
    Width1400px() {
      return this.windowWidth <= 1400;
    },
    Width800px() {
      return this.windowWidth <= 800;
    },
    Width500px() {
      return this.windowWidth <= 500;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    setTimeout(() => {
      this.Transition1 = true;
    }, 100)
    setTimeout(() => {
      this.Transition2 = true;
    }, 400)
    setTimeout(() => {
      this.Transition3 = true;
    }, 500)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>
