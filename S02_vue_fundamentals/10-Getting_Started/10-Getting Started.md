# S02P10: Getting Started



> [!tip]
>
> - 课件详见 `code` 文件夹
> - Vue Installation - https://vuejs.org/guide/quick-start.html#without-build-tools (deprecated)
> - **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (`2023/06/01` updated, `v3.3.4`; `2026/05/14` updated, `v3.5.34`)
>
> 本节录制时间为 2020 年 11 月 4 日，当时 Vue 的最新版为 `v3.0.2`，对应的 `NodeJS` 版本为 `v15.1.0`。



import Vue 3 from a CDN: (`2023/06/01` updated, `v3.3.4`)

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

create Vue 3 instance:

```js
Vue.createApp({}).mount('#app');
```

