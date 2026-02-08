<script setup>
const root = ref(null)
const isVisible = ref(false)

const props = defineProps({
  /** Delay en segundos para efecto escalonado (ej: 0.1) */
  delay: { type: [Number, String], default: 0 },
  /** Etiqueta HTML a renderizar (ej: "li" para listas) */
  tag: { type: String, default: 'div' },
})

onMounted(() => {
  if (import.meta.server || !root.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) isVisible.value = true
    },
    { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
  )
  observer.observe(root.value)
})
</script>

<template>
  <component
    :is="tag"
    ref="root"
    class="fade-in-on-view"
    :class="{ 'is-visible': isVisible }"
    :style="{ '--fade-delay': typeof delay === 'number' ? `${delay}s` : delay }"
  >
    <slot />
  </component>
</template>
