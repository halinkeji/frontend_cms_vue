# 企业官网vue前端文件

HLFramework 哈林框架管理系统，前端vue 开源文件。


## 完整的企业官网前端示例文件包说明
#### 1、您可以根据官网完整示例包开发自己的官网风格样式
#### 2、自带完整的结合Restful API 接口规则
#### 3、完整的路由创建机制
#### 4、免费开源，仅供大家参考学习使用。
#### 5、有好作品的个人或者企业，可联系我们进行深度合作。

## 二次开发图文、视频教程地址
### HLFramework官网链接：https://www.halin.net
### 点击查看链接：https://wiki.halin.net/details?id=4
### HLFramework 安装教程点击查看链接：https://wiki.halin.net/details?id=3



## Install the dependencies （安装依赖文件包，支持npm、yarn）
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
### 启动 开发调试模式
```bash
quasar dev
```

### Lint the files
### 启动 测试
```bash
npm run lint
```

### Build the app for production
### 发布生产产品包
```bash
quasar build
```
### 生产包集成后台注意事项

#### 1、将生成的index.html文件内的js、css文件路径同步更新到frontend/views/site/index.php内
#### 2、将生成的js、CSS、图片等文件夹一并拷贝到：框架根目录/web/


### Customize the configuration
### 具体扩展quasar 的配置查看官方文档
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### 官网截图展示
https://www.halin.net/attachment/images/2021/05/17/image_1621243139_NQ11uJJQ.jpg