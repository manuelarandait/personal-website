<script setup>
</script>

<template>
  <div>
    <modules-hero-banner />
    <span class="gradient" />
  </div>
</template>
<style scoped>
.gradient {
  position: fixed;
  top: 25vh;
  width: 100%;
  height: 40vh;
  background: radial-gradient(50% 50% at 50% 50%, #03814d 0%, rgba(0, 220, 130, 0) 100%);
  filter: blur(180px);
  opacity: 1;
  z-index: 1;
}
</style>