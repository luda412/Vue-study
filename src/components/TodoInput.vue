<!-- 할 일 입력 및 추가 -->
<script setup>
import emitter from '@/shared/eventBus';
import { ref } from 'vue';
import Modal from './common/modal.vue';

const item = ref('')
const showModal = ref(false);

const addTodo =() =>{
    const res = item.value.trim();
    if(!res){
        showModal.value = true
        return
    }
    emitter.emit('todo:add', res)
    clearInput();
}
const clearInput =()=>{
    item.value = '';
}

const closeModal =()=>{
    showModal.value = false;
}

</script>

<template>
    <div class="inputBox shadow">
        <input type="text" v-model="item" placeholder="Type what you have to do" @keyup.enter="addTodo">
        <span class="addContainer" @click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
        <Modal v-if="showModal" @close="closeModal">
            <template #header>
                <h3>경고</h3>
            </template>
            <template #body>
                <p>할 일을 입력하세요.</p>
            </template>
            <template #footer>
                <button class="modal-default-button" @click="closeModal">OK</button>
            </template>
        </Modal>
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