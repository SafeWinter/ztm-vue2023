# S02P28: Binding Styles

Resources:

- section-2-19-COMPLETE.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



与 `class` 类的绑定类似，`style` 样式属性的绑定也有两种方式：

- 按对象绑定
- 按数组绑定

> Vue 官方文档：[Class and Style Bindings](https://vuejs.org/guide/essentials/class-and-style.html)（须仔细阅读）
>
> 对 `class` 和 `style` 单独扩展的原因：在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。

示例1：通过一个数值文本框，动态调整页面圆圈的大小

```vue
<template>
<div id="app">
    <label>
        <input type="checkbox" v-model="isPurple" /> Purple
    </label>

    <select v-model="selectedColor">
        <option value="">White</option>
        <option value="text-black">Black</option>
        <option value="text-orange">Orange</option>
    </select>

    <input type="number" v-model="size" />

    <div class="circle" :class="[selectedColor, circle_classes]" :style="{ 
        width: size + 'px', height: size + 'px', lineHeight: size + 'px' 
    }">
        Hi!
    </div>
</div>
</template>
<script>
    let vm = Vue.createApp({
        data() {
            return { 
                isPurple: false,
                selectedColor: '',
                size: 150 // initial size
            }
        },
        computed: {
            circle_classes() {
                return {
                    purple: this.isPurple
                }
            }
        }
    }).mount('#app')
</script>
```

> **注意**
>
> `class` 属性可以与 `:class` 绑定共存，Vue 解析时会自动处理，不必担心有冲突。

由于 `style` 绑定的值过长，改为放入计算属性：

```vue
<div class="circle" :class="[selectedColor, circle_classes]" :style="sizeStyle">
```

对应JS逻辑：

```js
let vm = Vue.createApp({
    data() {
        return { 
            isPurple: false,
            selectedColor: '',
            size: 150 // initial size
        }
    },
    computed: {
        circle_classes() {
            return {
                purple: this.isPurple
            }
        },
        sizeStyle() {
            const sizePx = `${this.size}px`;
            return { 
                width: sizePx, height: sizePx, lineHeight: sizePx 
            }
        }
    }
}).mount('#app')
```

除了调整大小，还想旋转 30° 角，则需要用到数组形式：

```js
let vm = Vue.createApp({
    data() {
        return { 
            isPurple: false,
            selectedColor: '',
            size: 150 // initial size
        }
    },
    computed: {
        circle_classes() {
            return {
                purple: this.isPurple
            }
        },
        sizeStyle() {
            const sizePx = `${this.size}px`;
            return [
                { width: sizePx, height: sizePx, lineHeight: sizePx },
                { transform: 'rotate(30deg)' }
            ]
        }
    }
}).mount('#app')
```

