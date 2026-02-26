<script setup>
import emitter from '@/shared/eventBus';
import { onMounted, onUnmounted, ref } from 'vue';

const lastMessage = ref('(아직 없음)')

const handler = (payload) =>{
    lastMessage.value = `${payload.text} / ${new Date(payload.at).toLocaleTimeString()}`
}

onMounted(() => {
    emitter.on('sibling:message', handler)
})

onUnmounted(()=> {
    emitter.off('sibling:message', handler)
})
</script>

<template>
    <div style="margin-top: 12px;">
        <strong>RecevierSibling:</strong> {{ lastMessage }}
    </div>
</template>