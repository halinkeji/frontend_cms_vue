<template>
  <q-page class="q-pb-xl">
    <q-img
      :ratio="16 / 9"
      style="height:200px"
      :src="itemData.cm_banners_ad"
      v-if="itemData.cm_banners_ad"
    >
      <div
        class="absolute-full text-subtitle2 flex flex-center row q-gutter-sm transparent"
      >
        <div
          class=" text-h4 q-pb-lg absolute-center  text-white"
          style="left: 25%;"
          v-if="itemData.cm_banners_ad"
        >
          {{ itemData.cm_name }}
        </div>
        <div class="row justify-center text-h4 q-py-lg  text-white" v-else>
          <div class="col-md-6 col-8">
            {{ itemData.cm_name }}
          </div>
        </div>
      </div>
    </q-img>
    <div
      class="q-mt-lg"
      :style="{ padding: screenWidth > 1000 ? '0 18%' : '0 3%' }"
    >
      <div
        class="row q-pb-xl q-pt-sm text-center q-col-gutter-lg"
        v-if="screenWidth > 1500"
      >
        <div class="col-2" v-for="(i, index) in listOne">
          <div
            class="changeO q-pa-sm text-subtitle1"
            :class="{ active: sort == index }"
            @click="select(index)"
          >
            {{ i.text }}
          </div>
        </div>
      </div>
      <div class="row q-pb-xl q-pt-sm text-center q-col-gutter-lg" v-else>
        <div class="col-6" v-for="(i, index) in listOne">
          <div
            class="changeO text-subtitle1"
            :class="{ active: sort == index }"
            @click="select(index)"
          >
            {{ i.text }}
          </div>
        </div>
      </div>
      <div
        class="row q-col-gutter-md q-pt-sm"
        :style="{ padding: screenWidth > 1000 ? '' : '15px 8%' }"
      >
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3"
          v-for="i in articlesList"
          style="position: relative"
          @click="$router.push({ name: 'detail', query: { id: i.id } })"
        >
          <q-chip
            square
            v-if="i.ca_tag == 1"
            color="blue"
            text-color="white"
            label="置顶"
            style="position: absolute; top: 30px; left: 8px; z-index: 999"
          />
          <q-chip
            square
            v-if="i.ca_tag == 2"
            color="red"
            text-color="white"
            label="热门"
            style="position: absolute; top: 30px; left: 8px; z-index: 999"
          />
          <q-chip
            square
            v-if="i.ca_tag == 3"
            color="green"
            text-color="white"
            label="推荐"
            style="position: absolute; top: 30px; left: 8px; z-index: 999"
          />
          <q-card
            bordered
            flat
            :class="screenWidth > 1000 ? 'introduce' : ''"
            style="border-radius: 20px"
          >
            <div class="bg-blue cursor-pointer text-center">
              <q-img
                :src="i.ca_cover_image"
                :ratio="4 / 3"
                style="
                  border-top-left-radius: 20px;
                  border-top-right-radius: 20px;
                "
              />
            </div>
            <div class="q-pa-md">
              <div class="text-h6 ellipsis" style="height: 32px">
                {{ i.ca_title }}
              </div>
              <div
                class="text-caption text-grey q-mt-md ellipsis-2-lines"
                style="height: 40px"
              >
                {{ i.ca_description }}
              </div>
              <div class="text-right text-caption text-grey q-mt-sm">
                <span class="cursor-pointer change">
                  查看详情<q-icon name="arrow_forward_ios" size="8px" />
                </span>
              </div>
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
  name: "introduce",
  components: { Screen },
  meta() {
    return {
      title: this.itemData.cm_name,
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: title => `${title} - ${this.webSetName}`,
      description: {
        name: "description",
        content:
          this.itemData.cm_name +
          "HLFramework,哈林应用市场,哈林会员管理系统 会员管理软件 会员卡系统 会员系统 异业联盟 门店管理 商家联盟 社区团购 拓客营销-内蒙古哈林网络科技有限公司"
      },
      keywords: {
        name: "keywords",
        content:
          this.itemData.cm_name +
          "HLFramework,哈林应用市场,哈林会员管理系统,会员管理软件,会员卡系统,会员系统,异业联盟,门店管理,商家联盟,社区团购,拓客营销,内蒙古哈林网络科技有限公司"
      }
    };
  },
  data() {
    return {
      webSetName: "",
      drawer: false,
      listOne: [
        {
          text: "全部"
        },
        {
          text: "置顶产品"
        },
        {
          text: "热门产品"
        },
        {
          text: "推荐产品"
        }
      ],
      sort: 0,
      screenWidth: this.$q.screen.width,
      itemData: {},
      articlesList: []
    };
  },
  mounted() {},
  created() {
    window.addEventListener("resize", this.handleResize);
    this.getArticlesList(0);
    if (LocalStorage.getItem("web_site_info")) {
      this.webSetName = LocalStorage.getItem("web_site_info").cs_name;
    }
  },
  computed: {},
  methods: {
    getArticlesList(val) {
      var obj = {
        id: this.$route.query.id,
        sort: val
      };
      this.$store
        .dispatch("home/getArticlesList", obj)
        .then(res => {
          if (parseInt(res.code) == 200) {
            this.itemData = res.data.item ? res.data.item : {};
            this.articlesList = res.data.list ? res.data.list : [];
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
    select(index) {
      this.sort = index;
      this.getArticlesList(this.sort);
    },
    jump(val) {
      window.location.href = val;
    }
  }
};
</script>

<style scoped>
.introduce:hover {
  margin-top: -10px;
}
.changeO:hover {
  border: 1px solid rgb(7, 129, 243);
  border-radius: 30px;
  color: rgb(7, 129, 243);
  cursor: pointer;
}
.changeO {
  border: 1px solid #eee;
  border-radius: 30px;
}
.active {
  border: 1px solid rgb(7, 129, 243);
  border-radius: 30px;
  color: rgb(7, 129, 243);
  cursor: pointer;
}
</style>
