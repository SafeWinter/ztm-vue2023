# S03P35: Creating a Perspective Playground

Resources:

- section-3-1-STARTER.zip
- **Vue installation** - https://vuejs.org/guide/quick-start.html#using-vue-from-cdn (2023/06/01 updated, v3.3.4)



本节利用 `style` 绑定实现 `input range` 元素值与 `label` 标签文本的同步。

```vue
<div id="app">
    <h2 :style="h2Clr">CSS3 Perspective Playground</h2>
    <main>
        <section class="settings">
            <div class="settings-container">
                <label>perspective: {{perspective}}px;</label>
                <input type="range" min="0" max="999" v-model="perspective" />
                <label>rotateX: {{rotateX}}deg; </label>
                <input type="range" min="-180" max="180" v-model="rotateX" />
                <label>rotateY: {{rotateY}}deg; </label>
                <input type="range" min="-180" max="180" v-model="rotateY" />
                <label>rotateZ: {{rotateZ}}deg; </label>
                <input type="range" min="-180" max="180" v-model="rotateZ" />

                <button type="button" @click.prevent="reset">Reset</button>
                <button type="button" @click.prevent="copy">Copy</button>
            </div>
        </section>
        <section class="output">
            <div class="box-container">
                <div class="box" :style="box"></div>
            </div>
        </section>
    </main>
</div>
<script>
    const vm = Vue.createApp({
        data() {
            return {
                perspective: 100,
                rotateX: 0,
                rotateY: 0,
                rotateZ: 0
            }
        },
        computed: {
            box() {
                return {
                    transform: `
                    	perspective(${this.perspective}px)
                    	rotateX(${this.rotateX}deg)
                    	rotateY(${this.rotateY}deg)
                    	rotateZ(${this.rotateZ}deg)`
                }
            }
        },
        methods: {
            reset() {
                this.perspective = 100;
                this.rotateX = 0;
                this.rotateY = 0;
                this.rotateZ = 0;
            }
        }
    }).mount('#app');
</script>
```

注意：

1. 使用 `v-model` 绑定 `range` 值与 `label` 标签文本；
2. 使用 `style` 绑定实现响应式数据与 `CSS` 样式的关联；
3. 积累 `perspective`、`range`、`transform` 的用法；



> **关于 `perspective`**
>
> 在CSS中，`perspective` 属性用于 **定义 3D 变换中的透视效果**。它控制着一个元素在 3D 空间中的 **观察视角**，从而影响元素的 **透视感** 和 **远近程度**。
>
> 当应用 `perspective` 属性时，它会影响位于该元素之后的所有子元素，使它们在 3D 空间中具有透视效果。通过调整 `perspective` 值，可以改变观察者和元素之间的距离，进而改变元素的视觉表现。
>
> `perspective` 属性的值可以是一个长度值，比如像素(px)或百分比(%)，也可以是 none。较小的值会产生更强烈的透视效果，而较大的值则会减弱透视效果。如果将 `perspective` 应用于一个元素，但没有为其子元素应用其他 3D 变换属性，那么透视效果将不可见。
>
> 下面是一个示例，展示了如何使用 `perspective` 属性创建透视效果：
>
> ```css
> .container { perspective: 1000px; }
> .box { transform: rotateY(45deg); }
> ```
>
> 在上面的示例中，`.container` 类设置了 `perspective` 属性为 `1000px`，创建了一个透视视角。`.box` 类使用 `rotateY` 变换对元素进行旋转，此时透视效果会影响旋转的可见部分，使其呈现出 3D 效果。
>
> 请注意，`perspective` 属性只对应用了 3D 变换的元素起作用，它本身并不会触发元素的 3D 变换效果。要使 3D 变换生效，还需要使用其他的 3D 变换属性，比如`rotateX`、`rotateY`、`translateZ` 等。
