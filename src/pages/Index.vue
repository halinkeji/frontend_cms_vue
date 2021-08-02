<template>
  <q-page>
    <!-- 轮播 -->
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      :style="{
        height:
          screenWidth > 1000
            ? $q.screen.height * 0.6 + 'px'
            : $q.screen.height * 0.3 + 'px',
        'min-height':
          screenWidth > 1000
            ? $q.screen.height * 0.6 + 'px'
            : $q.screen.height * 0.3 + 'px'
      }"
    >
      <q-carousel-slide
        v-for="(item, index) in carouselData"
        :name="index"
        class="q-pa-none"
        :key="item.id"
        @click="see(item.cc_external_url)"
      >
        <q-img class="full-height" :src="item.cc_cover_image" :ratio="16 / 9" />
      </q-carousel-slide>
    </q-carousel>

    <!-- 关于框架 -->
    <div v-if="aboutFrameData.length > 0">
      <div class="text-center text-h4 q-mt-xl" v-if="screenWidth > 1000">
        <span class="q-mx-sm text-grey-5">—</span>
        关于框架
        <span class="q-mx-sm text-grey-5">—</span>
      </div>
      <div class="text-center text-h5 text-bold q-mt-xl" v-else>
        关于框架
      </div>
      <div>
        <div
          class="row q-col-gutter-sm text-center q-mt-md"
          :style="{ padding: screenWidth > 1000 ? '15px 6%' : '15px 8%' }"
        >
          <div
            class="col-md-2 col-sm-6  col-12"
            v-for="(i, index) in aboutFrameData"
            :key="index"
          >
            <div
              class="frameHoverStyle"
              style="height:280px;background:#F5F5F4;border-radius: 18px;"
            >
              <div class="q-pt-md text-center">
                <img
                  :src="i.caf_cover_image"
                  style="width:100px;height:100px"
                />
              </div>
              <div
                class="text-h6 q-px-xs text-center q-mt-xs text-bold ellipsis"
              >
                {{ i.caf_name }}
              </div>
              <div
                class="text-grey text-caption text-grey-9 q-pa-sm ellipsis-3-lines text-left"
                style="height:120px"
              >
                {{ i.caf_description }}
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-center text-center" style="padding:15px 16%">
          <div class="col-md-3 col-8">
            <q-btn
              unelevated
              color="blue"
              label="下载框架"
              class="full-width"
              @click="$router.push({ name: 'aboutFrame' })"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div v-for="item in homeData">
      <!-- 产品中心 -->
      <div v-if="item.cm_tag == '1'">
        <div class="text-center text-h4 q-mt-xl" v-if="screenWidth > 1000">
          <span class="q-mx-sm text-grey-5">—</span>
          {{ item.cm_name }}
          <span class="q-mx-sm text-grey-5">—</span>
        </div>
        <div class="text-center text-h5 text-bold q-mt-xl" v-else>
          {{ item.cm_name }}
        </div>
        <div class="q-mt-xl">
          <div class="q-pb-md bg-blue-1">
            <div
              class="row q-pt-md q-col-gutter-lg"
              :style="{ padding: screenWidth > 1000 ? '15px 18%' : '15px 8%' }"
            >
              <div
                class="col-12 col-sm-6 col-md-4 col-lg-3"
                v-for="(value, index) in item.cmsArticles"
                v-if="index < 8"
                @click="
                  $router.push({ name: 'introduce', query: { id: item.id } })
                "
                style="position:relative"
              >
                <q-chip
                  square
                  v-if="value.ca_tag == '1'"
                  color="blue"
                  text-color="white"
                  label="置顶"
                  style="position:absolute;top:30px;left:8px;z-index:999"
                />
                <q-chip
                  square
                  v-if="value.ca_tag == '2'"
                  color="red"
                  text-color="white"
                  label="热门"
                  style="position:absolute;top:30px;left:8px;z-index:999"
                />
                <q-chip
                  square
                  v-if="value.ca_tag == '3'"
                  color="green"
                  text-color="white"
                  label="推荐"
                  style="position:absolute;top:30px;left:8px;z-index:999"
                />
                <q-card flat class="introduce" style="border-radius:20px;">
                  <div class="cursor-pointer text-center">
                    <q-img
                      :src="value.ca_cover_image"
                      :ratio="4 / 3"
                      style="border-top-left-radius:20px;border-top-right-radius:20px;"
                    />
                  </div>
                  <div class="q-pa-md">
                    <div class="text-h6 ellipsis" style="height:32px">
                      {{ value.ca_title }}
                    </div>
                    <div
                      class="text-caption text-grey q-mt-md ellipsis-2-lines"
                      style="height:40px"
                    >
                      {{ value.ca_description }}
                    </div>
                    <div class="text-right text-caption text-grey q-mt-sm">
                      <span class="cursor-pointer change">
                        查看更多<q-icon name="arrow_forward_ios" size="8px" />
                      </span>
                    </div>
                  </div>
                </q-card>
              </div>
            </div>
            <div
              class="row justify-center text-center"
              style="padding:30px 18%"
              @click="
                $router.push({ name: 'introduce', query: { id: item.id } })
              "
            >
              <div class="col-md-3 col-8">
                <q-btn
                  outline
                  rounded
                  color="blue"
                  label="查看更多"
                  class="full-width"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 插件中心 -->
      <div v-if="item.cm_tag == '2'">
        <div
          class="text-center text-h4 q-mt-xl q-pb-md"
          v-if="screenWidth > 1000"
        >
          <span class="q-mx-sm text-grey-5">—</span>
          {{ item.cm_name }}
          <span class="q-mx-sm text-grey-5">—</span>
        </div>
        <div class="text-center text-h5 text-bold q-mt-xl" v-else>
          {{ item.cm_name }}
        </div>
        <div
          class="row q-pt-md q-col-gutter-md"
          :style="{ padding: screenWidth > 1000 ? '15px 18%' : '15px 8%' }"
        >
          <div
            v-for="(value, index) in item.cmsArticles"
            class="col-md-4 col-12 col-sm-6  cursor-pointer"
            :class="item.cmsArticles.length > 5 ? 'col-lg' : 'col-lg-3'"
            v-if="index < 5"
            @click="$router.push({ name: 'plugin', query: { id: item.id } })"
            style="position:relative"
          >
            <q-chip
              square
              v-if="value.ca_tag == '1'"
              color="blue"
              text-color="white"
              label="置顶"
              style="position:absolute;top:15px;left:8px;z-index:999"
            />
            <q-chip
              square
              v-if="value.ca_tag == '2'"
              color="red"
              text-color="white"
              label="热门"
              style="position:absolute;top:15px;left:8px;z-index:999"
            />
            <q-chip
              square
              v-if="value.ca_tag == '3'"
              color="green"
              text-color="white"
              label="推荐"
              style="position:absolute;top:15px;left:8px;z-index:999"
            />
            <q-card
              flat
              bordered
              class="q-pa-md "
              :class="screenWidth > 1000 ? 'picture' : ''"
            >
              <q-img :src="value.ca_cover_image" :ratio="16 / 9" />
              <div>
                <div class="text-center ellipsis text-h6 q-mt-md">
                  {{ value.ca_title }}
                </div>
                <div
                  class="text-grey-8 text-caption q-px-sm q-pt-sm ellipsis-3-lines text-center"
                  style="height:65px;"
                >
                  {{ value.ca_description }}
                </div>
                <div class="text-right text-caption text-grey q-mt-md">
                  <span class="change">
                    查看更多<q-icon name="arrow_forward_ios" size="8px" />
                  </span>
                </div>
              </div>
            </q-card>
          </div>
        </div>
        <div class="row justify-center text-center" style="padding:15px 18%">
          <div class="col-md-3 col-8">
            <q-btn
              @click="$router.push({ name: 'plugin', query: { id: item.id } })"
              outline
              rounded
              color="blue"
              label="查看更多"
              class="full-width"
            />
          </div>
        </div>
      </div>
      <!-- 客户案例 -->
      <div v-if="item.cm_tag == '6'">
        <div class="text-center text-h4 q-mt-xl" v-if="screenWidth > 1000">
          <span class="q-mx-sm text-grey-5">—</span>
          客户案例
          <span class="q-mx-sm text-grey-5">—</span>
        </div>
        <div class="text-center text-h5 text-bold q-mt-xl" v-else>
          客户案例
        </div>
        <div
          class="row q-mt-lg q-col-gutter-md"
          :style="{ padding: screenWidth > 1000 ? '15px 18%' : '15px 5%' }"
        >
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 "
            v-for="(i, index) in item.cmsArticles"
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
        <div class="row justify-center text-center" style="padding:30px 18%">
          <div class="col-md-3 col-8">
            <q-btn
              @click="
                $router.push({ name: 'customercase', query: { id: item.id } })
              "
              outline
              rounded
              color="blue"
              label="查看更多"
              class="full-width"
            />
          </div>
        </div>
      </div>

      <div v-if="item.cm_tag == '3'">
        <div
          class=" q-pb-xl"
          :style="{ paddingBottom: screenWidth > 1000 ? '30px' : '10px' }"
        >
          <div class="text-center text-h4  q-pt-xl" v-if="screenWidth > 1000">
            <span class="q-mx-sm">—</span>
            {{ item.cm_name }}
            <span class="q-mx-sm">—</span>
          </div>
          <div class="text-center text-h5 text-bold q-pt-md" v-else>
            {{ item.cm_name }}
          </div>
          <div
            class="row q-mt-xs q-col-gutter-md"
            :style="{ padding: screenWidth > 1000 ? '15px 18%' : '15px 5%' }"
          >
            <div
              class="col-md-4 col-12"
              v-for="(value, index) in item.cmsArticles"
              v-if="index < 3"
              @click="goLink(value)"
            >
              <q-card flat bordered class="q-pa-sm">
                <q-img
                  :src="value.ca_cover_image"
                  style="border-radius:5px"
                  :ratio="16 / 9"
                />
                <div class="q-pa-md">
                  <div style="height:60px">
                    <div class="text-h6 ellipsis change cursor-pointer">
                      {{ value.ca_title }}
                    </div>
                  </div>
                  <div class="ellipsis-2-lines" style="height:40px">
                    {{ value.ca_description }}
                  </div>
                  <div class="row q-mt-md">
                    <div class="col text-caption">
                      {{
                        $q_date.formatDate(
                          value.created_at * 1000,
                          "YYYY-MM-DD HH:mm:ss"
                        )
                      }}
                    </div>
                    <div class="col text-right">
                      <span class="cursor-pointer"
                        >查看详情<q-icon name="las la-angle-right"
                      /></span>
                    </div>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
          <div class="row justify-center text-center" style="padding:15px 18%">
            <div class="col-md-3 col-8">
              <q-btn
                @click="
                  $router.push({
                    name: 'list',
                    query: { id: item.id }
                  })
                "
                outline
                rounded
                color="blue"
                label="查看更多"
                class="full-width"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 新闻动态 -->
      <div v-if="item.cm_tag == '4'">
        <div class="text-center text-h4 q-pt-xl" v-if="screenWidth > 1000">
          <span class="q-mx-sm text-grey-5">—</span>
          {{ item.cm_name }}
          <span class="q-mx-sm text-grey-5">—</span>
        </div>
        <div class="text-center text-h5 text-bold q-mt-md q-pt-xl" v-else>
          {{ item.cm_name }}
        </div>
        <div>
          <q-carousel
            v-model="slideO"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            infinite
            ref="carousel"
            v-if="screenWidth > 1000"
            :autoplay="autoplayO"
            height="320px"
            style="margin:0 auto;width:66%"
          >
            <template v-slot:control>
              <q-carousel-control
                v-if="item.cmsArticles.length > 3"
                position="left"
                :offset="[0, 100]"
              >
                <q-btn
                  padding="xs"
                  outline
                  style="width:30px;height:40px"
                  icon="  keyboard_arrow_left"
                  color="primary"
                  @click="getRef('left')"
                >
                </q-btn>
              </q-carousel-control>
              <q-carousel-control
                v-if="item.cmsArticles.length > 3"
                position="right"
                :offset="[0, 100]"
              >
                <q-btn
                  padding="xs"
                  outline
                  style="width:30px;height:40px"
                  icon="  keyboard_arrow_right"
                  color="primary"
                  @click="getRef('right')"
                />
              </q-carousel-control>
            </template>
            <q-carousel-slide :name="1" class="column no-wrap">
              <div class="row">
                <div
                  class="col-4"
                  v-for="(value, index) in item.cmsArticles"
                  v-if="index < 3"
                  @click="goLink(value)"
                >
                  <div class="text-center">
                    <img
                      :src="value.ca_cover_image"
                      alt=""
                      style="width:90%;height:130px"
                    />
                  </div>
                  <div class="q-pl-md q-mt-md" style="width:90%;margin:0 auto">
                    <div class="ellipsis text-h6 cursor-pointer change q-mt-sm">
                      {{ value.ca_title }}
                    </div>
                    <div class="ellipsis-2-lines text-grey q-mt-md">
                      {{ value.ca_description }}
                    </div>
                    <div class="text-grey q-mt-sm text-right">
                      <span class=" cursor-pointer"
                        >更多<q-icon name="las la-angle-right"
                      /></span>
                    </div>
                  </div>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide
              :name="2"
              class="column no-wrap"
              v-if="item.cmsArticles.length > 3"
            >
              <div class="row">
                <div
                  class="col-4"
                  v-for="(value, index) in item.cmsArticles"
                  v-if="index > 2 && index < 6"
                  @click="goLink(value)"
                >
                  <div class="text-center">
                    <img
                      :src="value.ca_cover_image"
                      alt=""
                      style="width:90%;height:130px"
                    />
                  </div>
                  <div class="q-pl-md q-mt-md" style="width:90%;margin:0 auto">
                    <div class="ellipsis text-h6 cursor-pointer change q-mt-sm">
                      {{ value.ca_title }}
                    </div>
                    <div class="ellipsis-2-lines text-grey q-mt-md">
                      {{ value.ca_description }}
                    </div>
                    <div class="text-grey q-mt-sm text-right">
                      <span class=" cursor-pointer"
                        >更多<q-icon name="las la-angle-right"
                      /></span>
                    </div>
                  </div>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
          <q-carousel
            v-model="slideO"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            ref="carousel"
            class="q-pa-xs"
            v-else
            :autoplay="autoplayO"
            height="320px"
            style="width:96%;margin:0 auto"
          >
            <template v-slot:control>
              <q-carousel-control position="left" :offset="[0, 100]">
                <q-btn
                  padding="xs"
                  outline
                  style="width:30px;height:40px"
                  icon="  keyboard_arrow_left"
                  color="primary"
                  @click="getRef('left')"
                >
                </q-btn>
              </q-carousel-control>
              <q-carousel-control position="right" :offset="[0, 100]">
                <q-btn
                  padding="xs"
                  outline
                  style="width:30px;height:40px"
                  icon="  keyboard_arrow_right"
                  color="primary"
                  @click="getRef('right')"
                />
              </q-carousel-control>
            </template>
            <q-carousel-slide
              v-for="(value, index) in item.cmsArticles"
              :name="index"
              :key="index"
              v-if="index < 5"
              @click="goLink(value)"
              class="column no-wrap"
            >
              <div class="text-center">
                <img
                  :src="value.ca_cover_image"
                  alt=""
                  style="width:90%;height:130px"
                />
              </div>
              <div class="q-pl-md q-mt-md" style="width:90%;margin:0 auto">
                <div class="ellipsis text-h6 cursor-pointer change q-mt-sm">
                  {{ value.ca_title }}
                </div>
                <div class="ellipsis-2-lines text-grey q-mt-md">
                  {{ value.ca_description }}
                </div>
                <div class="text-grey q-mt-sm text-right">
                  详情<q-icon name="las la-angle-right" />
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
          <div class="row justify-center text-center" style="padding:15px 18%">
            <div class="col-md-3 col-8">
              <q-btn
                @click="
                  $router.push({
                    name: 'list',
                    query: { id: item.id }
                  })
                "
                outline
                rounded
                color="blue"
                label="查看更多"
                class="full-width"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <q-page-sticky
      position="top"
      :offset="[0, 220]"
      v-if="adshow == 0"
      style="z-index:999999"
    >
      <q-card style="width:340px">
        <q-img
          src="https://img1.baidu.com/it/u=2429612794,2730953005&fm=26&fmt=auto&gp=0.jpg"
          style="width:100%;height:240px"
        />
        <q-icon
          flat
          round
          color="black"
          name="close"
          class="absolute  cursor-pointer"
          size="30px"
          style="top: 5px; right: 5px;"
          @click="adshow = 1"
        />
      </q-card>
    </q-page-sticky>
    <!-- 右侧栏 -->
    <q-page-sticky position="right" :offset="[0, 0]" v-if="screenWidth > 1000">
      <div
        class="bg-blue-10 q-pa-sm text-white text-center cursor-pointer q-pt-xs"
        @mouseover="activeTrueO()"
        style="width:50px;height:120px;padding-top:30px"
        :style="
          btnFlag ? 'border-top-left-radius:5px' : 'border-radius:5px 0  0 5px'
        "
      >
        <q-icon name="las la-user-astronaut" color="white" size="30px" />
        <div class="text-subtitle1">
          咨询
        </div>
        <q-popup-proxy
          ref="popupRefa"
          @mouseleave="activeFalseO()"
          :offset="[210, -120]"
        >
          <div class="row q-pa-sm" style="width:210px">
            <div class="col-3 text-center q-pt-xs">
              <q-icon name="lab la-weixin" size="20px" color="blue"></q-icon>
            </div>
            <div class="col-9">
              <div class="text-subtitle1 row">
                <div class="col-9">
                  微信咨询
                </div>
                <div class="col-3">
                  <q-btn icon="close" flat round dense v-close-popup />
                </div>
              </div>
            </div>
          </div>
          <div class="text-center q-pb-md">
            <img
              :src="setting.cs_server_image"
              alt=""
              style="width:150px;height:150px;margin-left:-5px"
            />
          </div>
        </q-popup-proxy>
      </div>
      <q-item
        clickable
        v-ripple
        class="bg-blue-10 text-center q-pl-sm text-white cursor-pointer"
        @click="goTop()"
        v-if="btnFlag"
        style="width:50px;height:50px;border-bottom-left-radius:5px;padding-top:8px"
      >
        <q-icon name="keyboard_arrow_up" color="white" size="35px" /> </q-item
      ><q-item
        class="text-center q-pl-sm q-mt-xs"
        @click="goTop()"
        v-else
        style="width:50px;height:50px;border-bottom-left-radius:5px;padding-top:8px"
      >
      </q-item>
    </q-page-sticky>
    <q-page-sticky position="right" v-if="screenWidth < 1000">
      <div
        class="bg-blue-10 q-pa-sm text-white text-center"
        style="width:50px;height:100px;"
        :style="
          btnFlag ? 'border-top-left-radius:5px' : 'border-radius:5px 0  0 5px'
        "
      >
        <q-icon
          name="las la-user-astronaut"
          color="white"
          size="30px"
          class="q-mb-sm"
        />
        联系我们<q-popup-proxy>
          <div class="row text-center bg-white q-pa-sm" style="width:240px">
            <div class="col-12 q-pt-xs">
              <q-icon
                name="lab la-weixin"
                size="20px"
                color="blue"
                class="q-mr-md"
              ></q-icon
              >微信咨询
            </div>

            <div class="col-12 text-center  q-pb-md">
              <img
                :src="setting.cs_server_image"
                alt=""
                style="width:150px;height:150px;margin:o auto"
              />
            </div>
          </div>
        </q-popup-proxy>
      </div>
      <q-item
        clickable
        v-ripple
        class="bg-blue-10 text-center q-pl-sm text-white cursor-pointer"
        @click="goTop()"
        v-if="btnFlag"
        style="width:50px;height:50px;border-bottom-left-radius:5px;padding-top:8px"
      >
        <q-icon name="keyboard_arrow_up" color="white" size="35px" /> </q-item
      ><q-item
        class="text-center q-pl-sm q-mt-xs"
        @click="goTop()"
        v-else
        style="width:50px;height:50px;border-bottom-left-radius:5px;padding-top:8px"
      >
      </q-item>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { Screen, LocalStorage } from "quasar";
export default {
  name: "homeIndex",
  components: {
    Screen
  },
  meta() {
    return {
      title: "HLFramework 哈林框架系统 哈林会员管理系统 会员管理软件 会员卡系统 会员系统 异业联盟 门店管理 商家联盟 社区团购 拓客营销-内蒙古哈林网络科技有限公司",
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: title => `${title}`,
      description: {
        name: "description",
        content:
          "HLFramework,哈林框架哈林框架系统 YII2.0 前后端分离式开发架构,哈林,哈林会员管理系统 会员管理软件 会员卡系统 会员系统 异业联盟 门店管理 商家联盟 社区团购 拓客营销-内蒙古哈林网络科技有限公司"
      },
      keywords: {
        name: "keywords",
        content:
          "HLFramework,哈林框架,哈林,哈林会员管理系统,会员管理软件,会员卡系统,会员系统,异业联盟,门店管理,商家联盟,社区团购,拓客营销,内蒙古哈林网络科技有限公司"
      }
    };
  },
  data() {
    return {
      webSetName: "",
      btnFlag: false,
      code: -1,
      screenWidth: this.$q.screen.width,
      autoplayO: true,
      slide: 1,
      slideO: 1,
      drawer: false,
      carouselData: [], //轮播图
      aboutFrameData: [], //关于框架信息
      homeData: [], //中间文章列表
      bottomMenuData: [], //底部菜单数据
      setting: {}, //静态数据设置
      currentSort: 0,
      topMenuData: [], // 顶部菜单设置
      swiperOptionSwiper2: {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true, //滑动不只一格
        autoplay: true
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true, //滑动不只一格
        autoplay: true
      },
      swiperOptionT: {
        slidesPerView: 1,
        spaceBetween: 5,
        freeMode: true, //滑动不只一格
        autoplay: true
      },
      swiperOptionF: {
        loop: true, //循环显示，显示到最后一个回到第一个
        speed: 600, //config参数同swiper4,与官网一致
        autoplay: true, //自动播放
        mousewheelControl: true,
        pagination: {
          el: ".swiper-pagination",
          //type : 'progressbar', //分页器形状
          clickable: true //点击分页器的指示点分页器会控制Swiper切换
        }
      },
      slide: 1,
      autoplay: true,
      adshow: 1 //广告显示
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  created() {
    this.getStaticData();
    this.getHomeData();
    window.addEventListener("resize", this.handleResize);
    if (LocalStorage.getItem("web_site_info")) {
      this.webSetName = LocalStorage.getItem("web_site_info").cs_name;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  computed: {
    // screenWidth() {
    //   return parseInt(this.$q.screen.width);
    // }
  },
  methods: {
    // 获取上级分类列表无分页
    getStaticData() {
      this.$store
        .dispatch("home/getStatic")
        .then(res => {
          if (parseInt(res.code) == 200) {
            this.topMenuData = res.data ? res.data.topData : [];
            this.bottomMenuData = res.data ? res.data.bottomData : [];
            this.setting = res.data.setting ? res.data.setting : {};
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
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 500) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    goTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    // 获取栏目列表无分页
    getHomeData() {
      this.$store
        .dispatch("home/getHome")
        .then(res => {
          if (parseInt(res.code) == 200) {
            this.carouselData = res.data.carousel ? res.data.carousel : [];
            this.aboutFrameData = res.data.aboutFrame
              ? res.data.aboutFrame
              : [];
            this.homeData = res.data.menu ? res.data.menu : [];
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
    goLink(item) {
      if (item.ca_external_url) {
         window.open(item.ca_external_url);
        // window.location.href = item.ca_external_url;
      } else {
        this.$router.push({ name: "detail", query: { id: item.id } });
      }
    },
    activeTrue(index) {
      this.$refs.popupRef[index].show();
    },
    activeFalse(index) {
      this.$refs.popupRef[index].hide();
    },
    activeTrueT(index) {
      this.code = index;
    },
    activeFalseT() {
      this.code = 999999;
    },
    activeTrueO() {
      this.$refs.popupRefa.show();
    },
    activeFalseO() {
      this.$refs.popupRefa.hide();
    },
    see(e) {
      if (e) {
        window.location.href = e;
      }
    },
    lookDownArticler(val) {
      console.log(val.cm_type, val.cm_type == 1);
      if (val.cm_type == 3) {
        this.see(val.cm_external_url);
      } else if (val.cm_type == 1) {
        this.$router.push({
          name: "list",
          query: { id: val.id }
        });
      } else if (val.cm_type == 2) {
        this.$router.push({
          name: "columnDetail",
          query: { id: val.id }
        });
      }
    },
    handleResize(event) {
      this.screenWidth = document.documentElement.clientWidth;
    },
    getRef(direction) {
      if (this.$refs.carousel.length > 0) {
        if (direction == "left") {
          this.$refs.carousel[0].previous();
        }
        if (direction == "right") {
          this.$refs.carousel[0].next();
        }
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
.frameHoverStyle:hover {
  box-shadow: #dbdbdb 0px 5px 5px 0px;
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
