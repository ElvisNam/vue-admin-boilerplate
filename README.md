# vue-admin-boilerplate
vue 管理系统-脚手架

## 脚手架功能：
- 快速进行基于vue2.0系统的项目搭建
- babel自动编译代码，可以使用优雅的ES6语法
- 实现webpack一键打包功能

## 目录结构：

```
|—— web/                                     * 代码开发目录
|    |—— assets                              * 静态资源存储目录
|    |     |—— css/                          * css资源目录
|    |     |—— images/                       * 图片资源目录
|    |     |—— js/                           * js资源目录
|    |—— build/                              * 编译后的文件目录
|    |—— src/                                * 代码生产目录
|         |—— coms/                          * 通用组件目录
|         |—— pags/                          * 项目页面目录
|         |      |—— index/                  * 项目入口页面目录
|         |            |—— main/             * 页面子组件（仅用于演示）
|         |            |    |—— index.vue    
|         |            |—— app.vue           * 入口组件
|         |            |—— index.js          * 该页面模块下的js配置文件
|         |—— plugins/                       * 插件目录
|         |—— vuex/                          * vuex集中状态管理目录
|—— webpack.config.js                        * webpack编译配置文件
|—— package.json                             * 项目配置文件
|
```

## 快速开始：

```
# 确保全局安装git、npm等基本应用工具

# 下载代码
git clone https://github.com/clouddisk/vue-admin-boilerplate.git

# 安装依赖：
npm install

# webpack实时编译：
npm run webpack

# 开启服务器后浏览器输入（注意，下列端口号以开启的服务器配置项为准）：
http://localhost:8008/index.html
```

## License

本项目遵循MIT开源许可证




