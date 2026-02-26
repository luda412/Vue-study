<script setup>
import emitter from '@/shared/eventBus';

const send =()=> {
    emitter.emit('sibling:message', {
        text: 'Hello from SenderSibling', 
        at: Date.now()
    })
}
</script>

<template>
    <button @click="send">형제에게 메시지 보내기</button>
</template>