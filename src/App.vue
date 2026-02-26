<script setup>
import { RouterView } from 'vue-router';


</script>

<template>
  <div style="max-width: 920px; margin: 0 auto; padding: 20px">
    <RouterView name="header" />
    <hr sytle="margin: 0;" />
    <main style="padding: 20px;" >
      <RouterView />
    </main>
    <hr sytle="margin: 0;" />
    <RouterView name="footer" />
  </div>
</template>

<style scoped>
.active {
  font-weight: 700;
  text-decoration: underline;
}
</style>