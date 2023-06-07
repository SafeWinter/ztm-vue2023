# S05P51: Installing ESLint



Resources:

- `ESLint`: https://eslint.org/



## 1 ESLint 简介

（来自 `ChatGPT`）

`ESLint` 是一种用于静态代码分析的工具。它用于检测 `JavaScript` 代码中的潜在问题和编码规范的违规情况。`ESLint` 可以帮助开发者在开发过程中发现和纠正常见的代码错误，并确保代码风格的一致性。

`ESLint` 可以通过配置文件指定所需的规则集和检查规则的严格程度。规则可以涵盖代码风格、错误检测、最佳实践等方面。开发者可以根据项目需求和个人偏好，自定义 `ESLint` 的规则配置。

`ESLint` 的工作原理是先解析 `JavaScript` 代码，然后根据配置的规则对代码进行遍历和检查。当发现不符合规则的代码时，`ESLint` 会输出相应的警告或错误信息，帮助开发者及时发现潜在的问题，并提供建议修复方法。

`ESLint` 的主要功能包括：

1. 代码错误检测：`ESLint` 可以检测常见的 `JavaScript` 代码错误，例如未声明的变量、使用了已弃用的语法等。

2. 代码风格一致性：通过配置适当的规则，`ESLint` 可以确保代码风格的一致性，包括缩进、空格、换行等方面的约定。

3. 最佳实践检查：`ESLint` 可以检查代码中的最佳实践，帮助开发者避免潜在的问题和漏洞。

4. 可扩展性和插件生态系统：`ESLint` 支持通过插件扩展其功能。开发者可以选择并配置各种插件，以满足特定项目的需求。

使用 `ESLint` 可以提高代码质量和可维护性，以及团队成员之间的协作效率。它通常与其他开发工具（如代码编辑器、构建工具等）集成，以便在开发过程中实时检测代码问题并给出反馈。



## 2 安装方法

由于 `Vite` 默认不支持 `ESLint`，需要安装 `ESLint` 到本地后，手动集成的 `Vite` 项目：

```bash
# install ESLint
$ npm i eslint -D
# install Vite's support plugin for ESLint
# DON'T forget to add --force flag
$ npm i vite-plugin-eslint -D --force
```

新增 `Vite` 配置文件 `vite.config.js`：

```js
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [ eslint() ]
});
```

注意：第一行使用了 `defineConfig` 来增强自动提示（如 `plugins`），以免手误。

重新运行项目可能会报错，这可能是由于缺少 `ESLint` 的配置文件所致。

下一节将简单介绍 `ESLint` 的基础配置。