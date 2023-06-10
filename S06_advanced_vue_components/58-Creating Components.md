# S06P58: Creating Components

本节演示了根组件 `App.vue` 的创建。

`App.vue`

```vue
<template>
  <p>{{msg }}</p>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Hello World!'
        }
    }
}
</script>
```

