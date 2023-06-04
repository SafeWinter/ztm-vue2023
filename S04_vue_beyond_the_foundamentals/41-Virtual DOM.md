# S04P41: Virtual DOM

Resources:

- section-4-3-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



## 1 What does complie mean?

**To compile is to take in something and convert it into something else.** 

In programming world, it usually means **to take in your code and convert it into other code so that another program can understand**.

e.g. JavaScript code is complied into machine code by web browser.



## 2 Vue 的编译过程

Vue 编译的目标是 Vue 模板，在执行 `mount` 方法时，Vue 会扫描模板中的内容（表达式 `expressions`、指令 `directives`、各类绑定 `bindings` 等等）。将其以文本形式传入并转化为一个对象：

```vue
<h1 class="blue">
    Hello World
</h1>
```

编译后变为：

```js
{
    tag: 'h1',
    attributes: {
        class: 'blue'
    },
    content: 'Hello World'
}
```

更复杂一点的例子（带嵌套 DOM 元素）：

```vue
<h1 class="blue">
    <span>
    	Hello World
    </span>
</h1>
```

编译后变为：

```js
{
    tag: 'h1',
    attributes: {
        class: 'blue'
    },
    content: [
        {
            tag: 'span',
            attributes: {},
            content: 'Hello World'
        }
    ]
}
```



## 3 为什么需要编译

两个主要原因：

- 易于管理
- 提升性能（尤其对大型应用）