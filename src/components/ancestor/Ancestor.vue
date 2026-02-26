<script setup>
import emitter from '@/shared/eventBus';
import { onMounted, onUnmounted, ref } from 'vue';
import ParentLayer from './ParentLayer.vue';


const log = ref([]);

const handler = (payload)=>{
    log.value.unshift(
        `${payload.from}: ${payload.text} (${new Date(payload.at).toLocaleTimeString()})`
    )
}

onMounted(() => {
    emitter.on('ancestor:notify', handler)
})
onUnmounted(()=> {
    emitter.off('ancestor:notify', handler)
})
</script>

<template>
    <div style="padding: 12px; border: 2px solid #333">
        <h2>Ancestor (조상)</h2>

        <div style="margin: 12px 0;">
            <h4>수신 로그</h4>
            <ul>
                <li v-for="(item, idx) in log" :key="idx">{{ item }}</li>
            </ul>
        </div>

        <ParentLayer />
    </div>
</template>