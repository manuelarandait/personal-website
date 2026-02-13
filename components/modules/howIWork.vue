<script setup>
const blocks = [
  {
    title: 'Análisis antes que código',
    summary: 'Empiezo por entender el problema.',
    body: 'Antes de escribir una línea de código, me aseguro de comprender el contexto, las necesidades reales y las implicaciones técnicas. Esto evita soluciones apresuradas y retrabajo a medio plazo.'
  },
  {
    title: 'Tecnología al servicio del proyecto',
    summary: 'No me caso con un framework.',
    body: 'He trabajado principalmente con Symfony y Vue, pero elijo herramientas en función del contexto, no por inercia. El objetivo es construir soluciones mantenibles y sostenibles, no seguir modas.'
  },
  {
    title: 'Visión end-to-end',
    summary: 'Acompaño el proyecto de principio a fin.',
    body: 'Desde la definición funcional y técnica hasta el despliegue y la evolución del producto. Me implico en todo el ciclo para que las decisiones tengan sentido a largo plazo.'
  },
  {
    title: 'Comunicación clara y responsabilidad',
    summary: 'Trabajo con claridad y criterio.',
    body: 'Valoro la comunicación directa, los acuerdos claros y la responsabilidad compartida. Creo que el buen software se construye con buenas conversaciones, no solo con buenas herramientas.'
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
            Así trabajo, así pienso y así te va a afectar a ti.
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
