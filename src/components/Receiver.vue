<script setup>
import emitter from '@/eventBus';
import { onMounted, onUnmounted, ref } from 'vue';

const message = ref('')

function handleMessage(data) {
    message.value = data;
}

// 컴포넌트가 마운트될 때 이벤트 등록
onMounted(() => {
    emitter.on('send-message', handleMessage)
})

// 메모리 관리를 위한 off
onUnmounted(()=> {
    emitter.off('send-message', handleMessage)
})
</script>

<template>
    <p>받은 메시지: {{ message }}</p>
</template>