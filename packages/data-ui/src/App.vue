<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { customText } from "@common/components";
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <customText msg="556677" text="8899" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
