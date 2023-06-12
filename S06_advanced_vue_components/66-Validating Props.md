# S06P66: Validating Props



Resources：

- Type Checks：https://vuejs.org/guide/components/props.html#prop-validation



父传子时，写入 `props` 的传参变量可以是一个对象：（根据 Vue 文档）

```js
export default {
  props: {
    // Basic type check
    //  (`null` and `undefined` values will allow any type)
    propA: Number,
    // Multiple possible types
    propB: [String, Number],
    // Required string
    propC: {
      type: String,
      required: true
    },
    // Number with a default value
    propD: {
      type: Number,
      default: 100
    },
    // Object with a default value
    propE: {
      type: Object,
      // Object or array defaults must be returned from
      // a factory function. The function receives the raw
      // props received by the component as the argument.
      default(rawProps) {
        return { message: 'hello' }
      }
    },
    // Custom validator function
    propF: {
      validator(value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // Function with a default value
    propG: {
      type: Function,
      // Unlike object or array default, this is not a factory 
      // function - this is a function to serve as a default value
      default() {
        return 'Default function'
      }
    }
  }
}
```

其中 `type` 的值可以是：

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

此外需要牢记一点：由用户输入并传到 `props` 的值，即便有这些校验规则，仍然可能值的类型不一致。

`default` 与 `required` 不可同时设置。

当类型为 `Object` 或 `Array` 时，`default` 必须是 **函数形式**（详见示例 L21 - L26）

`props` 中的 `validator` 函数早于 `Vue` 实例的创建，因此在 `validator` 内不可访问 `data` 属性、`methods` 属性方法、以及 `computed` 计算属性，否则报错。

