// 1st Vue instance
Vue.createApp({
  name: 'firstApp',
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  }
}).mount('#app1')

// 2nd Vue instance
Vue.createApp({
  name: 'lastApp',
  data() {
    return {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  }
}).mount('#app2')