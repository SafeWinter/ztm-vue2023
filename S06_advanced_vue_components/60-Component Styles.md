# S06P60: Component Styles



Resources：

- Scoped style（带作用域的样式）：https://vue-loader.vuejs.org/guide/scoped-css.html#scoped-css

## 1 本节要点

- `Vue` 组件包含三个部分：`template`、`script`、`style`
  - `template`：用于组件的模板代码，可以插入表达式、指令和其他组件。
  - `script`：用于组件的选项，包括数据、方法和业务逻辑。
  - `style`：用于定义组件的样式，可以在其中添加样式规则。
- 在 `style` 中添加 `scoped` 属性，可以将样式限定在 `当前组件` 中，避免样式泄漏到其他区域。
- `scoped` 属性会使样式只应用于当前组件中的元素，并自动生成带有数据属性的元素和修改选择器。
- 使用样式作用域可以保持代码简洁，无需担心类名和 ID 的冲突。
- 样式作用域是模拟 `Shadow DOM` 的行为。之所以模拟而非直接使用，是因为 `Shadow DOM` 并未在所有浏览器中完全支持。
- 样式作用域使得组件的样式只影响组件本身，不会影响其他组件或页面上的元素。
- 使用 `scoped` 样式时，`Vue` 会在文档的头部（即 `header` 标签）动态添加一个带有组件样式的 `<style>` 标签。
- 样式块可以使用 `Sass` 等预处理器（后续会讲）



## 2 关于影子 DOM

问题由来：除了利用 `class` 类名和 `ID`，怎样在组件内批量设置 `CSS` 样式并保证不与其他组件相互干扰？

主要特点：

1. 一种将组件与具有自己的样式、事件和结构的常规 `DOM` 隔离的解决方案
2. 影子 `DOM` 并不是虚拟 `DOM`：虚拟 `DOM` 是一个 `JavaScript` 对象，它是真实 `DOM` 的副本；影子 `DOM` 是与真实 `DOM` 相隔离的 `DOM`。

> **来自 ChatGPT 的补充说明**
>
> 影子 DOM（Shadow DOM）是前端开发领域中的一个概念，它是一种在网页中创建独立的、隔离的 DOM 子树的技术。
>
> 传统的网页开发使用的是全局的 DOM 结构，所有的元素都存在于一个共享的 DOM 树中。这种结构有时会导致样式冲突、JavaScript 操作的困难以及组件之间的耦合问题。
>
> 影子 DOM 提供了一种解决方案，它允许开发者创建一个独立的 DOM 子树，其中的元素和样式与全局的 DOM 结构隔离开来。这意味着在影子 DOM 内部定义的样式和元素不会影响到外部的 DOM 结构，也不会受到外部样式的干扰。这种隔离性使得开发者可以更加自由地设计和控制组件的样式和结构。
>
> 影子 DOM 通过使用 Shadow Root（影子根）来创建独立的 DOM 子树。Shadow Root 是一个封装了自己的 DOM 树的容器，它可以附加到任何元素上。在 Shadow Root 内部，可以定义元素和样式，并且这些定义只在影子 DOM 内部生效。
>
> 通过使用影子 DOM，开发者可以实现组件化的开发模式，将组件的样式和结构进行封装，并且保持与外部环境的隔离。这在构建大型应用程序、开发 Web 组件库和实现可复用的 UI 元素时非常有用。
>
> 需要注意的是，影子 DOM 并不是所有浏览器都完全支持，但可以使用 Polyfill 或框架（如 Vue、React 等）提供的抽象层来模拟实现类似的隔离效果。
>
> 总之，影子 DOM 是一种通过创建独立的 DOM 子树来实现隔离的技术，它可以帮助开发者解决样式冲突和组件耦合等问题，提供更好的组件化和隔离性。



## 3 限定范围的样式（scoped style）

写法：

```vue
<style scoped>
.example {
  color: red;
}
</style>
<template>
  <div class="example">hi</div>
</template>
```

最终效果：

```vue
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>
<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

更多用法及注意事项，详见 [scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html#scoped-css)

根据文档，**Scoped 样式不能代替 class**。考虑到浏览器渲染各种 CSS 选择器的方式，当 `p { color: red }` 是 scoped 时 (即与特性选择器组合使用时) 会慢很多倍。如果你使用 class 或者 id 取而代之，比如 `.example { color: red }`，性能影响就会消除。
