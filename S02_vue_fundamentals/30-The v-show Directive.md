# S02P30: Conditional Rendering

Resources:

- section-2-21-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



Vue 官方文档：[Conditional Rendering](https://vuejs.org/guide/essentials/conditional.html)



`Vue` 的另一种条件渲染指令为 `v-show`，其与 `v-if` 最大的不同在于不会删除 `DOM` 元素，而是将不满足条件时的样式变为隐藏（`display: none;`）。



## `v-show` vs `v-if`

`v-show`：

- Changes the **display** CSS propterty. If **false**, then, then **display** will be set to **none**. Otherwise, uses the default display.
- Does *NOT* work with the `v-else` directive.
- Does *NOT* work with the `<template></template>` tag.
- Expensive on Load
- Cheap on Toggle



`v-if`:

- Will remove or add the element depending on the condition
- Does work with the `v-else` directive.
- Does work with the `<template></template>` tag.
- Cheap on Load because it's *lazy.*
- Expensive on Toggle



整理为表格形式：

|          Comparison          |                     `v-show`                      |                       `v-if`                        |
| :--------------------------: | :-----------------------------------------------: | :-------------------------------------------------: |
|           feature            | True: default display<br/>False: `display: none;` | True: add the element<br/>False: remove the element |
| work with `v-else` directive |                        :x:                        |                 :heavy_check_mark:                  |
|  work with `<template>` tag  |                        :x:                        |                 :heavy_check_mark:                  |
|           on Load            |                     Expensive                     |                    Cheap (lazy)                     |
|          on Toggle           |                       Cheap                       |                      Expensive                      |



摘自官方文档：

> [`v-if` vs. `v-show`](https://cn.vuejs.org/guide/essentials/conditional.html#v-if-vs-v-show)
>
> `v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。
>
> `v-if` 也是 **惰性** 的：如果在初次渲染时条件值为 `false`，则不会做任何事。条件区块只有当条件首次变为 `true` 时才被渲染。
>
> 相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS `display` 属性会被切换。
>
> 总的来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。



当 `v-if` 和 `v-for` 同时存在于一个元素上的时候，`v-if` 会 **首先被执行**。