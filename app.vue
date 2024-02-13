<template>
  <div class="bg-gradient-to-t from-slate-950 to-slate-800 min-h-screen mx-auto max-w-8xl text-white">
    <nav-bar />
    <nuxt-page />
    <the-footer />
  </div>
</template>
<script setup>
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>