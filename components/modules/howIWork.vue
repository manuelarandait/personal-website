<script setup>
const blocks = [
  {
    title: 'Primero el problema, luego el código',
    summary: 'Sin análisis no hay buena solución.',
    body: 'Antes de escribir una línea, entiendo qué necesita realmente tu negocio. Qué procesos tiene, dónde falla, qué tiene que escalar. Esto evita construir algo que funciona técnicamente pero no resuelve el problema real.'
  },
  {
    title: 'Tecnología al servicio de tu negocio',
    summary: 'Elijo lo que mejor encaja, no lo que más me gusta.',
    body: 'He trabajado con Symfony, Vue, Node, Angular y distintas arquitecturas. El stack lo decide el proyecto, no la costumbre. El objetivo es que lo que construyamos sea mantenible y sostenible a largo plazo.'
  },
  {
    title: 'Del análisis al despliegue, sin intermediarios',
    summary: 'Un solo interlocutor durante todo el proyecto.',
    body: 'Acompaño el proyecto desde la definición funcional hasta producción. No hay un comercial que vende y un dev que ejecuta. Hablas directamente con quien construye, y eso cambia la calidad de las decisiones.'
  },
  {
    title: 'Comunicación directa y acuerdos claros',
    summary: 'Sin sorpresas ni letra pequeña.',
    body: 'Valoro la comunicación honesta y los acuerdos claros desde el principio. Si algo no va a funcionar, lo digo antes de empezar. Prefiero un cliente informado a uno contento a corto plazo.'
  }
]
</script>

<template>
  <section id="como-trabajo" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="container mx-auto max-w-5xl">
      <FadeInView>
        <div class="mb-12 sm:mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
            Qué puedes esperar de mí
          </h2>
          <p class="mt-3 text-slate-400 sm:text-lg">
            Cómo trabajo y qué significa eso para tu proyecto.
          </p>
        </div>
      </FadeInView>

      <div class="grid gap-6 sm:grid-cols-2 items-stretch">
        <FadeInView
          v-for="(block, idx) in blocks"
          :key="block.title"
          :delay="idx * 0.08"
          class="h-full min-h-0"
        >
          <div
            class="flex h-full min-h-0 flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-violet-500/30 hover:bg-slate-900/60"
          >
            <h3 class="font-semibold text-slate-100">
              {{ block.title }}
            </h3>
            <p class="mt-1 text-sm text-slate-500">
              {{ block.summary }}
            </p>
            <p class="mt-2 min-h-0 flex-1 text-sm leading-relaxed text-slate-400">
              {{ block.body }}
            </p>
          </div>
        </FadeInView>
      </div>
    </div>
  </section>
</template>