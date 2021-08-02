<template>
  <q-page class="bg-grey-3 scrollTop">
    <q-img
      :ratio="16 / 9"
      style="height:200px"
      :src="menuData.cm_banners_ad"
      v-if="menuData.cm_banners_ad"
    >
      <div
        class="absolute-full text-subtitle2 flex flex-center row q-gutter-sm transparent"
      >
        <div
          class=" text-h4 q-pb-lg absolute-center  text-white"
          style="left: 25%;"
          v-if="menuData.cm_banners_ad"
        >
          {{ menuData.cm_name }}
        </div>
        <div class="row justify-center text-h4 q-py-lg  text-white" v-else>
          <div class="col-md-6 col-8">
            {{ menuData.cm_name }}
          </div>
        </div>
      </div>
    </q-img>

    <div :style="{ padding: screenWidth > 1000 ? '15px 17%' : '15px 5%' }">
      <div
        class="bg-white q-pa-md"
        style="box-shadow: #f0efef  0px 0px 10px 5px;"
      >
        <div class="row">
          <div
            class="col-md-3 col-12 q-mt-sm q-pr-md"
            :style="{
              borderRight: screenWidth > 1000 ? '1px solid #e0e0e0' : ''
            }"
          >
            <div>
              <div class="text-subtitle1 text-bold q-pl-sm ellipsis">
                <q-icon name="las la-bars" class="q-mr-sm" />
              </div>
              <q-list class="q-mt-md">
                <q-item
                  clickable
                  v-ripple
                  v-for="(item, index) in menuList"
                  :key="index"
                  v-if="item.cm_tag != 5"
                  @click="changePage(item)"
                  class="text-grey-8 ellipsis q-pa-none"
                  :style="{
                    borderLeft:
                      item.id == menuId ? '3px solid #2196f3' : '3px solid #fff'
                  }"
                >
                  <q-item-section class="q-ml-sm text-subtitle1">{{
                    item.cm_name
                  }}</q-item-section>
                  <q-item-section avatar>
                    <q-btn
                      round
                      dense
                      size="10px"
                      flat
                      icon="las la-angle-double-right"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
          <div
            class="col-md-9 col-12"
            :class="screenWidth > 1000 ? 'q-pl-md' : ''"
            :style="{
              borderTop: screenWidth < 1000 ? '1px solid #e0e0e0' : ''
            }"
          >
            <div
              class="row q-pb-md q-pt-sm text-grey"
              :class="
                screenWidth > 1000 ? 'q-px-md  q-gutter-lg' : 'q-gutter-md'
              "
            >
              <span class="text-black">排序方式：</span>
              <span
                class="change cursor-pointer"
                v-for="(i, index) in lists"
                :class="{ 'text-blue': currentSorts == index + 1 }"
                @click="activeSort(index)"
                >{{ i.text }}</span
              >
            </div>
            <q-card
              flat
              class="bg-white q-py-sm q-mt-xs"
              :class="screenWidth > 1000 ? 'q-px-md' : ''"
            >
              <div
                class="row q-mt-sm relative-position"
                v-for="item in articlesList"
                @click="goLink(item)"
              >
                <div
                  class="col-md-3 col-4"
                  style="overflow:hidden;"
                  :style="{ height: screenWidth > 1000 ? '135px' : '100px' }"
                >
                  <img
                    :src="item.ca_cover_image"
                    alt=""
                    style="width:100%;"
                    :style="{
                      height: screenWidth > 1000 ? '135px' : '100px'
                    }"
                    class="picture cursor-pointer"
                  />
                </div>
                <div
                  class="col-md-9 col-8 "
                  :class="screenWidth > 1000 ? 'q-pl-lg' : 'q-pl-sm'"
                >
                  <div class="row">
                    <div class="col-md-10 col-6">
                      <div
                        class="slow cursor-pointer ellipsis"
                        :class="
                          screenWidth > 1000 ? 'text-h6' : 'text-subtitle1'
                        "
                      >
                        {{ item.ca_title }}
                      </div>
                    </div>
                  </div>
                  <div class="absolute-top-right">
                    <q-chip
                      v-if="item.ca_tag == '1'"
                      square
                      color="blue-1"
                      text-color="blue"
                    >
                      置顶
                    </q-chip>
                    <q-chip
                      v-else-if="item.ca_tag == '3'"
                      color="green-1"
                      square
                      text-color="green"
                      >推荐
                    </q-chip>
                    <q-chip
                      v-else-if="item.ca_tag == '2'"
                      color="red-1"
                      text-color="red"
                      square
                    >
                      热门
                    </q-chip>
                  </div>
                  <div class="q-mt-sm text-grey">
                    <div class="ellipsis-3-lines">
                      {{ item.ca_description }}
                    </div>
                  </div>
                  <div
                    class="ellipsis absolute-bottom-right q-mb-xs text-grey"
                    :class="screenWidth > 1000 ? 'q-mr-sm' : ''"
                  >
                    发布时间：
                    {{
                      $q_date.formatDate(item.created_at * 1000, "YYYY-MM-DD")
                    }}
                  </div>
                </div>
              </div>
            </q-card>

            <div class="q-pa-lg flex flex-center">
              <div class="row q-mt-md">
                <q-pagination
                  v-model="page.pageIndex"
                  @input="currentChangeHandle(page.pageIndex)"
                  :max="maxPage"
                  direction-links
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Screen, LocalStorage } from "quasar";
export default {
  components: { Screen },
  name: "list",
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
      menuList: [],
      pageIndex: "",
      menuId: 0,
      maxPage: 3,
      screenWidth: this.$q.screen.width,
      articlesList: [],
      seach: "",
      lists: [
        { text: "发布时间（正序）" },
        { text: "发布时间（倒序）" },
        { text: "热门" }
      ],
      currentSorts: 1,
      page: {
        pageIndex: 1,
        pSize: 6,
        totalCount: 0
      },
      menuData: {}
    };
  },
  mounted() {
    if (LocalStorage.getItem("web_site_info")) {
      this.webSetName = LocalStorage.getItem("web_site_info").cs_name;
    }
  },
  created() {
    this.getList(this.$route.query.id);
    this.getMenuList(this.$route.query.id);
    this.menuId = this.$route.query.id;
    window.addEventListener("resize", this.handleResize);
  },
  watch: {
    "$route.query.id"(v) {
      this.menuId = v;
      this.getList(v);
      this.getMenuList(this.$route.query.id);
    }
  },
  computed: {},
  methods: {
    getList(val) {
      let obj = {
        menuId: this.menuId,
        status: 1,
        search: this.seach,
        pSize: this.page.pSize,
        pageIndex: this.page.pageIndex
      };
      if (val == 2) {
        obj.desc = 1;
      }
      if (val == 3) {
        obj.tag = 2;
      }
      this.$store
        .dispatch("home/getPageList", obj)
        .then(res => {
          if (parseInt(res.code) == 200) {
            if (res.data) {
              this.page.totalCount = res.data.page.totalCount;
              this.articlesList = res.data.list;
              if (res.data.page.totalCount % 6 == 0) {
                this.maxPage = parseInt(res.data.page.totalCount / 6);
              } else {
                this.maxPage = Math.ceil(res.data.page.totalCount / 6);
              }
            } else {
              this.page.totalCount = 0;
              this.articlesList = [];
              this.maxPage = 1;
            }
            document.documentElement.scrollTop = document.body.scrollTop = 0;
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
    getMenuList(val) {
      this.$store
        .dispatch("home/getMenuList", val)
        .then(res => {
          if (parseInt(res.code) == 200) {
            this.menuList = res.data.list ? res.data.list : [];
            this.menuData = res.data.item ? res.data.item : {};
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
    activeSort(index) {
      this.currentSorts = index + 1;
      this.currentChangeHandle(1);
    },
    //当前页
    currentChangeHandle(val) {
      if (val > this.maxPage) {
        return "";
      }
      this.page.pageIndex = parseInt(val);
      this.getList(this.currentSorts);
      this.pageIndex = "";
    },
    reset() {
      this.seach = "";
      this.getList(this.currentSorts);
    },
    changePage(val) {
      if (val.cm_tag == "1") {
        this.$router.push({ name: "introduce", query: { id: val.id } });
      } else if (val.cm_tag == "2") {
        this.$router.push({ name: "plugin", query: { id: val.id } });
      } else if (val.cm_tag == "6") {
        this.$router.push({ name: "customercase", query: { id: val.id } });
      } else {
        this.menuId = val.id;
        this.currentChangeHandle(1);
        this.getMenuList(val.id);
      }
    },
    handleResize(event) {
      this.screenWidth = document.documentElement.clientWidth;
    },
    jump(val) {
      window.location.href = val;
    },
    goLink(item) {
      if (item.ca_external_url) {
        window.open(item.ca_external_url);
        // window.location.href = item.ca_external_url;
      } else {
        this.$router.push({ name: "detail", query: { id: item.id } });
      }
    }
  }
};
</script>

<style scoped>
.change:hover {
  color: #2196f3;
}
.slow:hover {
  color: #2196f3;
  transition: 0.3s linear;
}
.picture {
  transition: all 0.6s;
}
.picture:hover {
  transform: scale(1.4);
}
</style>
