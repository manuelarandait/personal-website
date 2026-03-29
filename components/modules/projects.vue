<script setup>
import projectsData from '~/data/projects'

const projects = ref(projectsData)

const showAllProjects = ref(false)
const MOBILE_BREAKPOINT = 768
const INITIAL_COUNT_MOBILE = 2

onMounted(() => {
  showAllProjects.value = typeof window !== 'undefined' && window.innerWidth >= MOBILE_BREAKPOINT
})

const projectsToShow = computed(() =>
  showAllProjects.value ? projects.value : projects.value.slice(0, INITIAL_COUNT_MOBILE)
)
const showVerMasButton = computed(() => !showAllProjects.value && projects.value.length > INITIAL_COUNT_MOBILE)

function techList(project) {
  return [project.tech1, project.tech2, project.tech3, project.tech4, project.tech5, project.tech6].filter(Boolean)
}
</script>

<template>
  <section id="proyectos" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="container mx-auto max-w-5xl">
      <FadeInView>
        <div class="mb-12 sm:mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
            Proyectos
          </h2>
          <p class="mt-3 text-slate-400 sm:text-lg">
            Software de gestión real, construido para empresas reales.
          </p>
        </div>
      </FadeInView>

      <div class="grid gap-6 sm:grid-cols-2 lg:gap-8 items-stretch">
        <FadeInView
          v-for="(project, idx) in projectsToShow"
          :key="idx"
          :delay="idx * 0.08"
          class="h-full"
        >
          <article
            class="h-full group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition hover:border-slate-700 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-emerald-500/5"
          >
            <div class="flex flex-1 flex-col min-h-0 p-6 sm:p-8">
              <div class="mb-4">
                <Icon
                  name="material-symbols:folder-outline"
                  size="32"
                  class="text-emerald-400/80"
                />
              </div>
              <h3 class="text-xl font-semibold text-slate-100 transition group-hover:text-emerald-400 sm:text-2xl">
                {{ project.title }}
              </h3>
              <p v-if="project.company || project.period" class="mt-1 text-sm text-slate-500">
                {{ [project.company, project.period].filter(Boolean).join(' · ') }}
              </p>
              <p class="mt-2 flex-1 text-slate-400 leading-relaxed">
                {{ project.description }}
              </p>
              <p class="mt-2 text-sm text-slate-500 italic">
                Análisis funcional, diseño técnico y desarrollo end-to-end.
              </p>
              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="tech in techList(project)"
                  :key="tech"
                  class="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700"
                >
                  {{ tech }}
                </span>
              </div>
              <div v-if="project.demo || project.repo" class="mt-6 flex flex-wrap gap-3">
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                >
                  Ver demo →
                </a>
                <a
                  v-if="project.repo"
                  :href="project.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-medium text-slate-300 transition hover:text-slate-100"
                >
                  Código
                </a>
              </div>
            </div>
          </article>
        </FadeInView>
      </div>

      <FadeInView v-if="showVerMasButton" class="mt-8 flex justify-center md:hidden">
        <button
          type="button"
          class="rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-emerald-500/50 hover:bg-slate-800 hover:text-emerald-400"
          @click="showAllProjects = true"
        >
          Ver más proyectos
        </button>
      </FadeInView>
    </div>
  </section>
</template>