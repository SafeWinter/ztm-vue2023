# S02P23: Keyboard Events and Modifiers

Resources:

- section-2-11-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



Vue3 官方文档：[Key Modifiers](https://vuejs.org/guide/essentials/event-handling.html#key-modifiers)

- 按 <kbd>Enter</kbd> 键时才触发 `keyup` 事件：

```vue
<input type="text" :value="middleName" @keyup.enter="updateMiddleName" />
```

- 单击时按下 <kbd>Alt</kbd> 才生效：

```vue
<button type="button" @click.alt="age--">Decrement</button>
```

常见的按键修饰符：

- `.enter`
- `.tab`
- `.delete` (捕获 <kbd>Delete</kbd> 和 <kbd>Backspace</kbd> 两个按键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

系统按键修饰符：

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`