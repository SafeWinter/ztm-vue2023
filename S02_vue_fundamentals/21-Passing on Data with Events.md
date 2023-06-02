# S02P21: Passing on Data with Events

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



Vue 的事件处理函数默认接收一个事件对象（如 `event`）。假如要传入一个自定义的参数，则需要在模板中显式声明事件对象（用 `$event` 表示）：

```vue
<input type="text" :value="lastName" @input="updateLastName('Last name event triggered!', $event)" />
```

同时，按参数顺序在 `methods` 中声明该函数：

```vue
<script>
    const vm = Vue.createApp({
        data() { return { lastName: 'Doe' } },
        methods: {
            updateLastName(data, event) {
                console.log(data);
                this.lastName = event.target.value;
            }
        },
    }).mount('#app');
</script>
```

这里的关键在于显式传入 `$event`；至于 `$event` 位置并不重要。

实际上 `@input` 也可以直接写多个语句，只是不符合最佳实践：

```vue
<input type="text" :value="lastName" 
       @input="console.log('Last name event triggered!'); lastName = $event.target.value;" />
```

