<script setup lang="ts">
const aframeLoaded = ref(false);

if (process.client) {
  await import('aframe');
  await import('@/aframe/systems/my-system');
  aframeLoaded.value = true;
}
</script>

<template>
  <div v-if="aframeLoaded">
    <slot></slot>
  </div>
</template>
