<script setup>
import emitter from '@/shared/eventBus';

const notifyAncestor = () => {
    emitter.emit('ancestor:notify', {
        from: 'DeepChild',
        text: '조상에게 데이터 보내기',
        at: Date.now(),
    })
}
</script>
<template>
    <button @click="notifyAncestor">조상에게 보내기</button>
</template>