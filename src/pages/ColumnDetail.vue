<template>
  <q-page class="scrollTop">
    <div style="padding:15px 17%">
      <div class=" text-center">
        <div class="q-pl-md">
          <div class="q-mt-lg text-h6 text-center">
            {{ menuData.cm_name }}
          </div>
          <div class="q-mt-md text-grey text-center">
            <q-icon name="query_builder" class="q-mr-sm" />
            {{
              $q_date.formatDate(
                menuData.created_at * 1000,
                "YYYY-MM-DD HH:mm:ss"
              )
            }}
            <q-icon name="turned_in_not" class="q-ml-xl" />
            <!-- 作者：小卢 -->
          </div>
          <q-separator class="q-my-md" />
          <div v-html="menuData.cm_content"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "listDetail",
  data() {
    return {
      menuData: {}
    };
  },
  mounted() {},
  created() {
    this.getItem(this.$route.query.id);
  },
  computed: {},
  methods: {
    // 获取单条
    getItem(val) {
      this.$store.dispatch("home/getItem", val).then(res => {
        if (parseInt(res.code) == 200) {
          this.menuData = res.data;
        }
      });
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
