# S02P16: Directives

Resources:

- section-2-1-STARTER.zip
- section-2-1-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



`v-cloak` 是 `Vue.js` 的一个指令，用于在 `Vue` 实例还未完全加载时隐藏模板中的原始内容，防止页面出现闪烁的情况。

具体来说，`v-cloak` 指令可以和 `CSS` 配合使用，通过设置一些 `CSS` 规则来隐藏模板中的原始内容，直到 `Vue` 实例完成加载并替换原始内容为渲染后的内容后，再将 `CSS` 规则移除，显示渲染后的内容。

使用 `v-cloak` 指令的方式很简单，只需要在需要隐藏的元素上添加 `v-cloak` 属性即可。例如：

```html
<div v-cloak>
    {{ message }}
</div>
```

然后在CSS中添加如下规则：

```css
[v-cloak] {
    display: none;
}
```

这样，在 `Vue` 实例完成加载前，`div` 元素将被隐藏起来，直到 `Vue` 实例完成加载后，才会显示出来。

需要注意的是，`v-cloak` 指令必须和 `CSS` 配合使用，否则无法达到隐藏原始内容的效果。
