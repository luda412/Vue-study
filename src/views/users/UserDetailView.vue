<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()
const router = useRouter()

const userId = computed(() => Number(route.params.id))

const back = () => router.push({name: 'users.list'})
</script>

<template>
    <div>
        <h2>User Detail</h2>
        <p>현재 유저 ID: {{ userId }}</p>
        <button @click="back">목록으로</button>
    </div>
</template>