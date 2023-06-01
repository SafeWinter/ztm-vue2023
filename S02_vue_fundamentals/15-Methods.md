# S02P15: Methods

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



`methods` 中的函数一般不使用箭头函数（会破坏 `Vue` 的 `Proxy` 代理机制），除非不出现 `this` 关键词。

before:

```html
    <div id="app">
      {{ `${firstName} ${lastName.toUpperCase()}` }}
    </div>
```

with JS:

```js
const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}).mount('#app');
```

after:

```html
    <div id="app">
      {{ fullName() }}
    </div>
```

with JS:

```js
const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        },
    },
}).mount('#app');
```

