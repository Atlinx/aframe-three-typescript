<script setup lang="ts">
import 'aframe'
import '@/aframe/systems/my-system'
</script>

<template>
  <SectionHeader title="Demo 1"></SectionHeader>
  <SectionBody>
    <p>This is a demo</p>
  </SectionBody>
  <SectionBody>
    <a-scene>
      <a-box></a-box>
      <a-camera></a-camera>
    </a-scene>
  </SectionBody>
</template>
