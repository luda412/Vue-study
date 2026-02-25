<template>
    <div>
        <label>Title</label>
        <input v-model="title" placeholder="제목 입력"/>


        <label>Contents</label>
        <textarea v-model="contents" placeholder="내용 입력"></textarea>

        <hr/>
        <!-- 부모 state를 자식에게 props로 전달 -->
        <AppCard :title="title" :contents="contents"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AppCard from '@/components/AppCard.vue';

const title = ref('')
const contents = ref('')
</script>

<!-- 부모 컴포넌트 TheView에서 자식 컴포넌트인 AppCard에 title, content 전달 -->