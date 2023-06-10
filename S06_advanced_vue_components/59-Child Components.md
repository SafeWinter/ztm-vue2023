# S06P59: Child Components



本节介绍了两种创建组件的方式：全局方式、本地方式。



## 1 全局方式

`main.js`：（L3、L5）

```js
import { createApp } from 'vue'
import App from './App.vue'
import Greeting from './component/Greeting.vue'
let vm = createApp(App);
vm.component('Greeting', Greeting)
vm.mount('#app');
```



## 2 本地方式

`App.vue`：

```js
import Greeting from '@/components/Greeting.vue'

export default {
  name: 'App',
  components: {
    Greeting,
  },
}
```

注意：指定 `name` 可方便调试。
