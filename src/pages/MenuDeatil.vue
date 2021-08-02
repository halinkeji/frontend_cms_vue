<template>
  <q-page class="scrollTop">
    <q-img
      :ratio="16 / 9"
      style="height:200px"
      src="https://api.halin.net.cn/attachment/images/2021/04/30/image_1619767286_CPUuDu3U.jpg"
    >
      <div
        class="absolute-full text-subtitle2 flex flex-center row q-gutter-sm transparent"
      ></div>
    </q-img>

    <div
      :style="{ padding: screenWidth > 1000 ? '0.1%  17% 1% 17%' : '15px 5%' }"
    >
      <div class="row q-col-gutter-md q-pt-md">
        <div class="col-12">
          <q-card style="box-shadow: #f5f5f5  0px 0px 10px 5px;">
            <div class="text-center q-py-lg">
              <div class="text-h5 q-mt-sm">
                {{ menuData.cm_name }}
              </div>
              <div class="q-mt-md text-grey">
                <q-icon name="query_builder" class="q-mr-sm" />
                {{
                  $q_date.formatDate(
                    menuData.created_at * 1000,
                    "YYYY-MM-DD HH:mm:ss"
                  )
                }}
                <!-- <q-icon name="turned_in_not" class="q-ml-xl" />
                作者：小卢 -->
              </div>
              <q-separator class="q-my-lg q-mx-xl" />
              <div v-html="menuData.cm_content" class="q-pa-md"></div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { Screen, LocalStorage } from "quasar";
export default {
  name: "listDetail",
  components: { Screen },
  meta() {
    return {
      title: this.menuData.cm_name,
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: title => `${title} - ${this.webSetName}`,
      description: {
        name: "description",
        content:
          this.menuData.cm_name +
          "HLFramework,哈林应用市场,哈林会员管理系统 会员管理软件 会员卡系统 会员系统 异业联盟 门店管理 商家联盟 社区团购 拓客营销-内蒙古哈林网络科技有限公司"
      },
      keywords: {
        name: "keywords",
        content:
          this.menuData.cm_name +
          "HLFramework,哈林应用市场,哈林会员管理系统,会员管理软件,会员卡系统,会员系统,异业联盟,门店管理,商家联盟,社区团购,拓客营销,内蒙古哈林网络科技有限公司"
      }
    };
  },
  data() {
    return {
      webSetName: "",
      menuData: {},
      articlesUp: {},
      articlesDown: {},
      screenWidth: this.$q.screen.width
    };
  },
  mounted() {},
  created() {
    this.getAbout(this.$route.query.id);
    window.addEventListener("resize", this.handleResize);
    if (LocalStorage.getItem("web_site_info")) {
      this.webSetName = LocalStorage.getItem("web_site_info").cs_name;
    }
  },
  computed: {},
  methods: {
    // 获取单条
    getAbout(val) {
      this.$store.dispatch("home/getMenuList", val).then(res => {
        if (parseInt(res.code) == 200) {
          this.menuData = res.data ? res.data.item : {};
          document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
      });
    },
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
.picture {
  transition: all 0.6s;
}
.picture:hover {
  transform: scale(1.4);
}
</style>
