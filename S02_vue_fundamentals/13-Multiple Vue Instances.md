# S02P13: Multiple Vue Instances

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/04/25 updated, v3.2.47)



当 `mount` 挂载的 `DOM` 元素存在多个时，`mount(selector)` 只会匹配到符合条件的第一个元素。

想要多个元素同时渲染，必须分别调用 `mount` 方法，匹配对应的 `DOM` 容器元素：

```js
// first container
Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}).mount('#app1');

// second container
Vue.createApp({
    data() {
        return {
            firstName: 'Jane',
            lastName: 'Doe'
        }
    }
}).mount('#app2');
```

适用场景：页面存在多个 `widgets`（微件）且需要独立运维时。
