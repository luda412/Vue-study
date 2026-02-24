<script setup>
import { reactive, ref } from 'vue'

const message = ref('Hello Vue.js')
const state = reactive({
  message: 'Count',
  count:0
})
</script>

<template>
  <h1>{{message}}</h1>
  <h2>{{ state.message }}</h2>
  <p>{{ state.count }}</p>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  text-align: center;
  margin-top: 40px;
}
</style>