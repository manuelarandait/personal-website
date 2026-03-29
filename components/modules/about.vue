<script setup>
import carouselPaths from '~/data/carousel-images.json'

const carouselImages = [profileImg, ...carouselPaths]

const currentSlide = ref(0)
const autoplayInterval = ref(null)
const AUTOPLAY_MS = 5000
const profileImg = '/img/profile.jpg'


function goTo (index) {
  currentSlide.value = (index + carouselImages.length) % carouselImages.length
  resetAutoplay()
}

function next () {
  goTo(currentSlide.value + 1)
}

function prev () {
  goTo(currentSlide.value - 1)
}

function startAutoplay () {
  stopAutoplay()
  autoplayInterval.value = setInterval(() => {
    next()
  }, AUTOPLAY_MS)
}

function stopAutoplay () {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
  }
}

function resetAutoplay () {
  startAutoplay()
}

onMounted(() => {
  if (carouselImages.length > 1) startAutoplay()
})

onUnmounted(stopAutoplay)

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/manuel-aranda-rosales', icon: 'mdi:linkedin' },
  { name: 'GitHub', url: 'https://github.com/manuelarandait', icon: 'mdi:github' },
]
</script>

<template>
  <section id="sobre-mi" class="scrollbar-thin px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="container mx-auto max-w-5xl">
      <FadeInView>
        <div class="mb-12 sm:mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
            Conóceme mejor
          </h2>
          <p class="mt-3 text-slate-400 sm:text-lg">
            Quién hay detrás de los proyectos.
          </p>
        </div>
      </FadeInView>

      <FadeInView :delay="0.1">
        <div class="flex justify-center">
          <div
            v-if="carouselImages.length === 1"
            class="w-full max-w-sm"
          >
            <img
              :src="carouselImages[0]"
              class="rounded-2xl object-cover shadow-xl ring-1 ring-slate-700/50 w-full aspect-[4/5]"
              alt="Manuel Aranda"
              width="400"
              height="500"
            >
          </div>
          <div
            v-else
            class="relative w-full max-w-sm"
            @mouseenter="stopAutoplay"
            @mouseleave="startAutoplay()"
          >
            <div class="overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-700/50 aspect-[4/5] bg-slate-900/50">
              <Transition name="slide-fade" mode="out-in">
                <img
                  :key="currentSlide"
                  :src="carouselImages[currentSlide]"
                  class="h-full w-full object-cover"
                  alt="Manuel Aranda"
                  width="400"
                  height="500"
                >
              </Transition>
            </div>
            <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              <button
                v-for="(_, i) in carouselImages"
                :key="i"
                type="button"
                class="h-2 w-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                :class="i === currentSlide ? 'bg-emerald-400 scale-125' : 'bg-slate-500 hover:bg-slate-400'"
                :aria-label="`Ir a foto ${i + 1}`"
                @click="goTo(i)"
              />
            </div>
          </div>
        </div>
      </FadeInView>

      <FadeInView :delay="0.15">
        <div class="mt-12 space-y-6">
          <p class="text-slate-300 leading-relaxed">
            Llevo más de 10 años construyendo software de gestión: ERPs, CRMs, plataformas internas, paneles de administración. Proyectos donde el código tiene que funcionar bien porque alguien depende de él cada día para trabajar.
          </p>
          <p class="text-slate-300 leading-relaxed">
            He trabajado principalmente con Symfony y Vue, pero elijo las herramientas en función del proyecto, no por costumbre. Lo que no cambia es el enfoque: entender bien el problema antes de proponer una solución, y acompañar el proyecto desde el análisis hasta el despliegue.
          </p>
          <p class="text-slate-300 leading-relaxed">
            Trabajo como freelance porque me permite implicarme de verdad en cada proyecto, sin capas de por medio. Trato directamente con quien toma las decisiones y eso hace que las cosas salgan mejor.
          </p>
        </div>
      </FadeInView>

      <FadeInView :delay="0.06">
        <div class="mt-12 rounded-xl border border-violet-500/20 bg-violet-500/5 p-6">
          <p class="text-slate-300 italic leading-relaxed">
            Me gusta entender el negocio antes de escribir código. Un buen análisis evita más problemas que cualquier framework.
          </p>
        </div>
      </FadeInView>

      <FadeInView :delay="0.08">
        <div class="mt-12">
          <p class="text-slate-300 leading-relaxed">
            Fuera del trabajo disfruto de la lectura, el cine, la montaña y el deporte. Cuando toca desconectar, los videojuegos también tienen su espacio.
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <span class="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">📚 Lectura</span>
            <span class="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">🎬 Cine</span>
            <span class="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">🏔️ Montaña</span>
            <span class="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">🏃 Running</span>
            <span class="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">🎮 Videojuegos</span>
          </div>
        </div>
      </FadeInView>

      <FadeInView>
        <div class="mt-16 border-t border-slate-800 pt-16 sm:mt-20 sm:pt-20">
          <h2 class="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
            Áreas de especialización
          </h2>
          <div class="mt-10 grid gap-6 sm:grid-cols-3">
            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
              <h3 class="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                Backend
              </h3>
              <p class="mt-3 text-sm text-slate-300">
                Lógica de negocio compleja, APIs robustas y arquitectura pensada para durar.
              </p>
              <p class="mt-4 text-sm text-slate-400">
                PHP / Symfony · Node.js · APIs REST · Integraciones · Auth
              </p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
              <h3 class="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                Frontend
              </h3>
              <p class="mt-3 text-sm text-slate-300">
                Interfaces que tu equipo usará cada día: claras, rápidas y fáciles de mantener.
              </p>
              <p class="mt-4 text-sm text-slate-400">
                Vue · Nuxt · Angular · Componentes · Estado
              </p>
            </div>
            <div class="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
              <h3 class="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                Infra / Entorno
              </h3>
              <p class="mt-3 text-sm text-slate-300">
                Despliegues estables, entornos bien configurados y sistemas que no fallan en producción.
              </p>
              <p class="mt-4 text-sm text-slate-400">
                Docker · MySQL · CI/CD · AWS
              </p>
            </div>
          </div>
        </div>
      </FadeInView>

      <FadeInView :delay="0.1">
        <div class="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 px-6 py-10 sm:px-10 sm:py-12">
          <h2 class="text-center text-xl font-semibold text-slate-100">
            Sígueme
          </h2>
          <div class="mt-6 flex flex-wrap justify-center gap-6">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 rounded-lg p-3 text-slate-400 transition hover:bg-slate-800 hover:text-emerald-400"
              :aria-label="link.name"
            >
              <Icon :name="link.icon" size="28" />
              <span class="text-sm font-medium">{{ link.name }}</span>
            </a>
          </div>
        </div>
      </FadeInView>
    </div>
  </section>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(12px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>