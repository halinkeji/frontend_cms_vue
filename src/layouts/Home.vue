<template>
  <q-layout view="lHh Lpr lFf">
    <!-- 顶部导航 -->
    <q-header class="bg-blue-10" style="height:50px" v-if="screenWidth > 1000">
      <div class="row text-white items-center q-px-xl" style="height:50px">
        <img
          :src="setting.cs_logo"
          style="width:60px;height:50px"
          @click="$router.push({ name: 'cmsIndex' })"
        />
        <div class="col-md-1 col-2">
          <div
            class="text-h6 q-ml-sm text-white"
            @click="$router.push({ name: 'cmsIndex' })"
          >
            {{ setting.cs_name }}
          </div>
        </div>
        <div
          class="text-body2 q-ml-xl cursor-pointer change"
          @click="$router.push({ name: 'cmsIndex' })"
        >
          首页
        </div>
        <div
          class="text-body2 q-ml-xl cursor-pointer change"
          v-for="(i, index) in topList"
          @mouseover="activeTrue(index)"
        >
          {{ i.text }}
          <q-popup-proxy
            ref="popupRef"
            @mouseleave="activeFalse(index)"
            :offset="[15, 15]"
            v-if="index == 0"
          >
            <div class="row" style="width:900px">
              <div class="col-3 q-px-lg q-pt-lg text-center cursor-pointer box">
                <q-icon name="las la-laptop-code" color="blue" size="100px" />
                <div class="text-subtitle1 q-mt-md">
                  框架下载
                </div>
                <div class="text-grey q-mt-md ellipsis-2-lines">
                  文件体积较小，简洁方便，执行后可自动从云服务上下载完整源码
                </div>
                <div>
                  <q-btn
                    unelevated
                    color="blue"
                    label="了解框架"
                    padding="xs xl"
                    :to="{
                      name: 'aboutFrame'
                    }"
                    class="q-mt-md"
                  />
                  <q-btn
                    outline
                    color="blue"
                    label="免费下载"
                    padding="xs xl"
                    type="a"
                    href="https://www.halin.net/HLFramework.zip"
                    target="__blank"
                    class="q-mt-md"
                  />
                </div>
              </div>
              <div class="col-9">
                <q-list bordered separator>
                  <q-item
                    class="q-py-lg q-pl-xl cursor-pointer box"
                    v-for="(i, k) in aboutFrameData"
                    :key="k"
                    :to="{
                      name: 'aboutFrame'
                    }"
                  >
                    <q-item-section avatar>
                      <q-img :src="i.caf_cover_image" :ratio="1" />
                    </q-item-section>
                    <q-item-section style="width:600px">
                      <q-item-label>{{ i.caf_name }}</q-item-label>
                      <q-item-label caption lines="2" class="q-pt-sm">{{
                        i.caf_description
                      }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-popup-proxy>
        </div>
        <div
          class="row"
          v-for="(item, index) in topMenuData"
          @click="lookDownArticler(item)"
        >
          <div class="q-ml-xl cursor-pointer change">
            {{ item.cm_name }}
          </div>
        </div>
        <div class="col-md col-12">
          <div class="row float-right cursor-pointer">
            <div class="change" @click="goLogin" v-if="!loginStatus">登录</div>
            <div class="change q-mx-sm" @click="goPlatfrom" v-if="loginStatus">
              控制台
            </div>
            <div
              class="change q-mx-sm"
              @click="logoutAccount"
              v-if="loginStatus"
            >
              注销
            </div>
          </div>
        </div>
      </div>
    </q-header>
    <q-header class="bg-blue-10" style="height:50px" v-else>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="drawer = !drawer"> </q-btn>
        <img
          :src="setting.cs_logo"
          style="width:60px;height:50px"
          @click="$router.push({ name: 'cmsIndex' })"
        />
        <q-toolbar-title>
          <span
            class="text-h6 q-ml-sm text-white"
            @click="$router.push({ name: 'cmsIndex' })"
          >
            {{ setting.cs_name }}
          </span>
        </q-toolbar-title>
        <div class="change" @click="goLogin" v-if="!loginStatus">登录</div>
        <div class="change q-mx-sm" @click="goPlatfrom" v-if="loginStatus">
          控制台
        </div>
        <div class="change q-mx-sm" @click="logoutAccount" v-if="loginStatus">
          注销
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area class="fit">
        <q-list class="text-subtitle1 text-center">
          <div class="q-py-md bg-blue-10 text-white" @click="drawer = false">
            <q-icon name="close" size="18px" /> 点击关闭
          </div>

          <q-separator />
          <q-item
            clickable
            v-ripple
            @click="$router.push({ name: 'cmsIndex' })"
          >
            <q-item-section>
              首页
            </q-item-section>
          </q-item>
          <q-separator />

          <q-item
            clickable
            v-ripple
            @click="$router.push({ name: 'aboutFrame' })"
          >
            <q-item-section>
              关于框架
            </q-item-section>
          </q-item>
          <q-separator />
          <template v-for="(item, index) in topMenuData">
            <q-item :key="index" clickable v-ripple>
              <q-item-section @click="lookDownArticler(item)">
                {{ item.cm_name }}
              </q-item-section>
            </q-item>
            <q-separator />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="bg-blue-10 text-white" v-if="screenWidth > 1000">
      <div class="row" style="padding:40px 18%">
        <div class="col-7">
          <div class="row">
            <div v-for="item in bottomMenuData" class="col-3">
              <div class="text-h5" @click="goLink(item)">
                {{ item.cm_name }}
              </div>
              <q-separator class="q-my-md" style="width:100px" color="grey" />
              <div
                class="text-white"
                v-for="(value, index) in item.cmsArticles"
                v-if="index < 5"
              >
                <div
                  class="q-mt-sm"
                  @click="
                    $router.push({ name: 'detail', query: { id: value.id } })
                  "
                >
                  <span class="cursor-pointer change">
                    {{ value.ca_title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="text-h5 text-center">
            {{ setting.cs_name }}
          </div>
          <div class="row text-right q-mt-lg">
            <div class="col text-center">
              <img
                :src="setting.cs_wx_image"
                style="height:100px;width:100px"
              />
              <div class="text-subtitle1 q-mt-sm">
                扫码关注微信公众号
              </div>
            </div>
            <div class="col text-center">
              <img
                :src="setting.cs_applets_image"
                style="height:100px;width:100px"
              />
              <div class="text-subtitle1 q-mt-sm">
                扫码进入小程序
              </div>
            </div>
          </div>
        </div>
      </div>
      <q-separator class="q-my-md" color="white" style="margin:0 18%" />
      <div
        class="text-center q-py-lg text-white"
        v-html="setting.cs_copyright"
      ></div>
    </div>
    <div class="bg-blue-10 text-white" v-else>
      <div class="row text-center" style="padding:10px 5%">
        <div class="col">
          <div class="text-subtitle1">关注我们</div>
          <img
            :src="setting.cs_wx_image"
            class="q-mt-sm"
            alt=""
            style="width:100px;height:100px"
          />
          <div class="q-mt-sm text-white">
            扫码关注微信公众号
          </div>
        </div>
        <div class="col">
          <div class="text-subtitle1">小程序</div>
          <img
            :src="setting.cs_applets_image"
            class="q-mt-sm"
            alt=""
            style="width:100px;height:100px"
          />
          <div class=" q-mt-sm">
            扫码进入小程序
          </div>
        </div>
      </div>
      <q-separator class="q-my-xs" color="white" />
      <div class="q-px-md q-pb-md" v-for="item in bottomMenuData">
        <div
          class="text-subtitle1 q-mt-md"
          @click="
            $router.push({
              name: 'list',
              query: { id: item.id }
            })
          "
        >
          {{ item.cm_name }}
        </div>
        <div class="row q-pt-sm text-blue-grey-3 q-gutter-sm">
          <div
            v-for="(value, index) in item.cmsArticles"
            v-if="index < 5"
            @click="$router.push({ name: 'detail', query: { id: value.id } })"
          >
            {{ value.ca_title }}
          </div>
        </div>
      </div>
      <q-separator class="q-my-xs" color="white" />
      <div
        class="text-center q-pa-lg text-white"
        v-html="setting.cs_copyright"
      ></div>
    </div>
  </q-layout>
</template>

<script>
import { LocalStorage } from "quasar";
import { removeAllCookies, removeAllLocalStorage } from "@/utils/common";
export default {
  name: "MainLayout",
  components: {},

  data() {
    return {
      webSetName: "",
      screenWidth: this.$q.screen.width,
      topMenuData: [], // 顶部菜单设置
      bottomMenuData: [], //底部菜单数据
      setting: {}, //静态数据设置
      drawer: false,
      loginStatus: false,
      currentSort: 0,
      topList: [{ text: "关于框架" }],
      aboutFrameData: [
        {
          caf_cover_image:
            "https://api.halin.net.cn/attachment/images/2021/05/10/image_1620638234_K943oM4D.png",
          caf_name: " 自主知识产权 ",
          caf_description:
            "HLFramework，是哈林科技自主研发的一套微服务集群式框架体系 "
        },
        {
          caf_cover_image:
            "https://api.halin.net.cn/attachment/images/2021/05/10/image_1620639459_zAo0Wywo.png",
          caf_name: " 系统开发架构 ",
          caf_description:
            " 框架基于目前流行的WEB2.0的B/S架构（YII2+VUE），拥有成熟、稳定、安全的的技术解决方案。"
        },
        {
          caf_cover_image:
            "https://api.halin.net.cn/attachment/images/2021/05/10/image_1620639695_K877LR8M.png",
          caf_name: " 应用自动化创建 ",
          caf_description:
            " 框架可以自动化快速创建微应用、快速开发微服务微应用集群、企业级的应用提供强大的开发架构 "
        },
        {
          caf_cover_image:
            "https://api.halin.net.cn/attachment/images/2021/05/10/image_1620639946_G85fBEEv.png",
          caf_name: "  快速极简敏捷开发引擎  ",
          caf_description:
            " 完善的文档系统、帮助手册、实用型的公共功能模块、丰富的函数库和开发包。 "
        }
      ]
    };
  },
  created() {
    this.getStaticData();
    let loggedIn = LocalStorage.getItem("loggedIn");
    if (loggedIn) {
      this.loginStatus = loggedIn;
    }
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    getStaticData() {
      this.$store
        .dispatch("home/getStatic")
        .then(res => {
          if (parseInt(res.code) == 200) {
            this.topMenuData = res.data ? res.data.topData : [];
            this.bottomMenuData = res.data ? res.data.bottomData : [];
            this.setting = res.data.setting ? res.data.setting : {};
            LocalStorage.set("web_site_info", this.setting);

            if (this.setting) {
              if (this.setting.cs_name) {
                this.webSetName = this.setting.cs_name;
              }
            }
          }
        })
        .catch(error => {
          this.$q.notify({
            message: "失败",
            icon: "ion-close-circle-outline",
            timeout: 500,
            position: "top-right",
            caption: "操作失败",
            color: "red"
          });
        });
    },
    logoutAccount() {
      this.$q.loading.show({
        message: "正在保存数据,请稍后..."
      });

      removeAllLocalStorage();
      removeAllCookies();

      setTimeout(() => {
        this.$q.loading.hide();
        let loggedIn = LocalStorage.getItem("loggedIn");
        if (loggedIn) {
          this.loginStatus = loggedIn;
        }
        if (this.$route.name == "cmsIndex") {
          location.reload();
        } else {
          this.$router.push({ name: "cmsIndex" });
        }
      }, 1500);
    },

    goLogin() {
      let authConfig = LocalStorage.getItem("authConfig");
      const oauth_url =
        authConfig.login_uri +
        "/login?response_type=code&appId=" +
        authConfig.appId +
        "&redirect_uri=" +
        authConfig.redirect_uri;

      window.location.href = oauth_url;
      // return oauth_url;
    },
    goPlatfrom() {
      let authConfig = LocalStorage.getItem("authConfig");
      if (authConfig && authConfig.platform_url) {
        window.location.href = authConfig.platform_url;
        return false;
      }
    },
    activeTrue(index) {
      this.$refs["popupRef"][index].show();
    },
    activeFalse(index) {
      this.$refs["popupRef"][index].hide();
    },
    see(e) {
      window.location.href = e;
    },
    lookDownArticler(val) {
      if (parseInt(val.cm_type) == 3) {
        this.see(val.cm_external_url);
      } else if (parseInt(val.cm_type) == 1) {
        if (val.cm_tag == "1") {
          this.$router.push({ name: "introduce", query: { id: val.id } });
        } else if (val.cm_tag == "2") {
          this.$router.push({ name: "plugin", query: { id: val.id } });
        } else if (val.cm_tag == "6") {
          this.$router.push({ name: "customercase", query: { id: val.id } });
        } else {
          this.$router.push({
            name: "list",
            query: { id: val.id }
          });
        }
      } else if (parseInt(val.cm_type) == 2) {
        this.$router.push({
          name: "columnDetail",
          query: { id: val.id }
        });
      }
    },
    handleResize(event) {
      this.screenWidth = document.documentElement.clientWidth;
    },
    goLink(i) {
      if (parseInt(i.cm_type) == 1) {
        this.$router.push({
          name: "list",
          query: { id: i.id }
        });
        return false;
      }
      if (parseInt(i.cm_type) == 2) {
        this.$router.push({
          name: "menuDeatil",
          query: { id: i.id }
        });
        return false;
      }
      if (parseInt(i.cm_type) == 3 && i.cm_external_url) {
        window.location.href = i.cm_external_url;
      }
    }
  }
};
</script>

<style scoped>
.change:hover {
  color: #2196f3;
}
.box:hover {
  background: #f2f2f2;
}
.new {
  padding: 1px;
  width: 26px;
  height: 14px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  line-height: 12px;
}
.slow:hover {
  color: #2196f3;
  transition: 0.3s linear;
}
.topBg:hover {
  background: rgb(46, 48, 189);
}
.picture {
  transition: all 0.6s;
}
.picture:hover {
  transform: scale(1.1);
}
.introduce:hover {
  margin-top: -10px;
}
.messageO {
  border: 1px solid #ddd9d9;
  border-radius: 5px;
  transition: box-shadow 0.3s, margin-top 0.3s, transform 0.3s;
}
.messageO:hover {
  box-shadow: #dbdbdb 0px 0px 25px 5px;
  border: 1px solid #ddd9d9;
  border-radius: 5px;
  margin-top: -5px;
}
.swiper-pagination-clickable >>> .swiper-pagination-bullet {
  background: #fff;
  opacity: 0.4;
  width: 25px;
  height: 5px;
  border-radius: 5px;
}
.swiper-pagination-clickable >>> .swiper-pagination-bullet-active {
  background: #fff;
  opacity: 0.8;
  width: 25px;
  border-radius: 5px;
}
</style>
