<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
    this.message = 'Hello Vue!'
  },
  updated() {
    this.messge = 'again'
    console.log('updated')
  }
}
</script>

<template>
  <title>Vue Instance Lifecycle</title>
  <h1>{{message}}</h1>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  text-align: center;
  margin-top: 40px;
}
</style>