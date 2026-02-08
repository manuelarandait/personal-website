<template>
  <footer class="border-t border-slate-800 bg-slate-950 px-4 py-6 sm:px-6 lg:px-8">
    <div class="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p class="text-sm text-slate-500">
        © {{ new Date().getFullYear() }} Manuel Aranda
      </p>
      <div class="flex gap-6">
        <a
          href="https://github.com/manuelarandait"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-500 transition hover:text-emerald-400"
          aria-label="GitHub"
        >
          <Icon name="uil:github" size="20" />
        </a>
        <a
          href="https://www.linkedin.com/in/manuel-aranda-rosales"
          target="_blank"
          rel="noopener noreferrer"
          class="text-slate-500 transition hover:text-emerald-400"
          aria-label="LinkedIn"
        >
          <Icon name="mdi:linkedin" size="20" />
        </a>
      </div>
    </div>
  </footer>
</template>
