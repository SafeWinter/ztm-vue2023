# S05P49: Understanding SASS



resources：

- SASS：https://sass-lang.com/
- SASS Color Functions：https://sass-lang.com/documentation/modules/color



## 1 概述

`Sass` 是一款非常强大的语言，出现填补了 `CSS` 的很多不足：支持函数操作、循环遍历数据等

> 来自 ChatGPT 的介绍
>
> `Sass`（Syntactically Awesome Style Sheets）是一种层叠样式表（`CSS`）的预处理器，它扩展了CSS并增加了一些额外的功能和功能。Sass允许开发者使用一种更简洁、更灵活的语法来编写样式表，并提供了许多有用的功能，如变量、嵌套、混合（`mixins`）、继承（`inheritance`）和模块化等。
>
> `Sass` 可以帮助前端开发者更高效地编写和管理样式表。以下是一些 `Sass` 的主要功能：
>
> 1. 变量：`Sass` 允许定义变量以存储颜色、字体、尺寸等重复使用的值。这样一来，如果需要修改某个值，只需更新变量的定义，而不必逐个修改所有引用该值的地方。
> 2. 嵌套：`Sass` 允许在样式规则中进行嵌套，使得样式表的层级结构更清晰、更易读。嵌套还可以避免重复书写选择器。
> 3. 混合（`Mixins`）：混合是一种将一组样式规则重用于多个选择器的方式。通过定义混合，可以在需要的地方调用它，并将其样式应用于相应的选择器。
> 4. 继承：`Sass` 支持继承样式规则，可以通过 `@extend` 关键字实现。这使得开发者可以从一个选择器继承样式，减少代码重复并提高样式表的可维护性。
> 5. 导入：`Sass` 允许将样式表拆分成多个文件，并使用 `@import` 将它们导入到主样式表中。这样可以更好地组织和管理样式文件。
> 6. 模块化：`Sass` 支持将样式表分割成模块，每个模块专注于特定的组件或功能。这样可以提高代码的可维护性和复用性。
>
> 需要注意的是，`Sass` 是一种预处理器，它需要在编译阶段将 `Sass` 代码转换为浏览器可理解的 `CSS` 代码。通常，开发者可以使用命令行工具、构建工具或与其他前端工具集成，将 `Sass` 代码编译为 `CSS`，并在网页中使用编译后的 `CSS` 样式表。



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

