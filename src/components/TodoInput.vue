<!-- 할 일 입력 및 추가 -->
<script setup>
import emitter from '@/shared/eventBus';
import { ref } from 'vue';

const item = ref('')

const addTodo =() =>{
    const res = item.value.trim();
    if(!res) return;
    emitter.emit('todo:add', res)
    clearInput();
}
const clearInput =()=>{
    item.value = '';
}
</script>

<template>
    <div class="inputBox shadow">
        <input type="text" v-model="item" placeholder="Type what you have to do" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<style scoped>
    input:focus{
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size:0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>