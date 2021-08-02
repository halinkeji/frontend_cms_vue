<template>
  <q-page class="q-pb-xl">
    <q-card
      flat
      class="bg-grey-3 q-pa-md"
      :style="{ padding: screenWidth > 1000 ? '30px 14%' : '15px 5%' }"
    >
      <div class="row q-gutter-sm text-subtitle1 text-grey">
        <q-chip color="blue" text-color="white">
          标签
        </q-chip>
        <span
          class="change cursor-pointer  q-mx-md"
          v-for="(i, index) in listS"
          :class="{ 'text-blue': currentSortS == index }"
          @click="activeS(index)"
          >{{ i.text }}
        </span>
      </div>
      <q-separator class="q-my-sm" />
      <div class="row q-gutter-sm text-subtitle1 text-grey">
        <q-chip color="blue" text-color="white">
          版本
        </q-chip>
        <span
          class="change cursor-pointer  q-mx-md"
          v-for="(i, index) in list"
          :class="{ 'text-blue': currentSort == index }"
          @click="active(index)"
          >{{ i.text }}
        </span>
      </div>
      <q-separator class="q-my-sm" />
      <div
        v-if="screenWidth > 1000"
        class="row q-gutter-sm text-subtitle1 text-grey"
      >
        <q-chip color="blue" text-color="white">
          行业
        </q-chip>
        <span
          class="change cursor-pointer q-mx-md"
          v-for="(i, index) in typeData"
          :class="{ 'text-blue': currentSortO == index }"
          @click="activeO(index)"
          >{{ i.lable }}
        </span>
      </div>
      <div v-else class="row no-wrap  text-subtitle1 text-grey">
        <q-chip color="blue" text-color="white">
          行业
        </q-chip>

        <q-scroll-area horizontal style="height: 40px;" class="full-width">
          <div class="q-gutter-xs row  no-wrap">
            <span
              class="change cursor-pointer q-mx-md col-auto"
              v-for="(i, index) in typeData"
              :class="{ 'text-blue': currentSortO == index }"
              @click="activeO(index)"
              >{{ i.lable }}
            </span>
          </div>
        </q-scroll-area>
      </div>

      <q-separator class="q-my-sm" />
    </q-card>
    <div
      class="row q-mt-lg q-col-gutter-md"
      :style="{ padding: screenWidth > 1000 ? '15px 14%' : '15px 5%' }"
    >
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 "
        v-for="(i, index) in articlesList"
      >
        <div
          class="q-pa-md"
          :class="screenWidth > 1000 ? 'messageO' : ''"
          style="border-radius:10px; border: 1px solid #ddd9d9;"
          @mouseover="activeTrueT(index)"
          @mouseleave="activeFalseT()"
        >
          <q-img
            :src="i.ca_client_image"
            v-if="code == index"
            class="imgShow"
            :ratio="1"
          />
          <q-img :src="i.ca_cover_image" :ratio="1" v-else />
          <div class="text-center q-py-lg text-h5 ellipsis">
            {{ i.ca_title }}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Screen,LocalStorage } from "quasar";
export default {
  name: "customercase",
  components: { Screen },
   meta() {
    return {
      title: this.itemData.cm_name,
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: title => `${title} - ${this.webSetName}`,
      description: { name: 'description', content: this.itemData.cm_name + 'HLFramework,哈林应用市场,哈林会员管理系统 会员管理软件 会员卡系统 会员系统 异业联盟 门店管理 商家联盟 社区团购 拓客营销-内蒙古哈林网络科技有限公司' },
      keywords: { name: 'keywords', content: this.itemData.cm_name + 'HLFramework,哈林应用市场,哈林会员管理系统,会员管理软件,会员卡系统,会员系统,异业联盟,门店管理,商家联盟,社区团购,拓客营销,内蒙古哈林网络科技有限公司' },
    };
  },
  data() {
    return {
      itemData:{},
       webSetName: "",
      thumbStyle: {
        right: "1px",
        borderRadius: "1px",
        backgroundColor: "#fff",
        width: "1px",
        opacity: 0
      },

      barStyle: {
        right: "1px",
        borderRadius: "1px",
        backgroundColor: "#fff",
        width: "1px",
        opacity: 0
      },
      code: -1,
      screenWidth: this.$q.screen.width,
      listS: [
        { text: "全部" },
        { text: "置顶" },
        { text: "热门" },
        { text: "推荐" }
      ],
      list: [{ text: "全部" }, { text: "平台版" }, { text: "单店版" }],
      typeData: [
        {
          id: 0,
          lable: "全部"
        },

        {
          id: 1,
          lable: "生活服务"
        },
        {
          id: 2,
          lable: "家政服务"
        },
        {
          id: 3,
          lable: "干洗熨烫"
        },
        {
          id: 4,
          lable: "酒店宾馆"
        },
        {
          id: 5,
          lable: "美容美发"
        },
        {
          id: 6,
          lable: "水果鲜花"
        },
        {
          id: 7,
          lable: "足浴会所"
        },
        {
          id: 8,
          lable: "美甲化妆"
        },
        {
          id: 9,
          lable: "化妆品"
        },
        {
          id: 10,
          lable: "医疗保健"
        },
        {
          id: 11,
          lable: "健身运动"
        },
        {
          id: 12,
          lable: "娱乐KTV"
        },
        {
          id: 13,
          lable: "汽车行业"
        },
        {
          id: 14,
          lable: "零售超市"
        },
        {
          id: 15,
          lable: "餐饮行业"
        },
        {
          id: 16,
          lable: "茶楼水吧"
        },
        {
          id: 17,
          lable: "服装鞋帽"
        },
        {
          id: 18,
          lable: "教育培训"
        },
        {
          id: 19,
          lable: "婚纱摄影"
        },
        {
          id: 20,
          lable: "珠宝行业"
        },
        {
          id: 21,
          lable: "3C数码"
        },
        {
          id: 22,
          lable: "机票旅游"
        }
      ],
      currentSortS: 0,
      currentSort: 0,
      currentSortO: 0,
      articlesList: []
    };
  },
  mounted() {},
  created() {
    window.addEventListener("resize", this.handleResize);
    this.getArticlesList(0, 0, 0);
     if(LocalStorage.getItem("web_site_info")){
        this.webSetName = LocalStorage.getItem("web_site_info").cs_name;
    }
  },
  computed: {},
  methods: {
    getArticlesList(val, version, industry) {
      var obj = {
        id: this.$route.query.id,
        sort: val,
        industry: industry,
        version: version
      };
      this.$store
        .dispatch("home/getArticlesList", obj)
        .then(res => {
          if (parseInt(res.code) == 200) {
            this.articlesList = res.data.list ? res.data.list : [];
            this.itemData = res.data.item
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
    handleResize(event) {
      this.screenWidth = document.documentElement.clientWidth;
    },
    activeTrue(index) {
      this.$refs.popupRef[index].show();
    },
    activeFalse(index) {
      this.$refs.popupRef[index].hide();
    },
    activeS(index) {
      this.currentSortS = index;
      this.getArticlesList(
        this.currentSortS,
        this.currentSort,
        this.currentSortO
      );
    },
    active(index) {
      this.currentSort = index;
      this.getArticlesList(
        this.currentSortS,
        this.currentSort,
        this.currentSortO
      );
    },
    activeO(index) {
      this.currentSortO = index;
      this.getArticlesList(
        this.currentSortS,
        this.currentSort,
        this.currentSortO
      );
    },
    activeTrueT(index) {
      this.code = index;
    },
    activeFalseT() {
      this.code = 999999;
    }
  }
};
</script>

<style scoped>
.messageO {
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
