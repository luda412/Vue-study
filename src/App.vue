<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const isLoggedIn = computed(() => localStorage.getItem('demo.loggedIn') === 'ture')

const toggleLogin = async () => {
  localStorage.setItem('demo.loggedIn', String(!isLoggedIn.value))
  await router.replace(route.fullPath)
}
</script>

<template>
  <div style="max-width: 920px; margin: 0 auto; padding: 20px">
    <header style="display: flex; justify-content: space-between; align-items:center;">
      <nav style="display: flex; gap:12px; align-items: center;">
        <!-- RouterLink를 통한 경로 이동 -->
        <RouterLink to="/" active-class="active">Home</RouterLink>
        <RouterLink to="/event-bus" active-class="active">EventBus</RouterLink>
        <RouterLink to="/the" active-class="active">TheView</RouterLink>
        <RouterLink to="/users" active-class="active">Users(카드)</RouterLink>
      </nav>

      <button @click="toggleLogin">
        {{ isLoggedIn ? 'Logout(데모)' : 'Login(데모)' }}
      </button>
    </header>

    <hr style="margin: 16px 0;" />
    
    <!-- router view -->
     <RouterView v-slot="{Component}">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
     </RouterView>
  </div>
</template>

<style scoped>
.active {
  font-weight: 700;
  text-decoration: underline;
}
</style>