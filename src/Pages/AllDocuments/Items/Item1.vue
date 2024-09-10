<template>
  <v-main v-if="Width500px" :style="VMainStyle()">
    <PagesHeader500px/>
    <SearchFooter500px/>
    <div>
      <div style="margin-top: env(safe-area-inset-top)"/>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition1" style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 600; font-size: 40px; color: #0085CF; margin-left: 40px; margin-top: 40px; cursor: default">
            {{ Title.title }}</text>
        </v-scroll-y-reverse-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <div v-show="Transition1" style="margin-left: 40px">
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 16px; color: #000000; margin: auto; margin-top: 0px; cursor: default">{{Title.program}}</text>
          </div>
        </v-scroll-y-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <div v-show="Transition1" style="margin-left: 40px">
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 16px; color: #000000; margin: auto; margin-top: 0px; cursor: default">{{Title.payment}}</text>
          </div>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <div style="margin-top: 64px;">
      <v-row>
        <v-scroll-y-transition>
          <v-card v-show="Transition2" elevation="0" style="width: clamp(200px, 90vw, 450px); margin: auto; border-radius: 20px; border: 1px solid #B8CDDF; font-family: Inter-Bold, Helvetica">
            <v-list>
              <v-list-group v-model="open[0]">
                <template v-slot:activator="{props: activatorProps}">
                  <v-list-item v-bind="activatorProps" style="font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 16px; color: #000000; margin-left: 10px">출력 방법</v-list-item>
                </template>
                <v-list-item>
                  <div>
                    <v-btn elevation="0" prepend-icon="mdi-open-in-new" text="링크 열기" varient="text" rounded style="font-weight: 700; font-size: 16px" @click="GotoWeb()"/>
                  </div>
                  <div>
                    <text :style="TitleStyle500()">{{Item.FirstTitle}}</text>
                  </div>
                  <div :style="ContentMarginTop500()">
                    <text :style="ContentStyle500()">{{Item.FirstContent1}}</text>
                  </div>
                  <div :style="ContentMarginTop500()">
                    <text :style="ContentStyle500()">{{Item.FirstContent2}}</text>
                  </div>
                  <div :style="TitleMarginTop500()">
                    <text :style="TitleStyle500()">{{Item.SecondTitle}}</text>
                  </div>
                  <div :style="ContentMarginTop500()">
                    <text :style="SubtitleStyle500()">{{Item.SecondSubtitle1}}</text>
                  </div>
                  <div :style="ContentMarginTop500()">
                    <text :style="ContentStyle500()">{{Item.SecondContent1}}</text>
                  </div>
                  <div :style="ContentMarginTop500()">
                    <text :style="ContentStyle500()">{{Item.SecondContent2}}</text>
                  </div>
                  <div :style="TitleMarginTop500()">
                    <text :style="SubtitleStyle500()">{{Item.SecondSubtitle2}}</text>
                  </div>
                  <div :style="ContentMarginTop500()">
                    <text :style="ContentStyle500()">{{Item.SecondContent3}}</text>
                  </div>
                  <div :style="ContentMarginTop500()">
                    <text :style="ContentStyle500()">{{Item.SecondContent4}}</text>
                  </div>
                  <div :style="ContentMarginTop500()">
                    <text :style="ContentStyle500()">{{Item.SecondContent5}}</text>
                  </div>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <div style="margin-top: 35px;">
      <v-row>
        <v-scroll-y-transition>
          <v-card v-show="Transition3" elevation="0" style="width: clamp(200px, 90vw, 450px); margin: auto; border-radius: 20px; border: 1px solid #B8CDDF; font-family: Inter-Bold, Helvetica">
            <v-list>
              <v-list-group v-model="open[0]">
                <template v-slot:activator="{props: activatorProps}">
                  <v-list-item v-bind="activatorProps" style="font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 16px; color: #000000; margin-left: 10px">서류 양식</v-list-item>
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
      <div style="height: calc(env(safe-area-inset-top) + 60px)"/>
    </div>
  </v-main>
  <v-main v-else-if="Width800px" :style="VMainStyle()">
    <PagesHeader800px/>
    <SearchFooter800px/>
    <div>
      <div style="margin-top: env(safe-area-inset-top)"/>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition1" style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 600; font-size: 50px; color: #0085CF; margin-left: 50px; margin-top: 50px; cursor: default">
            {{ Title.title }}</text>
        </v-scroll-y-reverse-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <div v-show="Transition1" style="margin-left: 50px">
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 20px; color: #000000; margin: auto; margin-top: 0px; cursor: default">{{Title.program}}</text>
          </div>
        </v-scroll-y-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <div v-show="Transition1" style="margin-left: 50px">
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 20px; color: #000000; margin: auto; margin-top: 0px; cursor: default">{{Title.payment}}</text>
          </div>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <div style="margin-top: 80px;">
      <v-row>
        <v-scroll-y-transition>
          <v-card v-show="Transition2" elevation="0" style="width: clamp(450px, 80vw, 650px); margin: auto; border-radius: 20px; border: 1px solid #B8CDDF; font-family: Inter-Bold, Helvetica">
            <v-list>
              <v-list-group v-model="open[0]">
                <template v-slot:activator="{props: activatorProps}">
                  <v-list-item v-bind="activatorProps" style="font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 20px; color: #000000; margin-left: 10px">출력 방법</v-list-item>
                </template>
                <v-list-item>
                  <div>
                    <v-btn elevation="0" prepend-icon="mdi-open-in-new" text="링크 열기" varient="text" rounded style="font-weight: 700; font-size: 16px" @click="GotoWeb()"/>
                  </div>
                  <div>
                    <text :style="TitleStyle800()">{{Item.FirstTitle}}</text>
                  </div>
                  <div :style="ContentMarginTop800()">
                    <text :style="ContentStyle800()">{{Item.FirstContent1}}</text>
                  </div>
                  <div :style="ContentMarginTop800()">
                    <text :style="ContentStyle800()">{{Item.FirstContent2}}</text>
                  </div>
                  <div :style="TitleMarginTop800()">
                    <text :style="TitleStyle800()">{{Item.SecondTitle}}</text>
                  </div>
                  <div :style="ContentMarginTop800()">
                    <text :style="SubtitleStyle800()">{{Item.SecondSubtitle1}}</text>
                  </div>
                  <div :style="ContentMarginTop800()">
                    <text :style="ContentStyle800()">{{Item.SecondContent1}}</text>
                  </div>
                  <div :style="ContentMarginTop800()">
                    <text :style="ContentStyle800()">{{Item.SecondContent2}}</text>
                  </div>
                  <div :style="TitleMarginTop800()">
                    <text :style="SubtitleStyle800()">{{Item.SecondSubtitle2}}</text>
                  </div>
                  <div :style="ContentMarginTop800()">
                    <text :style="ContentStyle800()">{{Item.SecondContent3}}</text>
                  </div>
                  <div :style="ContentMarginTop800()">
                    <text :style="ContentStyle800()">{{Item.SecondContent4}}</text>
                  </div>
                  <div :style="ContentMarginTop800()">
                    <text :style="ContentStyle800()">{{Item.SecondContent5}}</text>
                  </div>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <div style="margin-top: 40px;">
      <v-row>
        <v-scroll-y-transition>
          <v-card v-show="Transition3" elevation="0" style="width: clamp(450px, 80vw, 650px); margin: auto; border-radius: 20px; border: 1px solid #B8CDDF; font-family: Inter-Bold, Helvetica">
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
      <div style="height: calc(env(safe-area-inset-top) + 60px)"/>
    </div>
  </v-main>
  <v-main v-else :style="VMainStyle()">
    <PagesHeader1400px v-if="Width1400px"/>
    <PagesHeaderDesktop v-if="WidthDesktop"/>
    <Drawer v-if="WidthDesktop"/>
    <div style="margin: auto; margin-top: calc(env(safe-area-inset-top) + 30px); margin-left: 10px; width: 500px">
      <v-hover v-slot="{isHovering, props}">
        <v-dialog-transition>
          <v-btn v-bind="props" v-show="Transition1" variant="text" prepend-icon="mdi-chevron-left" rounded @click="GotoBack()" :style="BackButtonStyle(isHovering)">돌아가기</v-btn>
        </v-dialog-transition>
      </v-hover>
    </div>
    <div>
      <v-row>
        <v-scroll-y-reverse-transition>
          <text v-show="Transition1" style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 600; font-size: 60px; color: #0085CF; margin: auto; margin-top: 50px; cursor: default">
            {{ Title.title }}</text>
        </v-scroll-y-reverse-transition>
      </v-row>
      <v-row>
        <v-scroll-y-transition>
          <div v-show="Transition1" style="margin: auto">
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 20px; color: #000000; margin: auto; margin-top: 0px; cursor: default">{{Title.program}}</text>
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 25px; color: #004B74; margin: auto; margin-top: 0px; margin-right: 10px; margin-left: 10px; cursor: default">|</text>
            <text style="transition: all 0s ease-in-out; font-family: Inter-Bold, Helvetica; font-weight: 500; font-size: 20px; color: #000000; margin: auto; margin-top: 0px; cursor: default">{{Title.payment}}</text>
          </div>
        </v-scroll-y-transition>
      </v-row>
    </div>
    <div style="margin-top: 120px;">
      <v-row>
        <v-scroll-y-transition>
          <v-card v-show="Transition2" elevation="0" style="width: clamp(600px, 70vw, 800px); margin: auto; border-radius: 20px; border: 1px solid #B8CDDF; font-family: Inter-Bold, Helvetica">
            <v-list max-height="clamp(300px, 70vh, 600px)">
              <v-list-group v-model="open[0]">
                <template v-slot:activator="{props: activatorProps}">
                  <v-list-item v-bind="activatorProps" style="font-family: Inter-Bold, Helvetica; font-weight: 700; font-size: 20px; color: #000000; margin-left: 10px">출력 방법</v-list-item>
                </template>
                <v-list-item>
                  <div>
                    <v-btn elevation="0" prepend-icon="mdi-open-in-new" text="링크 열기" varient="text" rounded style="font-weight: 700; font-size: 16px" @click="GotoWeb()"/>
                  </div>
                  <div>
                    <text :style="TitleStyle1400()">{{Item.FirstTitle}}</text>
                  </div>
                  <div :style="ContentMarginTop1400()">
                    <text :style="ContentStyle1400()">{{Item.FirstContent1}}</text>
                  </div>
                  <div :style="ContentMarginTop1400()">
                    <text :style="ContentStyle1400()">{{Item.FirstContent2}}</text>
                  </div>
                  <div :style="TitleMarginTop1400()">
                    <text :style="TitleStyle1400()">{{Item.SecondTitle}}</text>
                  </div>
                  <div :style="ContentMarginTop1400()">
                    <text :style="SubtitleStyle1400()">{{Item.SecondSubtitle1}}</text>
                  </div>
                  <div :style="ContentMarginTop1400()">
                    <text :style="ContentStyle1400()">{{Item.SecondContent1}}</text>
                  </div>
                  <div :style="ContentMarginTop1400()">
                    <text :style="ContentStyle1400()">{{Item.SecondContent2}}</text>
                  </div>
                  <div :style="TitleMarginTop1400()">
                    <text :style="SubtitleStyle1400()">{{Item.SecondSubtitle2}}</text>
                  </div>
                  <div :style="ContentMarginTop1400()">
                    <text :style="ContentStyle1400()">{{Item.SecondContent3}}</text>
                  </div>
                  <div :style="ContentMarginTop1400()">
                    <text :style="ContentStyle1400()">{{Item.SecondContent4}}</text>
                  </div>
                  <div :style="ContentMarginTop1400()">
                    <text :style="ContentStyle1400()">{{Item.SecondContent5}}</text>
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
          <v-card v-show="Transition3" elevation="0" style="width: clamp(600px, 70vw, 800px); margin: auto; border-radius: 20px; border: 1px solid #B8CDDF; font-family: Inter-Bold, Helvetica">
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
      <div style="height: calc(env(safe-area-inset-top) + 60px)"/>
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
      Title: {
          title: '가족관계증명서',
          program: '보안 프로그램: X',
          payment: '출력 비용: 1,000원'
      },
      Item: {
        FirstTitle: '1. 본인 인증하기',
        FirstContent1: '공동인증서, 금융인증서, 간편인증 셋 중 하나로 본인 인증하세요.',
        FirstContent2: '그리고, 추가 정보도 같이 입력하셔야 다음 단계로 넘어갈 수 있습니다.',
        SecondTitle: '2. 출력하기',
        SecondSubtitle1: '2-1. 발급 대상자',
        SecondContent1: '본인 앞으로 증명서를 떼는 경우 그리고 직계 가족 중 한 명 앞으로 뗄 수 있습니다.',
        SecondContent2: '(출력 대상이 사망자인 경우, 증명서 상단에 폐쇄라고 써있으며, 이것이 바로 폐쇄증명서입니다.)',
        SecondSubtitle2: '2-2. 일반, 상세, 특정증명서',
        SecondContent3: '일반: 본인 및 생존한 부모, 배우자, 생존한 현재의 혼인 중의 자녀에 관한 사항',
        SecondContent4: '상세: 본인, 부모, 배우자, 모든 자녀에 관한 사항 (사망 포함)',
        SecondContent5: '특정: 선택한 특정 사람만 출력'
      },
      VMainStyle() {
        return {
          backgroundColor: "#F7FAFC"
        }
      },
      BackButtonStyle(isHovering) {
        return {
          transition: "all .1s ease-in-out",
          position: "fixed",
          fontFamily: "Inter-Bold, Helvetica",
          fontWeight: "700",
          fontSize: "16px",
          color: isHovering ? "#00A4FF" : "#004B74"
        }
      },
      TitleMarginTop500() {
        return {
          marginTop: "30px"
        }
      },
      ContentMarginTop500() {
        return {
          marginTop: "5px"
        }
      },
      TitleStyle500() {
        return {
          fontWeight: "600",
          fontSize: "30px",
          color: "#006196",
        }
      },
      SubtitleStyle500() {
        return {
          fontWeight: "700",
          fontSize: "20px",
          color: "#000000"
        }
      },
      ContentStyle500() {
        return {
          fontWeight: "400",
          fontSize: "15px",
          color: "#000000"
        }
      },
      TitleMarginTop800() {
        return {
          marginTop: "40px"
        }
      },
      ContentMarginTop800() {
        return {
          marginTop: "8px"
        }
      },
      TitleStyle800() {
        return {
          fontWeight: "600",
          fontSize: "32px",
          color: "#006196",
        }
      },
      SubtitleStyle800() {
        return {
          fontWeight: "700",
          fontSize: "20px",
          color: "#000000"
        }
      },
      ContentStyle800() {
        return {
          fontWeight: "400",
          fontSize: "16px",
          color: "#000000"
        }
      },
      TitleMarginTop1400() {
        return {
          marginTop: "50px"
        }
      },
      ContentMarginTop1400() {
        return {
          marginTop: "10px"
        }
      },
      TitleStyle1400() {
        return {
          fontWeight: "600",
          fontSize: "40px",
          color: "#006196",
        }
      },
      SubtitleStyle1400() {
        return {
          fontWeight: "700",
          fontSize: "25px",
          color: "#000000"
        }
      },
      ContentStyle1400() {
        return {
          fontWeight: "400",
          fontSize: "20px",
          color: "#000000"
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
    GotoWeb() {
      window.location.href = 'https://efamily.scourt.go.kr/pt/PtFrrpApplrInfoInqW.do?menuFg=02'
    }
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
