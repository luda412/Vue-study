<template>
  <h1>Here is a child component! </h1>
  <ButtonCounter/>
  <ButtonCounter/>
  <ButtonCounter/>
  <TheView />
</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue';
import TheView from './views/TheView.vue';
</script>
