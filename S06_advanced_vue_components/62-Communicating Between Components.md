# S06P62: Communicating Between Components



本节介绍 Vue 组件的传参：父传子。

假设根组件 App 包含两个子组件 Greeting 和 User，若要将 User 的一个属性 age 传给 Greeting，只能通过 App 往 Greeting 传，User 与 Greeting 之间是不能直接通信的。

父传子是通过 `props` 属性实现的。
