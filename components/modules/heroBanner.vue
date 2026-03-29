<script setup lang="ts">
import { Typed } from '@duskmoon/vue3-typed-js'
import type { TypedOptions } from '@duskmoon/vue3-typed-js'

const options: TypedOptions = {
  strings: [
    'ERPs y gestión interna a medida',
    'Plataformas que escalan con tu negocio',
    'Del análisis al despliegue, sin intermediarios',
    'CRMs propios que se adaptan a cómo trabajáis',
  ],
  loop: true,
  typeSpeed: 55,
  backSpeed: 35,
  backDelay: 1400,
}

const prefersReducedMotion = ref(true)
onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<template>
  <section class="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pt-20">
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"
      aria-hidden="true"
    />

    <FadeInView>
      <div class="container relative mx-auto max-w-5xl">
        <div class="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-14">

          <!-- Foto circular pequeña -->
          <div class="shrink-0">
            <NuxtImg
              class="h-32 w-32 rounded-full object-cover shadow-xl ring-2 ring-emerald-500/30 sm:h-40 sm:w-40"
              src="/img/profile.jpg"
              alt="Manuel Aranda"
              width="160"
              height="160"
              format="webp"
              quality="85"
              fetchpriority="high"
              loading="eager"
            />
          </div>

          <!-- Texto -->
          <div class="flex flex-1 flex-col text-center lg:text-left">
            <p class="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400/90">
              +10 años de experiencia · Alcorcón, Madrid
            </p>
            <h1 class="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Manuel Aranda
              <span class="block text-slate-300 font-semibold sm:text-2xl lg:text-3xl mt-1">
                Desarrollo software de gestión a medida
              </span>
            </h1>
            <p class="mt-2 text-slate-400 sm:text-lg">
              ERPs, CRMs y plataformas internas para empresas que han crecido y necesitan herramientas propias
            </p>
            <p v-if="prefersReducedMotion" class="mt-2 min-h-[1.75rem] text-slate-400 sm:text-lg">
              ERPs y gestión interna a medida · Del análisis al despliegue, sin intermediarios
            </p>
            <Typed v-else :options="options" aria-hidden="true">
              <p class="mt-2 min-h-[1.75rem] text-emerald-400/80 sm:text-lg">
                <span class="typing" />
              </p>
            </Typed>
            <p class="mt-3 text-sm text-violet-300/80">
              ● Disponible para proyectos freelance
            </p>
            <div class="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#proyectos"
                class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                class="inline-flex items-center justify-center rounded-full border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Contacto
              </a>
            </div>
          </div>

        </div>
      </div>
    </FadeInView>
  </section>
</template>