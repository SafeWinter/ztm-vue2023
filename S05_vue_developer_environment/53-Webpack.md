# S05P53: Webpack



Resources:

- webpack-example.zip
- section-5-8-COMPLETE.zip



本节介绍 `webpack` 打包的基础操作，不会深入展开。



## 1 webpack 简介

与 `Vite` 类似的一款 `JavaScript` 前端项目打包工具。

> **来自 ChatGPT 的入门介绍**
>
> `Webpack` 是一个现代的前端构建工具。它是一个开源的 `JavaScript` 模块打包器，用于将多个模块打包成一个或多个 `bundle`（捆绑）文件，以便在浏览器中加载。`Webpack` 支持各种资源，如 `JavaScript`、`CSS`、图片等，并提供了丰富的插件系统和配置选项，以满足复杂的项目需求。
>
> `Webpack` 可以将项目中的各个模块视为一个个依赖关系，并通过静态分析构建出一个依赖图。根据这个依赖图，`Webpack` 可以自动处理模块间的依赖关系，并进行必要的优化，例如按需加载、代码拆分等。它还支持使用 `loaders`（加载器）来处理非 `JavaScript` 类型的文件，例如将 `ES6` 代码转换为 `ES5`，或者将 `Sass` 文件转换为 `CSS`。
>
> 通过配置文件或命令行参数，开发者可以定义 `Webpack` 的行为，例如指定入口文件、输出文件的位置，以及需要使用的 `loaders` 和 `plugins`（插件）。这样，开发者可以根据项目的具体需求来定制 `Webpack` 的构建过程，并提供优化和扩展的功能。
>
> 总的来说，`Webpack` 在前端开发中扮演着重要的角色，它简化了模块管理、资源打包和构建优化的过程，为开发者提供了更高效、可维护的前端开发环境。



## 2 webpack 配置

本节需新建文件夹，放入课程资料备好的 `webpack` 文件，运行 `npm i` 即可。`webpack` 的配置文件叫 `webpack.config.js`。需要配置的项目较 Vite 项目多了很多，因为 `webpack` 只能提供 `JavaScript` 的打包，其余文件需要安装并配置相应的加载器（`loaders`）及插件（`plugins`）才能正确解析。因此 `webpack` 的学习曲线较 `Vite` 更陡。

注意：`webpack` 的入口文件是一个 `JS` 文件；而 `Vite` 则是 `HTML` 文件。

在 `webpack.config.js` 中一共四个大类需要配置：

1. `entry`：`'./index.js'`
2. `output`：指定项目打包后的路径（包括 `path` 和 `filename`，其中 `__dirname` 为当前项目根目录的路径）
3. `model`：通过配置 `rules` 节点引入不同的 `loader`。除了 `rules`，通常还会配置 
4. `plugins`：示例中的 `MiniCssExtractPlugin` 用于将 `CSS` 样式从 `JavaScript` 脚本提取到独立的样式文件。

此外，还配置了一个 `watch` 节点，用于监听项目文件的变化，值设为 `true` 即可。



## 3 webpack 打包

```bash
$ npm run start
```

运行成功后，项目根路径下会出现一个 `dist` 文件夹：

![webpack bundle](../assets/53-1.png)
