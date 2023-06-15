# S07P72: Fine-tuning Transitions



Resources:

- Transitions: https://vuejs.org/guide/built-ins/transition.html



本节演示了 `transition` 组件的一些基本用法。

- 动画时长：或通过 `CSS` 指定，或通过 `duration` 属性指定（单位：毫秒，且优先级较 `CSS` 更高）
- `transition` + `v-if` + `v-else`：多个根节点元素的动画效果切换：添加 `key` 属性标识各部分唯一性
- 动画对 `v-show` 指令也生效；
- `mode`：设置多个动画的先后：
  - 为 `out-in` 时：先处理退场动画，再处理进场动画；
  - 为 `in-out` 时：默认值先处理进场动画，再处理退场动画；
  - 不设置时：多个动画同时进行（页面较乱）。



示例代码：

1. 设置 `duration`：

```vue
<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <transition name="fade" duration="1000">
    <h2 v-if="flag">Hello world!</h2>
  </transition>
</template>
```

2. 设置多个根节点动画切换：

```vue
<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello world!</h2>
    <h2 v-else key="secondary">Another hello!</h2>
  </transition>
</template>
```



> **注意**
>
> - `Vue` 通过控制样式类来控制页面动画，让开发者可以更加关注具体元素上的动画，而不是事无巨细地把动画的每一个细节都让 `Vue` 来处理；
> - 虽然添加了 `v-if` 和 `v-else` 指令，`Vue` 在区分各元素时也会有问题，因此需要通过 `key` 属性标识各部分唯一性（类比循环指令 `v-for` 中的 `:key` 绑定）。
