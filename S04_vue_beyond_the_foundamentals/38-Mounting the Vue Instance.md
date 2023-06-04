# S04P38: Mounting the Vue Instance

Resources:

- section-4-1-STARTER.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



何为 `mount`（挂载）？

The process of Vue inserting itself into the document is called mounting.



创建 `Vue` 实例不必非与 `mount` 方法连用不可。可以根据需要稍后挂载：

```js
// way 1 (chainable)
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
}).mount('#app');

// way 2 (sync)
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
});
vm.mount('#app')

// way 3 (async)
let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
});
setTimeout(() => vm.mount('#app'), 3000);
```

