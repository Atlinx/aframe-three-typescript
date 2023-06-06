<script setup lang="ts">
const aframeLoaded = ref(false);

if (process.client) {
  await import('aframe');
  await import('@/aframe/systems/my-system');
  aframeLoaded.value = true;
}
</script>

<template>
  <SectionHeader title="Demo 1">
  </SectionHeader>
  <SectionBody>
    <a-scene v-if="aframeLoaded" embedded style="height: 40em">
      <a-box position="0 0.5 -3"></a-box>
      <a-camera></a-camera>
      <a-sky color="pink"></a-sky>
    </a-scene>
  </SectionBody>
</template>
