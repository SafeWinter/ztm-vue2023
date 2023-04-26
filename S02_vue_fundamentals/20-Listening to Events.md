# S02P20: Listening to Events

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/04/25 updated, v3.2.47)



## 1. v-on 指令

两种写法：

- `<input v-on:click="clickMethod">abc</input>`
- `<input v-on:click="age--">abc</input>`

其中，`clickMethod` 需要在 `methods` 定义：

```js
const vm = Vue.createApp({
    data() {
        return {
            age: 20,
        }
    },
    methods: {
        increment() {
            this.age++;
        },
    },
}).mount('#app');
```



## 2. v-model 双向绑定的拆解

`v-model` 双向绑定指令的底层也是用的 `v-bind`，例如：

```vue
<template>
<div id="app">
    <input type="text" v-model="lastName" />
</div>
</template>
```

等效于：

```vue
<template>
<div id="app">
    <input type="text" v-bind:value="lastName" v-on:input="updateLastName" />
</div>
</template>
<script>
	const vm = Vue.createApp({
        data() {
            return {
                lastName: 'Doe'
            }
        },
        methods: {
            updateLastName(event) {
                this.lastName = event.target.value;
            }
        },
    }).mount('#app');
</script>
```

也等效于：

```vue
<template>
<div id="app">
    <input type="text" v-bind:value="lastName" v-on:input="lastName = $event.target.value"/>
</div>
</template>
<script>
	const vm = Vue.createApp({
        data() {
            return {
                lastName: 'Doe'
            }
        }
    }).mount('#app');
</script>
```

分开写可以对双向绑定过程做更精细的控制。但一般情况下使用 `v-model` 可以让代码更简洁。

`v-model` 可以理解为一个语法糖（syntactic sugar）。



## 
