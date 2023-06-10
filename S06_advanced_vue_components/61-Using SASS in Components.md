# S06P61: Using SASS in Components



本节介绍在 `Vue` 组件中使用 `Sass` 的方法。

首先添加 `Sass` 依赖：

```bash
$ npm i sass -D
```

然后修改 `style` 标签，如设置 p 标签悬停时变为暗红色：

```vue
<style scoped lang="scss">
    p:hover {
        color: darken(#CC3342, 15%)
    }
</style>
```

Vue CLI 项目天生支持 [PostCSS](http://postcss.org/)、[CSS Modules](https://github.com/css-modules/css-modules) 和包含 [Sass](https://sass-lang.com/)、[Less](http://lesscss.org/)、[Stylus](http://stylus-lang.com/) 在内的预处理器。

