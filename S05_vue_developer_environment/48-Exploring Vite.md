# S05P48: Exploring Vite



本节主要讲解 Vite 示例项目的基本操作。

## 1 主入口

主入口是指负责启用项目的文件。`Vite` 的主入口为 `index.html` 文件：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```



## 2 CSS 的解析

注意观察，`index.html` 中并没有引入 `CSS` 样式文件。样式是通过 `main.js` 引入的（第 1 行）：

```js
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
```

注意：

1. 两个图标文件，JS 图标在当前目录下，Vite 图标在 public 文件夹下，相当于静态资源；
2. 所有模块都是 ES 模块导入语法；
3. 第一行引入的 CSS 会被打包为单独的样式文件



## 3 项目运行

只有引入主入口文件的其他文件会被打包。如果删除 `main.js` 中引入 `CSS` 的语句，打包后也不会包含任何 `CSS` 文件。

三个常见命令：`npm run {command}`

- `dev`: 本地调试用，开发调试用，默认服务：`http://localhost:5173`
- `build`: 将项目按 `Vite` 打包到 `dist` 目录
- `preview`: 预览只针对已打包的情况，目的是启动构建目录下的服务器，且不会监听项目内容的变化；默认本地服务：`http://localhost:4173`

