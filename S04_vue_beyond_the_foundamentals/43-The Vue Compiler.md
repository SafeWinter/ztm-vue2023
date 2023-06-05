# S04P43: The Vue Compiler

resources:

- CDNJS: https://cdnjs.com/libraries/vue
- Vue Builds: https://github.com/vuejs/core/tree/main/packages/vue#which-dist-file-to-use



## 1 Vue 模板的两种写法

写法一：

```vue
<template>
	<div>{{ message }}</div>
</template>
```

写法二：

```vue
<div id="app"></div>
<script>
    const vm = Vue.createApp({
        data() { 
            return { 
                message: 'Hello world!'
            } 
        },
        template: `{{ message }}`
    }).mount('#app')
</script>
```

其中，写法二的一个应用场景为模板内容来自另一个请求。两种写法均可。

视频不推荐第二种写法，两点原因：

1. 绝大多数编辑器无法在 `JS` 中正确识别 `HTML` 语法，只会识别为文本；
2. 模板内容多行显示并不方便（字符串模板对低版本浏览器欠友好）。



## 2 Vue 的版本划分

按是否包含编译器，可分为两大类：

- 有编译器版：`full-build`
- 无编译器版：`runtime-build`

无编译器版的优劣势对比：

- 优势：较完整版缩减约 30%；由于无需编译带来的性能提升。
- 劣势：可读性较差，在 `JS` 中不便于维护；快速上手需要其他辅助工具。

编译器的核心功能，在于接收 `Vue` 模板内容（文本形式），返回一个虚拟 `DOM` 对象。编译器会在使用 `template` 属性或调用 `mount` 方法时用到。



## 3 Vue 的编译过程

> **编译器** 的本质
>
> Code that is responsible for compiling template strings into JavaScript render functions.
>
> 负责将模板字符串编译成 `JavaScript` **渲染函数** 的 **代码**。



## 4 何为渲染函数

```js
const res = Vue.compile('<p v-if="true">Hello</p>');
```

这里的 `res` 是一个特殊的对象，包含一个叫 `render` 的函数，该函数接收一个字符型的模板内容，其函数的返回值，即为 **渲染函数**。

渲染函数负责将 `Vue` 模板内容渲染到视图，可理解为一个现实版的编译器。渲染函数最后返回一个表征模板内容的 JS 对象（虚拟 DOM）。

若使用无编译器版，则需要手动实现一个渲染函数，然后将其交给 Vue 处理。



## 5 渲染函数示例

从 CDNJS 中选择一个 `runtime-build` 版（例如最新版的 [v3.3.4](https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.runtime.global.min.js)），并创建示例页面：

```html
<body>
    <div id="app"></div>
    <div id="app2"></div>
    
    <script src="vue3.js"></script>
    <script>
    	const vm = Vue.createApp({
          data() {
            return {
              message: "Hello world!"
            }
          },
          template: `{{ message }}`
        }).mount('#app');

        const vm2 = Vue.createApp({
          data() {
            return {
              message: "Hello world!"
            }
          },
          render() {
            return Vue.h('h1', this.message);
          }
        }).mount('#app2');
    </script>
</body>
```

注意：第 23 行中的 `Vue.h`，其中的 `h` 为 `hyper scripts` 的缩写（超级脚本、高级脚本），可以类比 `HTML` 进行理解—— `HTML` 是由文本构成的 `document` 文档；类似地，`hyper scripts` 使用 `JavaScript` 来构建 `HTML`。

运行结果：完整版 Vue 两个实例都被渲染了。

![both rendered for full-build](../assets/43-1.png)

如果改为[无编译器版](https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.runtime.global.min.js)（第 5 行改为 `<script src="vue.runtime.js"></script>`），则只渲染第二个实例：

![only the last rendered with runtime-build](../assets/43-2.png)



## 6 结论

综上，有没有什么办法，既可以拥有无编译器版的性能提升，又能让我们像之前那样不用手动创建渲染函数呢？答案是有的——这就是 `vue-cli` 工具（后续章节会介绍）