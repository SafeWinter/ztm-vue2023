# S06P57: Reviewing the Files

本节为初创项目 `components` 的逐文件介绍。

这些文件包括：

- `.gitignore`：`Git` 版本管理忽略文件。

- `index.html`：项目入口。

- `package.json`：`Node` 项目配置文件。由于 `Vite` 默认不支持 `Vue`，因此需要引入 `vite` 的 `vue` 扩展插件 `@vitejs/plugin-vue`

- `README.md`：项目说明文档。包括运行方法等文档信息。

- `vite.config.js`：`Vite` 配置文件。通过引入 `defineConfig` 增强代码提示功能，并将 `vue` 以插件形式集成进 `vite` 中。默认配置中并未包含 `PostCSS`，后续会讲。

- 路径别名的配置：使用 `@` 替换项目 `src` 路径（该配置仅对 `vite` 环境生效）：（第 5 行）

  ```js
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
  ```

文件夹方面：

- `node_modules`：第三方库、JS模块
- `public`：默认只包含项目图标文件
- `src`：核心文件夹
  - `main.js`：创建并挂载 `Vue` 应用实例的地方。
  - `App.vue`：项目默认的根节点组件，`VSCode` 通过安装 `Volar` 插件可激活 `Vue` 语法高亮。每次刷新页面，浏览器会自动发送一个 `App.vue` 的请求，目的是将 Vue 模板转化为一个渲染函数：（后续逐步深入）

请求响应的渲染函数（摘选）：

```js
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_greeting = _resolveComponent("greeting")
  const _component_user = _resolveComponent("user")

  return (_openBlock(),
  _createElementBlock(_Fragment, null, [_hoisted_1, _createCommentVNode(" <button @click=\"age++\">Update age</button> "), _createVNode(_component_greeting, {
    age: $data.age
  }, null, 8 /* PROPS */
  , ["age"]), _createVNode(_component_user, {
    age: $data.age,
    onChangeAge: $options.changeAge,
    demoCb: $options.appFn
  }, null, 8 /* PROPS */
  , ["age", "onChangeAge", "demoCb"])], 64 /* STABLE_FRAGMENT */
  ))
}
```
