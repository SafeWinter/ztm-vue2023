# S02P22: Event Modifiers

Resources:

- section-2-11-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



要消除默认事件带来的潜在影响，有两种方式：

1. 在方法中使用 `event.preventDefault()`：（第 4 行）

```js
const vm = Vue.createApp({
    data() { return { lastName: 'Doe' } },
    methods: {
        updateLastName(msg, event) {
            event.preventDefault();
            console.log(msg);
            this.lastName = event.target.value;
        }
    },
}).mount('#app');
```

2. 使用事件指令修饰词 ：

```vue
<input type="text" :value="lastName" @input.prevent="updateLastName" />
```

更多修饰词，详见 [Vue 文档 Event Modifiers](https://vuejs.org/guide/essentials/event-handling.html#event-modifiers)