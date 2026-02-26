<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()
const router = useRouter()

const isLoggedIn = computed(() => localStorage.getItem('demo.loggedIn') === 'true')

const toggleLogin = async () => {
  localStorage.setItem('demo.loggedIn', String(!isLoggedIn.value))
  await router.replace(route.fullPath)
}

</script>
<template>
    <header class="header">
        <nav class="nav">
            <RouterLink to="/" active-class="active">Home</RouterLink>
            <RouterLink to="/event-bus" active-class="active">EventBus</RouterLink>
            <RouterLink to="/the" active-class="active">TheView</RouterLink>
            <RouterLink to="/users" active-class="active">Users(카드)</RouterLink>
        </nav>
        <button class="login-btn" @click="toggleLogin">{{ isLoggedIn ? 'Logout(데모)' : 'Login(데모)' }}</button>
    </header>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

.nav {
  display: flex;
  gap: 14px;
}

.active {
  font-weight: 700;
  text-decoration: underline;
}

.login-btn {
  padding: 6px 12px;
  cursor: pointer;
}
</style>