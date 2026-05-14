<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'firstApp'
})

const firstName = ref('John')
const lastName = ref('Doe')
</script>

<template>
  <div class="box">
    <h1>First Vue Instance</h1>
    <p>{{ firstName }} {{ lastName }}</p>
  </div>
</template>

<style scoped></style>
