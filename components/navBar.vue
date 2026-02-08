<script setup>
const navigation = [
  { name: 'Inicio', hash: '#inicio' },
  { name: 'Proyectos', hash: '#proyectos' },
  { name: 'Sobre mí', hash: '#sobre-mi' },
  { name: 'Contacto', hash: '#contacto' },
]

import { Dialog, DialogPanel } from '@headlessui/vue'

const mobileMenuOpen = ref(false)
const careerOpen = ref(false)
const activeHash = ref('#inicio')

function goToSection(hash) {
  mobileMenuOpen.value = false
  const el = document.querySelector(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function updateActiveSection() {
  const sectionIds = ['inicio', 'proyectos', 'sobre-mi', 'contacto']
  const offset = 120
  let current = '#inicio'
  let maxTop = -Infinity
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    // La sección "activa" es la que tiene top <= offset y está más cerca del umbral (la que estamos viendo)
    if (top <= offset && top > maxTop) {
      maxTop = top
      current = '#' + id
    }
  }
  activeHash.value = current
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl"
  >
    <div class="container mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
      <a
        href="#inicio"
        class="text-lg font-semibold tracking-tight text-slate-100 transition hover:text-emerald-400"
        @click.prevent="goToSection('#inicio')"
      >
        MA
      </a>

      <!-- Desktop nav -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.hash"
          class="text-sm font-medium transition hover:text-emerald-400"
          :class="activeHash === item.hash ? 'text-emerald-400' : 'text-slate-400'"
          @click.prevent="goToSection(item.hash)"
        >
          {{ item.name }}
        </a>
        <a
          href="https://github.com/manuelarandait?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-400 transition hover:text-emerald-400"
          aria-label="GitHub"
        >
          <Icon name="uil:github" size="22" />
        </a>
        <button
          type="button"
          class="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-slate-700 transition hover:bg-slate-700 hover:ring-emerald-500/50"
          @click="careerOpen = true"
        >
          Carrera
        </button>
      </div>

      <!-- Mobile menu button -->
      <button
        type="button"
        class="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100 md:hidden"
        aria-label="Abrir menú"
        @click="mobileMenuOpen = true"
      >
        <Icon name="quill:hamburger" size="24" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Dialog
      as="div"
      class="md:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto border-l border-slate-800 bg-slate-900 p-6"
      >
        <div class="flex items-center justify-between border-b border-slate-800 pb-4">
          <span class="text-lg font-semibold text-slate-100">Menú</span>
          <button
            type="button"
            class="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
            aria-label="Cerrar menú"
            @click="mobileMenuOpen = false"
          >
            <Icon name="material-symbols:close" size="24" />
          </button>
        </div>
        <div class="mt-6 flex flex-col gap-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.hash"
            class="rounded-lg px-4 py-3 transition hover:bg-slate-800 hover:text-emerald-400"
            :class="activeHash === item.hash ? 'text-emerald-400 bg-slate-800/50' : 'text-slate-300'"
            @click.prevent="goToSection(item.hash)"
          >
            {{ item.name }}
          </a>
          <a
            href="https://github.com/manuelarandait?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-emerald-400"
            @click="mobileMenuOpen = false"
          >
            <Icon name="uil:github" size="20" />
            GitHub
          </a>
          <button
            type="button"
            class="rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-emerald-400"
            @click="careerOpen = true; mobileMenuOpen = false"
          >
            Carrera
          </button>
        </div>
      </DialogPanel>
    </Dialog>

    <!-- Modal Carrera -->
    <UModal v-model="careerOpen">
      <div class="bg-slate-900 p-6 text-slate-100 sm:p-8">
        <h2 class="mb-6 text-xl font-semibold text-slate-100">
          Trayectoria
        </h2>
        <ol class="relative space-y-8 border-l-2 border-slate-700 pl-6">
          <li class="relative">
            <span class="absolute -left-[29px] h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
            <div>
              <span class="mb-1 inline-block rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                Actual
              </span>
              <h3 class="font-semibold text-slate-100">
                Software Engineer
              </h3>
              <time class="text-sm text-slate-500">2018 – Actualidad</time>
              <p class="mt-1 text-sm text-slate-400">
                Desarrollo full stack en proyectos empresariales.
              </p>
            </div>
          </li>
          <li class="relative">
            <span class="absolute -left-[29px] h-3 w-3 rounded-full bg-slate-600 ring-4 ring-slate-900" />
            <div>
              <h3 class="font-semibold text-slate-100">
                Freelancer
              </h3>
              <time class="text-sm text-slate-500">2021</time>
              <p class="mt-1 text-sm text-slate-400">
                Proyectos diversos en Symfony, Vue y Nuxt.
              </p>
            </div>
          </li>
          <li class="relative">
            <span class="absolute -left-[29px] h-3 w-3 rounded-full bg-slate-600 ring-4 ring-slate-900" />
            <div>
              <h3 class="font-semibold text-slate-100">
                Ingeniería Informática
              </h3>
              <time class="text-sm text-slate-500">Universidad – Madrid</time>
              <p class="mt-1 text-sm text-slate-400">
                Estudios en Madrid.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </UModal>
  </nav>
</template>
