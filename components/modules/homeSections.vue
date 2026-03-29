<script setup>
const highlights = [
  { value: '10+', label: 'años construyendo software de gestión real', icon: 'mdi:briefcase-outline' },
  { value: '5+', label: 'ERPs y plataformas internas entregadas', icon: 'mdi:monitor-dashboard' },
  { value: '0', label: 'intermediarios entre tú y el dev', icon: 'mdi:account-check-outline' },
  { value: '100%', label: 'del análisis al despliegue, contigo', icon: 'mdi:rocket-launch-outline' },
]

const experience = [
  { role: 'Freelance Senior Developer', company: 'Autónomo', period: 'Feb 2024 – Presente', current: true, summary: 'Análisis funcional y técnico, diseño de soluciones y desarrollo. APIs, paneles admin, integraciones (Stripe, Holded, Brevo). De requisitos a producción.' },
  { role: 'Senior Fullstack Developer', company: 'Qindel Group', period: 'May 2024 – Oct 2025', summary: 'Análisis funcional, diseño técnico y desarrollo de aplicaciones web y APIs en proyectos empresariales.' },
  { role: 'Senior Software Developer', company: 'Digital Doers', period: 'Feb 2021 – Dic 2023', summary: 'Diseño de arquitectura y toma de decisiones técnicas. ERPs, plataformas de administración, APIs y frontends.' },
  { role: 'Senior Software Analyst', company: 'Digital Restaurant', period: 'Oct 2020 – Feb 2021', summary: 'Análisis y evolución de producto (Camarero10 v2). Migración técnica, diseño de módulos y desarrollo con Symfony y Vue/Nuxt.' },
  { role: 'Full-stack Developer', company: 'Lendrock', period: 'Abr 2018 – Oct 2020', summary: 'Integraciones, APIs y evolución de producto en plataforma fintech. Área cliente, comercio y admin. AWS, RabbitMQ.' },
]

const linkedInUrl = 'https://www.linkedin.com/in/manuel-aranda-rosales'
</script>

<template>
  <!-- Highlights -->
  <section class="border-t border-slate-800/80 bg-slate-900/30 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
    <div class="container mx-auto max-w-5xl">
      <h2 class="sr-only">
        En breve
      </h2>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 items-stretch">
        <FadeInView
          v-for="(item, i) in highlights"
          :key="i"
          :delay="i * 0.08"
          class="h-full"
        >
          <div
            class="h-full flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center transition hover:border-slate-700 hover:bg-slate-800/50 sm:p-6"
          >
            <Icon :name="item.icon" size="28" class="mx-auto mb-3 text-emerald-400/80 shrink-0" />
            <p class="text-2xl font-bold text-slate-100 sm:text-3xl shrink-0">
              {{ item.value }}
            </p>
            <p class="mt-1 text-sm text-slate-400 flex-1 min-h-[2.5rem] flex items-center justify-center">
              {{ item.label }}
            </p>
          </div>
        </FadeInView>
      </div>
    </div>
  </section>

  <!-- Qué construyo -->
  <section class="border-t border-slate-800/80 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
    <div class="container mx-auto max-w-5xl">
      <div class="mb-8">
        <h2 class="text-xl font-semibold text-slate-100">
          Qué construyo
        </h2>
        <p class="mt-1 text-sm text-slate-500">
          No webs. Software del que alguien depende cada día.
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-3 sm:gap-6">
        <FadeInView :delay="0" class="rounded-xl border border-slate-800 bg-slate-900/30 px-5 py-6 transition hover:border-slate-700">
          <Icon name="mdi:cog-outline" size="28" class="mb-3 text-emerald-400/80" />
          <p class="font-semibold text-slate-200">Software de gestión a medida</p>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">ERPs, CRMs y herramientas internas que se adaptan a cómo trabaja tu empresa, no al revés.</p>
        </FadeInView>
        <FadeInView :delay="0.06" class="rounded-xl border border-slate-800 bg-slate-900/30 px-5 py-6 transition hover:border-slate-700">
          <Icon name="mdi:monitor-dashboard" size="28" class="mb-3 text-emerald-400/80" />
          <p class="font-semibold text-slate-200">Paneles e interfaces de administración</p>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">Dashboards y áreas de gestión que tu equipo usará cada día sin necesidad de formación.</p>
        </FadeInView>
        <FadeInView :delay="0.12" class="rounded-xl border border-slate-800 bg-slate-900/30 px-5 py-6 transition hover:border-slate-700">
          <Icon name="mdi:cog-refresh-outline" size="28" class="mb-3 text-emerald-400/80" />
          <p class="font-semibold text-slate-200">Evolución y rescate de proyectos</p>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">Si tienes un sistema que funciona pero ya no escala, lo analizo, lo mejoro y lo dejo en orden.</p>
        </FadeInView>
      </div>
    </div>
  </section>

  <!-- Trayectoria reciente -->
  <section class="border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="container mx-auto max-w-3xl">
      <FadeInView>
        <h2 class="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
          Trayectoria reciente
        </h2>
        <p class="mt-2 text-slate-400">
          Empresas y proyectos donde he construido software de gestión real.
        </p>
      </FadeInView>
      <ul class="mt-8 space-y-6">
        <FadeInView
          v-for="(job, i) in experience"
          :key="i"
          tag="li"
          :delay="i * 0.06"
          class="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/30 p-5 transition hover:border-slate-700 sm:gap-6 sm:p-6"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
          >
            <Icon name="mdi:briefcase-outline" size="22" />
          </span>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-baseline justify-between gap-2">
              <h3 class="font-semibold text-slate-100">
                {{ job.role }}
              </h3>
              <span
                v-if="job.current"
                class="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400"
              >
                Actual
              </span>
            </div>
            <p class="mt-0.5 text-slate-400">
              {{ job.company }}
            </p>
            <p class="mt-1 text-sm text-slate-500">
              {{ job.period }}
            </p>
            <p v-if="job.summary" class="mt-1 text-sm text-slate-400">
              {{ job.summary }}
            </p>
          </div>
        </FadeInView>
      </ul>
      <FadeInView :delay="0.2">
        <div class="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#sobre-mi"
            class="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
          >
            Conóceme mejor
            <Icon name="mdi:arrow-right" size="18" />
          </a>
          <a
            :href="linkedInUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-emerald-400"
          >
            Ver LinkedIn
            <Icon name="mdi:open-in-new" size="16" />
          </a>
        </div>
      </FadeInView>
    </div>
  </section>

  <!-- CTA final -->
  <section class="border-t border-slate-800/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <FadeInView>
      <div class="container mx-auto max-w-2xl text-center">
        <h2 class="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
          ¿Tu empresa sigue gestionando con Excel?
        </h2>
        <p class="mt-3 text-slate-400">
          O quizás tienes un software que ya no se adapta a cómo trabajáis. Cuéntame qué necesitas. Sin compromiso, sin agencias de por medio.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#proyectos"
            class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            class="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Contactar
          </a>
        </div>
      </div>
    </FadeInView>
  </section>
</template>