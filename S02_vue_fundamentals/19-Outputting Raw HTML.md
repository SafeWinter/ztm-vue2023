# S02P19: Outputting Raw HTML

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



使用 `v-html` 指令可以解析 `HTML` 内容，但容易导致 `XSS` 攻击（`Cross Site Scripting`）：例如解析 `raw_url` 为跳转到谷歌的一个超链接，但在控制台手动改为跳转到其他网站。

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

`XSS` 攻击的一种常见方式是诱导用户将网页内容复制到控制台，以便暴露应用程序的数据结构，执行高危脚本。例如，在浏览器控制台通过手动修改 `vm.raw_url = '<a v-bind:href="https://bing.com" target="_blank">Google</a>'`，表面上页面没有改动，但跳转的却是 Bing 的首页。

注意：前端应对 CSS 攻击的方案有限，更多依赖后端解决。另外就是要确保数据来源安全可信任。
