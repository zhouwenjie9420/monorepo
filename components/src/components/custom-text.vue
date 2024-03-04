<script setup lang="ts">
defineProps<{ msg: string; text: string }>();
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ text }}</h1>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
