<template>
  <div class="relative min-h-screen bg-slate-950 text-slate-100 antialiased">
    <!-- Fondo: grid + gradiente fijo en el centro -->
    <div class="bg-effects pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div class="bg-effects__grid" />
      <div class="bg-effects__glow" />
    </div>
    <div class="relative z-10">
      <nav-bar />
      <main>
        <nuxt-page />
      </main>
      <the-footer />
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
