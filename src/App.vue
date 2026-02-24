<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js!',
      showComponet: false
    }
  }
}
</script>

<template>
  
  <button @click="showComponet = true">
    컴포넌트 등록
  </button>

  <MyComponent v-if="showComponet"></MyComponent>
  
  <h1>{{message}}</h1>
</template>

<style scoped>
</style>