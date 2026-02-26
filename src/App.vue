<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const post = ref(null)
const loading = ref(false)
const error = ref(null)

const simpleGet = async () =>{
  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2')
    post.value = response.data
    console.log(post)
  } catch (error){
    error.value = "에러 발생"
    console.error(error.value)
  }finally{
    loading.value = false
  }
}
</script>

<template>
  <div style="max-width: 920px; margin: 0 auto; padding: 20px">
    
    <RouterView name="header" />
    
    <hr sytle="margin: 0;" />
    
    <main style="padding: 20px;" >
      <button @click="simpleGet">Get 요청</button>
      
      <p v-if="loading">로딩 중...</p>
      <p v-if="error">{{ error }}</p>
      
      <div v-if="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
      <RouterView />
    </main>
    
    <hr sytle="margin: 0;" />
    
    <RouterView name="footer" />
  </div>
</template>

<style scoped>
.active {
  font-weight: 700;
  text-decoration: underline;
}
</style>