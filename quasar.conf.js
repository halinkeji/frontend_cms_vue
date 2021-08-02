/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */
const path = require("path");
module.exports = function (ctx) {
  return {
    // https://quasar.dev/quasar-cli/supporting-ts
    supportTS: false,
    rtlSupport: true,
    treeShake: true,

    // https://quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/boot-files
    boot: [
      "i18n",
      "axios",
      // "vconsole",
      "component.js",
      "utils.js"
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: ["app.scss", "iconfont/iconfont.css"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      "ionicons-v4",
      // 'mdi-v5',
      "fontawesome-v5",
      "eva-icons",
      // 'themify',
      "line-awesome",
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      "roboto-font", // optional, you are not bound to it
      "material-icons" // optional, you are not bound to it
    ],

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: "hash", // available values: 'hash', 'history'
      //publicPath: process.env.NODE_ENV === 'production' ? '/quasar-manage/' : '/',

      env: ctx.dev
        ? {
          BASE_URL_API: "http://www.halin.net.cn" //dev 开发环境
        }
        : {
          BASE_URL_API: "/" //prod 生产环境
        },
      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      transpileDependencies: [],

      // rtl: false, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      showProgress: true,
      gzip: true,
      analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/handling-webpack
      extendWebpack (cfg, { isServer, isClient }) {
        cfg.resolve.alias = {
          ...cfg.resolve.alias,
          // 添加目录结构别名
          css: path.resolve(__dirname, "./src/css"),
          assets: path.resolve(__dirname, "./src/assets"),
          pages: path.resolve(__dirname, "./src/pages"),
          utils: path.resolve(__dirname, "./src/utils"),
          "@": path.resolve(__dirname, "./src")
        };
        // cfg.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /node_modules/
        // })
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: true // opens browser window automatically
      // host: 'wx.halin.net.cn',
      // disableHostCheck: true, // 禁止检查host头
      // proxy: {
      //   '/api': {
      //     target: 'http://wx.halin.net.cn/', // 对应自己的接口
      //     changeOrigin: true,
      //     ws: true,
      //     pathRewrite: {
      //       '^/api': ''
      //     }
      //   }
      // }
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: "material-icons", // Quasar icon set
      lang: "zh-hans", // Quasar language pack
      config: {
        notify: {
          /* look at QUASARCONFOPTIONS from the API card (bottom of page) */
        }
      },

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: "auto",

      // For special cases outside of where "auto" importStrategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      components: [],
      directives: [],

      // Quasar plugins
      plugins: [
        "Loading",
        "Notify",
        "LoadingBar",
        "LocalStorage",
        "SessionStorage",
        "Cookies",
        "Meta",
        "Dialog",
        "AppFullscreen"
      ]
    },

    animations: "all", // --- includes all animations
    // https://quasar.dev/options/animations
    // animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: `hlframework frontend web `,
        short_name: `hlframework frontend web `,
        description: `hlframework frontend web `,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#027be3",
        icons: [
          {
            src: "assets/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "assets/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "assets/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png"
          },
          {
            src: "assets/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "assets/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: "builder", // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        win32metadata: {
          name: "官网站点"
        }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: "hlframework_frontend_web"
        //artifactName: 'hlframework'
      },

      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack (/* cfg */) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      }
    }
  };
};
