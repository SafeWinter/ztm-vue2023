# S02P29: Conditional Rendering

Resources:

- section-2-20-STARTER.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



条件渲染指令有三个：

- `v-if`
- `v-else-if`
- `v-else`

使用时，指令必须位于平级且相邻的 `DOM` 元素上，否则报错。

这些指令可以动态添加或删除绑定的 `DOM` 元素，而不是像样式类或样式那样在页面上保留该元素。

如果需要条件渲染的元素不止一个，则需要提供一个容器元素（如 `div`）。但这样的块级元素很可能会破坏页面的原始样式。因此添加 `DIV` 这样的容器需要同步更新 `CSS` 样式，不便于后期维护。

课程给出的方案是使用 `template` 元素：

before:

```vue
<div v-else-if="mode == 2">
    <p>Bonus content</p>
    <h3>v-else-if</h3>
</div>
```

after:

```vue
<template v-else-if="mode == 2">
    <p>Bonus content</p>
    <h3>v-else-if</h3>
</template>
```

