<script setup>
// Sustituye por tu email real
const email = 'manuel.aranda.it@gmail.com'
const mailto = `mailto:${email}`

const contacts = [
  { label: 'Email', value: email, href: mailto, icon: 'mdi:email-outline' },
  { label: 'LinkedIn', value: 'Manuel Aranda', href: 'https://www.linkedin.com/in/manuel-aranda-rosales', icon: 'mdi:linkedin' },
  { label: 'GitHub', value: 'manuelarandait', href: 'https://github.com/manuelarandait', icon: 'mdi:github' },
]
</script>

<template>
  <section id="contacto" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="container mx-auto max-w-5xl">
      <FadeInView>
        <div class="mb-12 sm:mb-16">
          <h2 class="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
            ¿Hablamos?
          </h2>
          <p class="mt-3 text-slate-300 sm:text-lg">
            Escríbeme por email o conéctame en LinkedIn o GitHub. Te respondo lo antes posible.
          </p>
        </div>
      </FadeInView>

      <FadeInView :delay="0.08">
        <div class="flex flex-col items-center gap-8 sm:gap-10">
          <a
            :href="mailto"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <Icon name="mdi:email-outline" size="24" />
            Enviar email
          </a>
          <ul class="grid w-full gap-4 sm:max-w-md sm:grid-cols-1">
            <FadeInView
              v-for="(contact, i) in contacts"
              :key="contact.label"
              tag="li"
              :delay="0.06 * (i + 1)"
              class="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-slate-700"
            >
              <Icon :name="contact.icon" size="24" class="shrink-0 text-emerald-400/80" />
              <div class="min-w-0">
                <span class="block text-sm font-medium text-slate-400">{{ contact.label }}</span>
                <a
                  :href="contact.href"
                  :target="contact.href.startsWith('http') ? '_blank' : undefined"
                  :rel="contact.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                  class="mt-0.5 block truncate text-slate-200 hover:text-emerald-400 hover:underline"
                >
                  {{ contact.value }}
                </a>
              </div>
              <Icon v-if="contact.href.startsWith('http')" name="mdi:open-in-new" size="18" class="shrink-0 text-slate-500" />
            </FadeInView>
          </ul>
        </div>
      </FadeInView>
    </div>
  </section>
</template>
