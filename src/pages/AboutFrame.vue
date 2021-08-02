<template>
  <q-page>
    <q-img
      :style="{
        height:
          screenWidth > 1000
            ? $q.screen.height * 0.4 + 'px'
            : $q.screen.height * 0.65 + 'px'
      }"
      src="https://api.halin.net/attachment/images/2021/05/10/image_1620650493_O329fol3.jpg"
    >
      <div
        class="absolute-full row transparent text-subtitle2 flex flex-center text-center"
      >
        <div
          class="col-12"
          :class="
            screenWidth < 1000
              ? 'text-h5 q-mt-md text-bold'
              : 'text-h2  q-mt-xl text-bold'
          "
        >
          HL Framework V 1.0
        </div>
        <div class="col-12">
          <!-- 两种限制方式 一种是在移动端时拉长背景图 另一种是加滚动区域 -->
          <!-- <q-scroll-area
            :style="{
              height: $q.screen.height * 0.2 + 'px'
            }"
          > -->
          HLFramework是哈林科技自主研发的一套微服务集群式框架体系，专注于多元化业务解决方案，支持应用化、插件化、组件化，适用于移动互联API服务器、物联网(IOT)、高性能WEB服务、高负载压力等应用场景。系统采用当下主流开发模式，前后端独立式开发。后端采用yii2.0框架，前端采用Quasar框架。力求打造一个开发生态体系，系统可实现一次开发，多产品终端覆盖。支持PC端WEB应用、桌面版安装应用程序、H5移动端应用、安卓Android
          APP应用、苹果IOSAPP应用、微信公众号、微信、支付宝、抖音小程序等多种终端应用。
          <!-- </q-scroll-area> -->
        </div>

        <div class="row col-12 q-mt-sm justify-center">
          <div :class="screenWidth < 1000 ? 'col-6' : 'col-2'" class=" q-px-md">
            <q-btn
              unelevated
              color="blue"
              label="免费下载"
              class="full-width"
              type="a"
              href="https://www.halin.net/HLFramework.zip"
              target="__blank"
            />
          </div>
          <div :class="screenWidth < 1000 ? 'col-6' : 'col-2'" class=" q-px-md">
            <q-btn
              unelevated
              color="white"
              text-color="blue"
              label="查看文档"
              class="full-width"
              type="a"
              href="https://wiki.halin.net/"
              target="__blank"
            />
          </div>
        </div>
      </div>
    </q-img>

    <div
      :style="{ padding: screenWidth > 1000 ? '80px 17%' : '40px 5%' }"
      class="bg-grey-3"
    >
      <div class="text-center text-h5">
        框架优势
      </div>
      <div
        class="row q-mt-sm"
        :class="screenWidth > 1000 ? ' q-col-gutter-xl' : 'q-col-gutter-md'"
      >
        <div class="col-md-6 col-12" v-for="i in jiagou">
          <q-card
            flat
            bordered
            class="q-pb-lg"
            :style="{ height: screenWidth > 1000 ? '280px' : '' }"
          >
            <q-img :src="i.pic" />
            <div class="q-px-lg q-mt-md" style="text-indent:2em">
              {{ i.box }}
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <div :style="{ padding: screenWidth > 1000 ? '80px 17%' : '40px 5%' }">
      <div class="text-center text-h5">
        技术栈
      </div>
      <div class="text-grey text-center q-mt-lg">
        前后端分离式开发
      </div>
      <div
        class="row q-pt-xl"
        :class="screenWidth > 1000 ? ' q-col-gutter-xl' : 'q-col-gutter-md'"
      >
        <div class="col-md-6 col-12">
          <div
            class="row active bg-grey-3 q-px-md q-py-lg"
            :style="{ height: screenWidth > 1000 ? '235px' : '' }"
          >
            <div class="col-md-2 col-3 text-center">
              <q-icon name="devices" color="blue" size="50px" />
            </div>
            <div class="col-md-10 col-9">
              <div class="text-subtitle1">
                前端
              </div>
              <div class="text-grey-8 q-mt-sm">
                <span class="text-blue">VUE技术栈</span>
                <p class="q-mb-none">Quasar VUE 组件</p>
                <p class="q-mb-none">
                  一次开发可支持WEB端网页、H5移动端、桌面版安装程序、卓Android
                  APP应用、苹果IOS APP应用
                </p>
                <p class="q-mb-none">也可集成使用其他VUE 前端UI</p>
                <p class="q-mb-none">支持VUE技术栈下的所有优秀前端组件</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div
            class="row active bg-grey-3 q-px-md q-py-lg"
            :style="{ height: screenWidth > 1000 ? '235px' : '' }"
          >
            <div class="col-md-2 col-3 text-center">
              <q-icon name="dvr" color="blue" size="50px" />
            </div>
            <div class="col-md-10 col-9">
              <div class="text-subtitle1">
                后端
              </div>
              <div class="text-grey-8 q-mt-sm">
                <span class="text-blue">PHP + MYSQL </span>
                <p class="q-mb-none">采用优秀的YII2.0框架</p>
                <p class="q-mb-none">PHP 7.4 以上，MYSQL 5.6 以上</p>
                <p class="q-mb-none">RESTful API 接口</p>
                <p class="q-mb-none">集成Redis 、Swoole</p>
                <p class="q-mb-none">支持分布式部署</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :style="{ padding: screenWidth > 1000 ? '80px 17%' : '40px 5%' }"
      class="bg-grey-3"
    >
      <div class="text-center text-h5">
        框架特色
      </div>
      <div class="row q-col-gutter-xl q-pt-xl">
        <div class="col-md-4 col-12" v-for="i in feature">
          <q-card flat class="text-center bg-white q-py-lg">
            <q-icon :name="i.icon" color="blue" size="90px" />
            <div class="text-h6 ellipsis">
              {{ i.title }}
            </div>
          </q-card>
          <div class="q-mt-lg">
            {{ i.box }}
          </div>
        </div>
      </div>
    </div>
    <div :style="{ padding: screenWidth > 1000 ? '80px 17%' : '40px 5%' }">
      <div class="text-center text-h5">
        应用终端
      </div>
      <div
        class=" text-center row q-pt-xl"
        :class="screenWidth > 1000 ? ' q-col-gutter-xl' : 'q-col-gutter-md'"
      >
        <div class="col-md-4 col-12" v-for="i in app">
          <div class="messageO q-pa-md text-h6">
            <q-icon :name="i.icon" :color="i.color" size="40px" />
            {{ i.title }}
          </div>
        </div>
      </div>
    </div>

    <div :style="{ padding: screenWidth > 1000 ? '60px 17%' : '40px 5%' }">
      <div class="text-center text-h5">
        公共功能模块
      </div>
      <div
        class=" text-center row q-pt-xl"
        :class="screenWidth > 1000 ? ' q-col-gutter-md' : 'q-col-gutter-sm'"
      >
        <div class="col-md-3 col-12" v-for="i in publicApply">
          <div class="messageO q-pa-sm text-h6">
            {{ i.title }}
          </div>
        </div>
      </div>
    </div>
    <div
      :style="{ padding: screenWidth > 1000 ? '80px 17%' : '40px 5%' }"
      class="bg-grey-3"
    >
      <div class="text-center text-h5">
        适用场景
      </div>
      <div class="q-mt-lg text-grey text-center">
        框架的适用场景
      </div>
      <div
        class="row q-pt-xl"
        :class="screenWidth > 1000 ? ' q-col-gutter-lg' : 'q-col-gutter-md'"
      >
        <div class="col-md-4 col-12 " v-for="i in scenes">
          <q-card flat class="bg-white bg-white q-pb-md">
            <div class="bg-blue q-pa-md items-center text-white row">
              <div class="col-9">
                <div class="text-h6 text-bold">
                  {{ i.title }}
                </div>
                <div class="text-grey-1">
                  {{ i.intro }}
                </div>
                <div
                  class="q-mt-sm bg-white"
                  style="width:50px;height:2px"
                ></div>
              </div>
              <div class="col-3 text-right">
                <q-icon :name="i.icon" size="50px"></q-icon>
              </div>
            </div>
            <div class="q-px-md q-py-sm row" v-if="false">
              <div class="col-1">
                <q-icon name="fiber_manual_record" color="green"></q-icon>
              </div>
              <div class="col-11">
                <div class="text-subtitle1">
                  {{ i.list }}
                </div>
                <div class="text-grey">
                  {{ i.about }}
                </div>
              </div>
            </div>
            <div class="q-px-md q-py-sm row" v-if="false">
              <div class="col-1">
                <q-icon name="fiber_manual_record" color="cyan"></q-icon>
              </div>
              <div class="col-11">
                <div class="text-subtitle1">
                  {{ i.listOne }}
                </div>
                <div class="text-grey">
                  {{ i.aboutOne }}
                </div>
              </div>
            </div>
            <div class="q-px-md q-py-sm row" v-if="false">
              <div class="col-1">
                <q-icon name="fiber_manual_record" color="purple"></q-icon>
              </div>
              <div class="col-11">
                <div class="text-subtitle1">
                  {{ i.listTwo }}
                </div>
                <div class="text-grey">
                  {{ i.aboutTwo }}
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <div :style="{ padding: screenWidth > 1000 ? '2% 12%' : '40px 5%' }">
      <div class="text-center text-h5">
        应用产品
      </div>
      <div
        class="row q-pt-xl"
        :class="screenWidth > 1000 ? ' q-col-gutter-lg' : 'q-col-gutter-md'"
      >
        <div class="col-md-3 col-12" v-for="i in application">
          <div class="text-center q-py-lg messageO">
            <div class="text-center">
              <img :src="i.pic" alt="" style="width:70px;height:70px" />
            </div>
            <q-separator class="q-mx-xl q-my-md" />
            <div class="text-h6">
              {{ i.text }}
            </div>
            <div class="text-grey q-mt-sm">
              {{ i.platform }}
            </div>
            <div class="q-mt-lg">
              <q-btn outline color="primary" label="查看详情" padding="xs lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="q-mt-lg ">
      <div class="text-h5 text-center q-py-lg">
        立即安装
      </div>

      <q-img
        :ratio="16 / 9"
        style="height:200px"
        src="https://api.halin.net.cn/attachment/images/2021/04/30/image_1619769156_posoOqO6.jpg"
      >
        <div
          class="absolute-full text-subtitle2 flex flex-center row q-gutter-sm "
        >
          <div class="col-4 col-md-2">
            <q-btn
              class="full-width"
              unelevated
              color="blue"
              type="a"
              href="https://www.halin.net/HLFramework.zip"
              target="__blank"
              label="免费下载"
            />
          </div>
          <div class="col-4 col-md-2">
            <q-btn
              class="full-width"
              unelevated
              color="white"
              text-color="blue"
              label="安装教程"
              type="a"
              href="https://wiki.halin.net/"
              target="__blank"
            />
          </div>
        </div>
      </q-img>
    </div>
  </q-page>
</template>

<script>
import { Screen, LocalStorage } from "quasar";
export default {
  components: { Screen },
  name: "fixed",
  meta() {
    return {
      title: "HLFramework 哈林框架系统 YII2.0 前后端分离式开发架构",
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: title => `${title}`,
      description: {
        name: "description",
        content:
          "哈林,HLFramework,哈林应用市场,哈林会员管理系统 会员管理软件 会员卡系统 会员系统 异业联盟 门店管理 商家联盟 社区团购 拓客营销-内蒙古哈林网络科技有限公司"
      },
      keywords: {
        name: "keywords",
        content:
          "哈林,HLFramework,哈林应用市场,哈林会员管理系统,会员管理软件,会员卡系统,会员系统,异业联盟,门店管理,商家联盟,社区团购,拓客营销,内蒙古哈林网络科技有限公司"
      }
    };
  },
  data() {
    return {
      webSetName: "",
      screenWidth: this.$q.screen.width,
      scenes: [
        {
          title: "移动互联网API服务",
          intro: "Mobile Internet API Service",
          icon: "las la-laptop",
          list: "微信商城",
          about: "小程序+公众号一体化微信商城",
          listOne: "积分商城",
          aboutOne: "小程序+公众号一体化积分商城",
          listTwo: "智慧零售",
          aboutTwo: "哈林智慧零售连锁版"
        },
        {
          title: "物联网（IOT）",
          intro: "Internet of Things",
          icon: "las la-rss-square",
          list: "自助点餐",
          about: "实现无需排队，更快捷",
          listOne: "智慧餐饮",
          aboutOne: "哈林智慧餐饮单店版",
          listTwo: "餐饮连锁",
          aboutTwo: "哈林智慧餐饮连锁版"
        },
        {
          title: "微服务",
          intro: "Mirco Service",
          icon: "las la-bezier-curve",
          list: "更多优惠",
          about: "移动化会员体系",
          listOne: "美业连锁",
          aboutOne: "哈林智慧美业连锁版",
          listTwo: "智慧美业",
          aboutTwo: "哈林智慧美业单店版"
        },
        {
          title: "高性能Web服务",
          intro: "High-performance web services",
          icon: "las la-sitemap",
          list: "加油服务",
          about: "注册会员更多优惠",
          listOne: "加油站",
          aboutOne: "哈林智慧油卡加油站",
          listTwo: "油卡",
          aboutTwo: "注册油卡会员"
        },
        {
          title: "游戏服务器",
          intro: "Game server",
          icon: "las la-gamepad",
          list: "加油服务",
          about: "注册会员更多优惠",
          listOne: "加油站",
          aboutOne: "哈林智慧油卡加油站",
          listTwo: "油卡",
          aboutTwo: "注册油卡会员"
        },
        {
          title: "在线聊天系统",
          intro: "Online chat system",
          icon: "las la-comment-dots",
          list: "加油服务",
          about: "注册会员更多优惠",
          listOne: "加油站",
          aboutOne: "哈林智慧油卡加油站",
          listTwo: "油卡",
          aboutTwo: "注册油卡会员"
        }
      ],
      feature: [
        {
          icon: "las la-share-alt",
          title: "应用化",
          box:
            "支持一键自动化创建应用，配合框架自有公共功能，可敏捷快速的开发自己的应用软件，避免重复造轮子，开发人员只需集中精力专注于业务部分的开发，大大提高开发效率节约开发成本。"
        },
        {
          icon: "las la-stream",
          title: "插件化",
          box:
            "支持一键智能化创建插件，也可下载使用公开的插件，，企业级应用，自由扩展开发，理论上没有开发不了的功能。"
        },
        {
          icon: "las la-cogs",
          title: "组件化",
          box:
            "业务模块之间最大化高内聚低耦合，懒加载组件机制，继承了YII2.0优秀的性能机制跟安全机制。"
        }
      ],
      app: [
        {
          icon: "las la-chalkboard",
          title: "PC端WEB应用",
          color: "cyan"
        },
        {
          icon: "las la-tv",
          title: "桌面版安装应用程序",
          color: "yellow"
        },
        {
          icon: "las la-mobile",
          title: "H5移动端应用",
          color: "green"
        },
        {
          icon: "lab la-android",
          title: "安卓Android APP应用",
          color: "pink"
        },
        {
          icon: "lab la-apple",
          title: "苹果IOS",
          color: "red"
        },
        {
          icon: "lab la-weixin",
          title: "微信公众号",
          color: "green"
        },
        {
          icon: "lab la-weixin",
          title: "微信小程序",
          color: "green"
        },
        {
          icon: "las la-comment",
          title: "企业微信",
          color: "blue"
        },
        {
          icon: " perm_device_information",
          title: "支付宝小程序",
          color: "primary"
        },
        {
          icon: "perm_device_information",
          title: "抖音小程序",
          color: "purple "
        },
        {
          icon: "settings_ethernet",
          title: "更多应用",
          color: "black"
        }
      ],
      jiagou: [
        {
          pic:
            "https://api.halin.net/attachment/images/2021/05/10/image_1620648974_u3AGgvk7.png",
          box:
            "基于目前流行的WEB2.0的B/S架构（YII2+VUE），拥有成熟、稳定、安全的的技术解决方案。免费开源的，人人都可以下载使用，支持在线升级和安装模块。提供源码、数据字典、设计文档、配套说明文档，可在项目中反复使用。二次开发简单，提供完善的接口函数调用说明、开放接口、开放源码、开放数据库结构设计。 "
        },
        {
          pic:
            "https://api.halin.net/attachment/images/2021/05/10/image_1620648979_QTDdit05.png",
          box:
            "能快速的将传统单企业应用转化成saas多租户模式，支持大数据存储高并发访问，支持无限水平扩展存储服务器、应用服务器数量。支持多个数据库或多类型数据库，每个模块可以是不同数据库。共用同一套业务逻辑与规范，一次开发多次使用。为中小企业打造一体化自主软件产品集群保驾护航。"
        }
      ],
      application: [
        {
          pic: "http://wx.halin.org.cn/addons/hl_mmsystemonestore/icon.jpg",
          text: "哈林单店会员卡",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2oshici/icon.jpg",
          text: "哈林智慧时次卡单店版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2olslingshou/icon.jpg",
          text: "哈林智慧零售连锁版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_mmsystemunionstore/icon.jpg",
          text: "哈林异业联盟会员卡",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2o2msunionstore/icon.jpg",
          text: "哈林加盟店版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2olsfuzhuang/icon.jpg",
          text: "哈林智慧服装连锁版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2olingshou/icon.jpg",
          text: "哈林智慧零售单店版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2olsshici/icon.jpg",
          text: "哈林智慧时次卡连锁版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_mmsystemcompanystore/icon.jpg",
          text: "哈林企业版会员卡",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_mmsystemcompanystore/icon.jpg",
          text: "哈林企业版会员卡",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2olsmeiye/icon.jpg",
          text: "哈林智慧美业连锁版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2omeiye/icon.jpg",
          text: "哈林智慧美业单店版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2ocanyin/icon.jpg",
          text: "哈林智慧餐饮单店版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2olscanyin/icon.jpg",
          text: "哈林智慧餐饮连锁版",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_mmsystemchainstore/icon.jpg",
          text: "哈林连锁店会员卡",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_mmsystemgasolinecard/icon.jpg",
          text: "哈林智慧油卡加油站",
          platform: "平台支持：H5，小程序，微信公众号"
        },
        {
          pic: "http://wx.halin.org.cn/addons/hl_o2ofuzhuang/icon.jpg",
          text: "哈林智慧服装单店版",
          platform: "平台支持：H5，小程序，微信公众号"
        }
      ],
      publicApply: [
        { title: "SS0 单点登录" },
        { title: "Oauth用户授权服务" },
        { title: "RBAC 权限管理" },
        { title: "自动化设计应用" },
        { title: "自动化设计插件" },
        { title: "富文本编辑器" },
        { title: "丰富的表单组件" },
        { title: "文件上传组件" },
        { title: "文档管理系统" },
        { title: "企业管理系统" },
        { title: "H5移动端示例" },
        { title: "多终端开发" },
        { title: "SAAS 部署机制" },
        { title: "Redis 缓存机制" },
        { title: "Swoole 协程机制" },
        { title: "Socket 协议机制" }
      ]
    };
  },
  mounted() {},
  created() {
    window.addEventListener("resize", this.handleResize);
    if (LocalStorage.getItem("web_site_info")) {
      this.webSetName = LocalStorage.getItem("web_site_info").cs_name;
    }
  },
  computed: {},
  methods: {
    handleResize(event) {
      this.screenWidth = document.documentElement.clientWidth;
    }
  }
};
</script>

<style scoped>
.change:hover {
  color: #2196f3;
}
.active {
  border: 2px solid #f2f2f2;
}
.active:hover {
  border: 2px solid #2196f3;
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
</style>
