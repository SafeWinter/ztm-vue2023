# S04P44: Introduction to Components

resources:

- section-4-7-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



## 1 何为组件（Component）

组件是构成应用程序的一部分（如标题、页脚和内容之类），通常可以是 `HTML` 中的各个部分。

将应用程序的模板存储在单个文件中可能很难管理。因此，理想的解决方案是将模板拆分为单独的文件。这就是组件（`Component`）。

所谓组件，本质是一个模板，但功能远不止普通模板。它可以包含自己的 `data`、`methods`、计算属性（`computed`）和观察者（`watch`）等等。

组件的基本特点是解耦和抽象，不能包含过重的逻辑。其主要目的是供主程序使用，因此复用性也是考虑因素之一。



## 2 组件示例

组件必须在 `Vue` 实例调用 `mount` 方法前添加到主程序：

```vue
<template>
  <div id="app">
    <hello></hello>
    <hello></hello>
    <hello></hello>
  </div>
</template>
<script>
  const vm = Vue.createApp({});
  vm.component('hello', {
    template: `<h1>{{ message }}</h1>`,
    data() {
      return { message: 'Hello World!' }
    }
  });
  vm.mount('#app');
</script>
```

注意：

1. 第 10 行的 `component` 函数接收两个参数，第一个为组件名称（`kecab-case` 或 `pascal-case` 风格）。推荐在命名时要有 **命名空间** 意识，如添加统一的前缀（`blog-post`），以确保组件名称的唯一性；
2. 组件无法执行自己的 `mount` 挂载方法，只能被主程序引用；
3. 这种方式定义的组件只能通过 `template` 属性设置模板；

运行结果：

![vue component intro](../assets/44-1.png)

随着应用复杂度的提升，组件在解耦与功能扩展上的作用会日益明显，需要处理的情况也会越来越棘手。处理不好将很难继续了解 Vue 的其他知识点。同时，项目构建时我们也推荐使用无编译器的 `runtime` 版 Vue，这意味着必须编写虚拟 DOM 对象而不是普通的 HTML。怎样解决这些问题呢？这需要有相应的工具支持，下一个单元会详细介绍。
