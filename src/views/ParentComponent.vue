<script setup>
import ChildComponent from '@/components/ChildComponent.vue';
import { ref } from 'vue';


const message = ref('');

// 3. 데이터 수신 핸들러
const handleData = (data)=>{
    message.value = data;
    console.log(data); // expect 'Hello from Child'
};
</script>

<template>
    <p>자식 데이터: {{ message }}</p>
    <!-- 4. 이벤트 청취 -->
    <ChildComponent @data-sent="handleData" />
</template>