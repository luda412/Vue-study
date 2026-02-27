<!-- 할 일 모두 삭제 -->
<script setup>
const clearTodo =()=>{
    localStorage.clear();
}
</script>

<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
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
        display: black;
    }
</style>