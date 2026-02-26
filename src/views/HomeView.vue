<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <section>
        <h1>Home</h1>
        <p>query redirect: {{ route.query.redirect ?? '(없음)' }}</p>
        <p>
            Uers 메뉴는 <code>requiresAuth</code>가 걸려있어서,
            Login(데모)을 누르기 전엔 홈으로 리다이렉트됩니다.
        </p>
    </section>
</template>