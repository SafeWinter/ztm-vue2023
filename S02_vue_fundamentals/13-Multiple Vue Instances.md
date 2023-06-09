# S02P13: Multiple Vue Instances

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



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

此时控制台 `Vue` 标签会出现两个 `Vue` 实例：

![multiple Vue instances](../assets/13-1.png)

要想区分这两个实例，可以自定义实例名称，使用 `name` 属性：

```js
// first container
Vue.createApp({
    name: 'firstApp'
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}).mount('#app1');

// second container
Vue.createApp({
    name: 'LastApp'
    data() {
        return {
            firstName: 'Jane',
            lastName: 'Doe'
        }
    }
}).mount('#app2');
```

结果如下：

![names Vue instances](../assets/13-2.png)
