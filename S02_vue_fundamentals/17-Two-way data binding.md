# S02P17: Two-way data binding

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/04/25 updated, v3.2.47)



> **Reactivity**（"响应式"）
>
> Reactivity is when any changes to the data is immediately reflected on the page.
>
> 响应式是指数据的任何变更立即反映到页面上。



双向绑定与原生JS绑定对比

Vanilla JavaScript：

```js
const input = document.getElementById("first-name");
input.addEventListener("keyup", function() {
    const p = document.querySelector("p");
    p.innerHTML = this.value;
});
```

Vue's two-way binding:

```vue
<input type="text" v-model="firstName" />
```

传统方式中，一旦需要实现响应式的数据增多，运维难度就会直线上升（例如添加对应 DOM 元素的 ID，或 CSS 样式类等）；而 Vue 则在内部优雅实现。



双向绑定过程中，如果变量以多个空格结尾，渲染到视图后只有一个空格的效果。

可以在 `console` 控制台访问或设置双向绑定的变量，观测实时更新的效果。
