# S05P47: Introduction to Vite



## 1 何为 Vite

`Vite` 读作 `/vait/`

> **何为 Vite**
>
> `Vite` 是一个基于 `JavaScript` 模块的构建工具，特别为 `Vue.js` 单页应用（SPA）开发而设计。它提供了一种快速、简单的开发方式，能够显著提高开发者的开发效率。
>
> `Vite` 的核心思想是利用现代浏览器的原生 ES 模块支持来进行开发。相比传统的基于 `webpack` 的打包方式，`Vite` 使用了一种基于原生 `ES` 模块的开发服务器，它利用浏览器自身的 `ES` 模块加载功能，将模块作为单个文件进行请求和加载，而不需要打包成一个或多个捆绑文件。这种方式能够大大加快应用的启动时间，因为只有需要的模块才会被加载，而不是一次性加载整个应用的代码。
>
> `Vite` 针对 `Vue.js` 应用进行了特殊优化，能够实现 **即时热重载**（**H**ot **M**odule **R**eplacement），即在开发过程中，当修改了组件代码后，Vite 能够快速地只重新编译并替换需要更新的模块，而不会重启整个应用。这使得开发者能够实时看到修改的效果，提高了开发效率。
>
> 除此之外，`Vite` 还提供了内置的 `TypeScript` 支持、`CSS` 预处理器的集成、插件系统以及丰富的开发者工具，使得开发 `Vue.js` 应用变得更加简单和高效。
>
> 总结来说，`Vite` 是一个针对 `Vue.js` 单页应用开发的构建工具，利用原生 `ES` 模块加载和即时热重载等特性，提供了快速、简单的开发体验。



## 2 为什么使用 Vite

- 性能卓越：不存在 `webpack` 那样随项目规模而递增的打包时间。
- 丰富的第三方库（`TypeScript`、`Sass` 等）
- 高可扩展性：配置简便，极易扩展
- `Vite` 的创始人就是 `Vue` 的创始人，二者兼容性极强



## 3 Vite 示例

示例：使用 `npm` 创建一个基于原生 `JavaScript` 的 `Vite` 项目。

```bash
$ npm create vite@latest
$ (choose Vanilla)
$ (default project name 'vite-project')
$ cd vite-project
$ npm i
$ npm run dev
```

