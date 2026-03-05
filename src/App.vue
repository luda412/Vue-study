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
import { onMounted, onUnmounted, ref } from 'vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import emitter from './shared/eventBus';
import Modal from './components/common/modal.vue';

// 편집 모달 상태
const showEditModal = ref(false)
const editIdx = ref(-1);
const editOriginal = ref('');
const editDraft = ref('');

const todoItems = ref([]);

const loadTodos = ()=> {
  todoItems.value = Object.keys(localStorage)
}

const handleAddTodo = (text) =>{
  //trim 함수는 문자열의 양 끝에 있는 공백을 모두 제거하고 새로운 문자열을 반환한다.
  const res = String(text ?? '').trim();
  if(!res) return;

  //LocalStorage 저장
  localStorage.setItem(res, res);
  
  // 화면 목록 갱신, 중복 방지
  if(!todoItems.value.includes(res)){
    todoItems.value.push(res)
  }
}

const removeTodo = ({item, idx}) => {
  localStorage.removeItem(item)
  todoItems.value.splice(idx, 1)
}

const clearTodo =()=>{
  localStorage.clear();
  todoItems.value = []
}

// 편집 열기 (리스트 클릭 시)
const openEdit = ({item, idx}) =>{
  editIdx.value = idx
  editOriginal.value = item;
  editDraft.value = item;
  showEditModal.value = true;
}

const closeEdit =()=>{
  showEditModal.value = false;
  editIdx.value = -1;
  editOriginal.value = ''
  editDraft.value = ''
}

// 편집 저장
const saveEdit = ()=>{
  const idx = editIdx.value
  const oldText = editOriginal.value
  const newText = String(editDraft.value ?? '').trim()

  if(idx < 0) return

  if(!newText) return

  if(newText === oldText){
    closeEdit();
    return;
  }

  // 중복 방지
  if (todoItems.value.includes(newText)){
    return;
  };

  localStorage.removeItem(oldText)
  localStorage.setItem(newText, newText);

  todoItems.value[idx] = newText;

  closeEdit();
}

// 관련 구독을 모아서 한 번에 등록한다.
// 예를 들어 todo:remove 이벤트가 발생하면 onMounted의 모든 on이 실행되는 것이 아니라 발생한 이벤트에 연결된 핸들러 1개만 실행된다.
onMounted(() =>{
  loadTodos()
  emitter.on('todo:add', handleAddTodo);
  emitter.on('todo:remove', removeTodo);
  emitter.on('todo:clear', clearTodo);
  emitter.on('todo:edit:open', openEdit)
})
onUnmounted(()=>{
  emitter.off('todo:add', handleAddTodo);
  emitter.off('todo:remove', removeTodo);
  emitter.off('todo:clear', clearTodo);
  emitter.off('todo:edit:open', openEdit)
})

</script>

<template>
  <TodoHeader />
  <TodoInput />
  <TodoList :propsdata="todoItems"/>
  <TodoFooter />

  <Modal v-if="showEditModal" @close="closeEdit">
    <template #header>
      <h3>할 일 수정</h3>
    </template>

    <template #body>
      <input v-model="editDraft" type="text" style="width:100%;" @keyup.enter="saveEdit"/>
    </template>

    <template #footer>
      <button class="modal-default-button" @click="closeEdit">취소</button>
      <button class="modal-default-button" @click="saveEdit">저장</button>
    </template>
  </Modal>
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