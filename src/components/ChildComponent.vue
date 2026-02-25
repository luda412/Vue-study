<script setup>
// 1. 이벤트 정의
const emit = defineEmits(['dataSent']);

const sendData =()=> {
    // 2. 데이터 전달 (이벤트명, 데이터)
    emit('dataSent', "Hello from Child");
};
</script>

<template>
    <button @click="sendData">데이터 전달</button>
</template>