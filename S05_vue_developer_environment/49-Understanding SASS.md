# S05P49: Understanding SASS



resources：

- SASS：https://sass-lang.com/
- SASS Color Functions：https://sass-lang.com/documentation/modules/color



## 1 概述

`Sass` 是一款非常强大的语言，出现填补了 `CSS` 的很多不足：支持函数操作、循环遍历数据等



## 2 配置

配置 `Sass` 支持：

```bash
# it's sass, instead of scss
$ npm i sass
$ mv style.css style.scss
```

然后修改 `main.js` 中引用的样式文件：

```js
import './style.scss'
```



## 3 特性示例

示例1：添加 `h1` 与 `h1:hover` 样式（使用 `darken` 函数）

```scss
h1 { color: #CC3342 }
h1:hover { color: darken(#CC3342, 15%) }
```



示例2：添加嵌套样式

修改 `main.js` 第 14 行：

```html
<h1>Hello <span>Vite</span>!</h1>
```

修改 `style.scss`：

```scss
h1 {
    color: #CC3342;
    span {
        color: blue;
    }
    &:hover {
        darken(#CC3342, 15%)
    }
}
```

