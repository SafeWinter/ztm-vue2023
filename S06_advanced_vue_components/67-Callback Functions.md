# S06P67: Callback Functions



Resources：

- section-6-13-COMPLETE.zip



## 1 传参为一个回调函数

由于 `Function` 在 `JavaScript` 中是一等公民，父传子时传递的值也可以是一个函数：（`updateAgeCB`）

父组件 `App.vue`：

```vue
<template>
  <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>
</template>
<script>
import User from "@/components/User.vue";
export default {
  name: "App",
  components: {
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>
```

子组件 `User.vue`：

```vue
<template>
  <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
  <p>{{ ageDoubled }}</p>
</template>
<script>
export default {
  name: "User",
  props: {
    ageChangeFn: Function,
  },
};
</script>
```



## 2 传回调函数的弊端

不利于调试，`DevTools` 中看不到相关响应式变量信息，甚至不会进到控制台通过 `console.log` 调试；而通过 `event` 事件方式则可以通过 `DevTools` 的 `Timeline` 监听变量状态。故推荐使用 `event` 事件。

回调函数也好、事件发送也罢，两者并没有性能上的显著差别，根据个人喜好选择即可。回调函数只是提供了另一种传参思路。

