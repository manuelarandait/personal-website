<script setup>
// Producto propio destacado: Pace Rivals.
// TODO: sustituir appStoreUrl por la URL real de la ficha en la App Store cuando la tengas.
const appStoreUrl = 'https://pacerivals.com'
const webUrl = 'https://pacerivals.com'
const googlePlayReady = false // pon true y rellena googlePlayUrl cuando esté publicada
const googlePlayUrl = ''

const features = [
  'Competición privada entre amigos, no con desconocidos',
  'Retos de ruta: Madrid–París, Camino de Santiago, Vuelta a España…',
  'Rankings semanales, logros y rachas con narrativa propia',
]

const tech = ['Nuxt', 'Capacitor', 'Symfony', 'Apple HealthKit', 'iOS', 'Android']
</script>

<template>
  <section
    id="pace-rivals"
    class="relative overflow-hidden border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
  >
    <!-- Glow naranja de la marca Pace Rivals -->
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,rgba(255,77,28,0.12),transparent)]"
      aria-hidden="true"
    />

    <div class="container relative mx-auto max-w-5xl">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Texto -->
        <div>
          <FadeInView>
            <div class="flex items-center gap-2">
              <span class="h-px w-8 bg-[#ff4d1c]/60" />
              <p class="text-sm font-semibold uppercase tracking-wider text-[#ff4d1c]">
                Producto propio
              </p>
            </div>

            <div class="mt-5 flex items-center gap-4">
              <NuxtImg
                src="/img/pace-rivals/icon.png"
                alt="Icono de Pace Rivals"
                width="64"
                height="64"
                format="webp"
                quality="90"
                class="h-14 w-14 rounded-2xl shadow-lg ring-1 ring-white/10 sm:h-16 sm:w-16"
              />
              <h2 class="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
                Pace Rivals
              </h2>
            </div>

            <p class="mt-5 text-lg italic text-slate-300">
              «El ranking que importa no tiene millones de usuarios. Solo los tuyos.»
            </p>

            <p class="mt-4 text-slate-400 leading-relaxed">
              No solo construyo software para otros: Pace Rivals es mi app de running
              social, diseñada, desarrollada y publicada de principio a fin —del concepto
              a la App Store—. App nativa para iOS y Android con backend propio,
              integración con Apple Health y pagos in-app.
            </p>
          </FadeInView>

          <FadeInView :delay="0.08">
            <ul class="mt-6 space-y-3">
              <li
                v-for="feature in features"
                :key="feature"
                class="flex items-start gap-3 text-slate-300"
              >
                <Icon name="mdi:check-circle-outline" size="20" class="mt-0.5 shrink-0 text-[#ff4d1c]" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </FadeInView>

          <FadeInView :delay="0.12">
            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="t in tech"
                :key="t"
                class="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700"
              >
                {{ t }}
              </span>
            </div>
          </FadeInView>

          <FadeInView :delay="0.16">
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <a
                :href="appStoreUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-[#ff4d1c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#ff5f33] focus:outline-none focus:ring-2 focus:ring-[#ff4d1c] focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <Icon name="mdi:apple" size="20" />
                Descargar en App Store
              </a>

              <a
                v-if="googlePlayReady"
                :href="googlePlayUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/50"
              >
                <Icon name="mdi:google-play" size="18" />
                Disponible en Google Play
              </a>
              <span
                v-else
                class="inline-flex items-center gap-2 rounded-full border border-dashed border-slate-700 px-5 py-3 text-sm font-medium text-slate-500"
              >
                <Icon name="mdi:google-play" size="18" />
                Próximamente en Google Play
              </span>

              <a
                :href="webUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-[#ff4d1c]"
              >
                Ver web
                <Icon name="mdi:open-in-new" size="16" />
              </a>
            </div>
          </FadeInView>
        </div>

        <!-- Mockups -->
        <FadeInView :delay="0.1">
          <div class="relative mx-auto flex max-w-sm justify-center lg:max-w-none">
            <!-- Teléfono secundario (detrás, solo en pantallas grandes) -->
            <div
              class="absolute left-2 top-6 hidden w-[58%] -rotate-6 sm:block"
              aria-hidden="true"
            >
              <div class="rounded-[2rem] border border-slate-700/70 bg-slate-900 p-1.5 shadow-2xl">
                <div class="aspect-[1179/2080] overflow-hidden rounded-[1.6rem] bg-black">
                  <NuxtImg
                    src="/img/pace-rivals/screen-ranking.png"
                    alt=""
                    width="400"
                    height="757"
                    format="webp"
                    quality="80"
                    class="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <!-- Teléfono principal -->
            <div class="relative w-[62%] sm:w-[58%] sm:translate-x-10">
              <div class="rounded-[2.5rem] border border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-[#ff4d1c]/10">
                <div class="aspect-[1179/2080] overflow-hidden rounded-[2rem] bg-black">
                  <NuxtImg
                    src="/img/pace-rivals/screen-dashboard.png"
                    alt="Pantalla principal de Pace Rivals con stats semanales, reto activo y ranking"
                    width="420"
                    height="794"
                    format="webp"
                    quality="85"
                    class="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </div>
  </section>
</template>
