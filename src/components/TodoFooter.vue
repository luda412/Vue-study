<!-- 할 일 모두 삭제 -->
<script setup>
import emitter from '@/shared/eventBus';

const onClear =()=>{
    emitter.emit('todo:clear')
}
</script>

<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="onClear">Clear All</span>
    </div>
</template>
<style scoped>
    .clearAllContainer{
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
    }
    .clearAllBtn {
        color: #e20303;
        display: block;
    }
</style>