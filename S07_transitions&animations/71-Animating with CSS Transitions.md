# S07P71: Animating with CSS Transitions



Resources:

- section-7-1-STARTER.zip



## 1 项目准备

`App.vue`：

```vue
<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <h2 v-if="flag">Hello world!</h2>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        flag: false
      }
    },
  }
</script>
```



## 2 添加 Vue 动画

添加标题淡入、淡出效果，时长均为 0.25s。

```vue
<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <transition name="fade">
    <h2 v-if="flag">Hello world!</h2>
  </transition>
</template>
<style scoped>
    .fade-enter-from {
        opacity: 0;
    }
    .fade-enter-active {
        transition: all 0.25s linear;
    }
    .fade-leave-to {
        opacity: 0;
        transition: all 0.25s linear;
    }
</style>
```

