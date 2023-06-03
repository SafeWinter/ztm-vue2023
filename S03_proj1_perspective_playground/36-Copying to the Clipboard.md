# S03P36: Copying to the Clipboard

Resources:

- section-3-2-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



本节完成复制按钮的交互逻辑。

[MDN 剪贴板文档](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

只需要在 `methods` 添加一个 `copy` 方法，并注册到复制按钮的 `click` 单击事件即可：

```js
const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    }
  },
  computed: {
    box() {
      return {
        transform: `
          perspective(${this.perspective}px)
          rotateX(${this.rotateX}deg)
          rotateY(${this.rotateY}deg)
          rotateZ(${this.rotateZ}deg)`
      }
    }
  },
  methods: {
    /* ... */
    async copy() {
      const transform = this.box.transform.split(/\s+/).join(' ');
      const text = `transform:${transform}`;
      await navigator.clipboard.writeText(text);
      console.warn('CSS copied to the Clipboard!');
    }
  }
}).mount('#app');
```

注意：

1. `navigator.clipboard.writeText` 是一个异步操作，`copy` 需应用 `async-await` 语法糖；（L23、L26）
2. 复制到剪贴板的内容，可以沿用计算属性中的 `box` 的值，为了便于粘贴时直接使用，对目标文本进行了格式化处理，删除多余的空白；（L24）
3. 提升用户体验：操作完毕，应该有一行操作反馈信息（L27）。



> **`JavaScript` 访问剪贴板内容**
>
> ```js
> navigator.clipboard.readText().then(
>   clipText => document.querySelector(".editor").innerText += clipText);
> ```
>
> 与 `writeText` 类似，`readText` 方法也是异步的。