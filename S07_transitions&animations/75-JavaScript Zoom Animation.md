# S07P75: JavaScript Zoom Animation



Resources：

- Web Animation API：https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API

本节介绍了如何使用Vue的动画钩子实现之前CSS动画的缩放效果。



## 1 使用 Web Animation API

根据上一节搭建的项目环境，主要改造 `enter` 和 `leave` 钩子：

```vue
<template>
  <button @click="flag = !flag">Toggle</button>
  <transition
    @enter="enter"
    @leave="leave"
  >
    <h2 v-if="flag">Hey</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true
    };
  },
  methods: {
    enter(el, done) {
      const animation = el.animate([{ transform: 'scale3d(0,0,0)'}, {}], {
        duration: 1000,
      })
      animation.onfinish = () => {
          done();
      };
    },
    leave(el, done) {
      const animation = el.animate([{}, { transform: 'scale3d(0,0,0)'}], {
        duration: 1000,
      });
      animation.onfinish = () => {
          done();
      };
    },
  },
};
</script>
```

注意，`animate` 方法接收两个参数：

- 关键帧对象数组：至少两个对象，空对象表示当前默认状态（大小、颜色、尺寸等）
- 动画参数对象：控制时长、特效等

根据 MDN 文档，第二个配置参数中如果只有时长，还可以进一步简写为：

```js
const animation = el.animate([{ transform: 'scale3d(0,0,0)'}, {}], 1000);
```

同时，`onfinish` 钩子也可以写为：

```js
el.animate([{}, { transform: 'scale3d(0,0,0)'}], 1000).onfinish = done;
```

另外，需要注意关键帧数组在两个钩子的顺序是相反的：

- `enter` 中的关键帧，空对象在后面
- `leave` 中的关键帧，空对象在前面



## 2 性能优化措施

`Vue` 优先考虑 `CSS` 配置的动画，然后才是 `JavaScript` 配置的动画。如果明确不走 `CSS`，可以通过绑定 `transition` 组件的 `css` 属性，令其值为 `false` 即可：（第 6 行）

```vue
<template>
  <button @click="flag = !flag">Toggle</button>
  <transition
    @enter="enter"
    @leave="leave"
    :css="false"
  >
    <h2 v-if="flag">Hey</h2>
  </transition>
</template>
```

