# S02P23: v-model Modifiers

Resources:

- section-2-11-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



本小节介绍 `v-model` 双向绑定的三个修饰符：`.number`、`.trim`、`.lazy`



## 1 `.number`

当一个响应式变量 `age`（假设初始值为 20）双向绑定到一个文本框，此时手动更新文本框中的值，会默认将该变量的类型强制转变为字符型：

```vue
<input type="text" v-model="age" />
```

此时可以使用修饰符 `.number` 保持 age 的类型为数值型（number）：

```vue
<input type="text" v-model.number="age" />
```

保持类型一致可以避免一些因为类型隐式变更而导致的运算异常。



## 2 `.trim`

如果需要在更新变量值后自动消除两边的空白，可以使用双向绑定的 `.trim` 修饰符：

```vue
<input type="text" v-model.trim="firstName" />
```



## 3 `.lazy`

默认情况下，双向绑定到文本框的变量值，在每次按键结束时都会实时更新。如果不需要，可以使用 `.lazy` 修饰符，使得文本框在失焦点时才更新绑定的值：

```vue
<input type="text" v-model.lazy="firstName" />
```

此外，修饰符也可以同时使用：

```vue
<input type="text" v-model.lazy.trim="firstName" />
```



