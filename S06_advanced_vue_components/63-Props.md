# S06P63: Props



本节演示：怎样通过 props 属性，将父组件的 age 传给子组件中渲染。

`App.vue`：

```vue
<template>
  <h3>Hey!</h3>
  <user :age="age"></user>
</template>
<script>
import User from '@/components/User.vue'
export default {
  name: 'App',
  components: {
    User
  },
  data() {
    return {
      age: 20
    }
  }
}
</script>
```

`User.vue`：

```vue
<template>
    <p>The user is {{ age }} years old!</p>
</template>
<script>
    export default {
        name: 'User',
        props: ['age']
    }
</script>
```

通过 Vue DevTools 可以手动修改父组件 age 的值，观察页面，子组件也会同步更新。
