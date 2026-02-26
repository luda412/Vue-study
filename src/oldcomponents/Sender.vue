<script setup>
import emitter from '@/shared/eventBus';


function sendMessage(){
    emitter.emit('send-message', "Hello from Sender")
}
</script>

<template>
    <button @click="sendMessage">
        형제에게 메시지 보내기
    </button>
</template>