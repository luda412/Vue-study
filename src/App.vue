<!-- <script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import Temp from './temp.vue';

const keyword = ref('')
const result = ref([])


const axiosPost = ref(null)
const fetchPost = ref(null)

const axiosLoading = ref(false)
const fetchLoading = ref(false)

const errorAxios = ref(null)
const errorFetch = ref(null)

watch(keyword, async (newValue) =>{
  if(!newValue) return
  
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${newValue}`)
  result.value = res.data
})


const simpleGet = async () =>{
  axiosLoading.value = true;
  errorAxios.value = null;

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2')
    axiosPost.value = response.data
    console.log(axiosPost)
  } catch (err){
    errorAxios.value = "에러 발생"
    console.error(err)
  }finally{
    axiosLoading.value = false
  }
}

const getByFetch =async () =>{
  fetchLoading.value = true;
  errorFetch.value = null;
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    
    if(!response.ok){
      throw new Error(`Error ${response.status}`)
    }
    
    const data = await response.json()
    fetchPost.value = data
    console.log('Response By Fetch Method', data)
  } catch (err){
    errorFetch.value = '에러 발생'
    console.error(err)
  } finally {
    fetchLoading.value = false
  }
}
const popupAlert =()=>{
  alert('경고 창 표시')
}
</script> -->

<!-- <template>
  <!-- <div style="max-width: 920px; margin: 0 auto; padding: 20px">
    
    <RouterView name="header" />
    
    <hr sytle="margin: 0;" />
    
    <main style="padding: 20px;" >
      <div>
        <input v-model="keyword" placeholder="userId 입력" />

        <ul>
          <li v-for="item in result" :key="item.id">
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div>
        <button @click="simpleGet">Get 요청</button>
      
        <p v-if="axiosLoading">로딩 중...</p>
        <p v-if="errorAxios">{{ errorAxios }}</p>
        
        <div v-if="axiosPost">
          <h3>{{ axiosPost.title }}</h3>
          <p>{{ axiosPost.body }}</p>
        </div>
      </div>
      <div>
        <button @click="getByFetch">Get 요청 Fetch 방법</button>
        <p v-if="fetchLoading">로딩 중...</p>
        <p v-if="errorFetch">{{ errorFetch }}</p>
        
        <div v-if="fetchPost">
          <h3>{{ fetchPost.title }}</h3>
          <p>{{ fetchPost.body }}</p>
        </div>
      </div>
      <RouterView />
    </main>
    <button v-on:click="popupAlert">경고 창 버튼</button>
    
    <hr sytle="margin: 0;" />
    
    <div>
      <Temp />
    </div>
    <RouterView name="footer" />
  </div> -->
<!-- </template> --> 

<!-- <style scoped>
.active {
  font-weight: 700;
  text-decoration: underline;
}
</style> -->

<script setup>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';


</script>

<template>
  <TodoHeader />
  <TodoInput />
  <TodoList />
  <TodoFooter />
</template>

<style>
body{
    text-align: center;
    background-color: #F6F6F8;
}
input{
    border-style: groove;
    width:200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.3);
}
</style>