# S06P64: The Limitations of Props



本节讲述了通过 `props` 父传子的两个局限：

- 子组件无法直接修改传入的值；
- 即便修改了传入值，也无法保留变更后的值；一旦父组件更新为另一个值，子组件所作更新将被覆盖。



## 示例演示

App.vue:

```vue
<template>
  <h3>Hey!</h3>
  <greeting :age="age"></greeting>
  <user :age="age"></user>
</template>

<script>
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'

export default {
  name: 'App',
  components: {
    Greeting,
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

Greeting.vue:

```vue
<template>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>You must be older than 25 years old to see the message</p>
</template>
<script>
    export default {
        name: 'Greeting',
        props: ['age'],
        data() {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>
<style scoped lang="scss">
p { color: red; }
</style>
```

User.vue:

```vue
<template>
    <button @click="age++">Update age</button>
    <p>The user is {{ age }} years old!</p>
</template>
<script>
    export default {
        name: 'User',
        props: ['age']
    }
</script>
```

运行结果：

子组件 `User` 中的 `age` 虽然更新了，但不会同步更新到 `Greeting`：（否则 `age` 大于 25 后就会显示问候语）

![limitation of props](../assets/64-1.png)
