<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const users = [
    {id: 1, name: 'Luda'},
    {id:2, name: 'kim'},
    {id:3, name:'test'},
]
const goDetail = (id) => {
    router.push({name: 'users.detail', params: {id}})
}
</script>

<template>
    <div>
        <h2>Users List</h2>
        <ul>
            <li v-for="u in users" :key="u.id" style="margin: 8px 0;">
                <span>{{ u.name }}</span>
                <button style="margin-left: 8px;" @click="goDetail(u.id)">상세</button>
            </li>
        </ul>
    </div>
</template>