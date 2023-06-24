# S07P79: Transition CSS Class Names



Resources：

- Animate.css：https://animate.style/
- Animate CDN：https://cdnjs.com/libraries/animate.css
- section-7-9-COMPLETE.zip



本节介绍了在 Vue 项目引入第三方样式库 `Animate.css` 的方法与注意事项。

对 CSS 基础薄弱者，可以选择 `Animate.css` 快速添加需要的样式类，然后对应到 Vue 中。

操作步骤：

（1）添加第三方 CDN：

index.html：（第 8 行）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

（2）手动设置 `transition-group` 中的动画相关的类名：

```vue
<template>
  <button @click="addItem">Add Item</button>
  <ul>
    <transition-group name="fade"
      enter-from-class=""
      enter-active-class=""
      enter-to-class=""
      leave-from-class=""
      leave-active-class=""
      leave-to-class=""
    >
      <li v-for="(number, index) in numbers"
        :key="number"
        @click="removeItem(index)"
      >
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>
```

实际使用过程中，用得最多的是 `enter-active-class` 和 `leave-active-class`：（以 `flip` 动画为例）

```vue
<transition-group name="fade"
  enter-active-class="animate__animated animate__flipInX"
  leave-active-class="animate__animated animate__flipOutX">
</transition-group>
```

（3）然后在需要退出的动画类上添加绝对定位，否则会出现类似“跳动”等问题；此外，动画时长的设置是通过 `animate__animated` 实现的，修改 `animation-duration` 的值即可：

```vue
<style>
    .animate__flipOutX { position: absolute; }
    .animate__animated { animation-duration: 1.5s; }
</style>
```

