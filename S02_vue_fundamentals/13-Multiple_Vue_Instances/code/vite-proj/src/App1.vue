<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'lastApp'
})

const firstName = ref('Jane')
const lastName = ref('Doe')
</script>

<template>
  <div class="box">
    <h1>Second Vue Instance</h1>
    <p>{{ firstName }} {{ lastName }}</p>
  </div>
</template>

<style scoped></style>
