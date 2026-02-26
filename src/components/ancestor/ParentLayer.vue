<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import DeepChild from './DeepChild.vue';
import emitter from '@/shared/eventBus';

const log = ref([]);

const handler = (payload) => {
    log.value.unshift(
        `${payload.from}: ${payload.text} (${new Date(payload.at).toLocaleTimeString()})`
    )
}
onMounted(()=>{
    emitter.on('ancestor:notify', handler)
})
onUnmounted(()=>{
    emitter.off('ancestor:notify', handler)
})
</script>
<template>
    <div style="padding: 12px; border: 1px solid #ddd; margin-top: 12px">
        <h4>ParnetLayer (중간)</h4>
        <div style="margin: 12px 0;">
            <h4>수신 로그</h4>
            <ul>
                <li v-for="(item, idx) in log" :key="idx">{{ item }}</li>
            </ul>
        </div>
        <DeepChild />
    </div>
</template>
