# S02P19: Outputting Raw HTML

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/04/25 updated, v3.2.47)



使用 `v-html` 指令可以解析 `HTML` 内容，但容易导致 `CSS` 攻击：例如解析 `raw_url` 为跳转到谷歌的一个超链接，但在控制台手动改为跳转到其他网站。

```js
const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a v-bind:href="https://google.com" target="_blank">Google</a>'
        }
    }
}).mount('#app');
```

注意：前端应对 CSS 攻击的方案有限，更多依赖后端解决。另外就是要确保数据来源安全可信任。
