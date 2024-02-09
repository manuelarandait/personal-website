<script setup>
const navigation = [
  { name: 'Inicio', to: '/' },
  { name: 'Portfolio', to: '/projects' },
  { name: 'Sobre mi', to: '/about' },
  { name: 'Contacto', to: '/contact' }
]

</script>


<template>
  <nav class="mx-auto md:container">
    <div class="flex flex-wrap items-center justify-center px-10 border-b border-gray-200 font-2xl md:py-2">
      <div class="hidden lg:flex lg:flex-1 lg:justify-start">
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >MA</a>
      </div>
      <ul class="flex justify-center w-auto">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="block px-4 py-3 font-semibold leading-6 text-gray-900 hover:text-grey-darker"
        >
          {{ item.name }}
        </NuxtLink>
      </ul>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end w-auto">
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900 px-4 py-3"
        >Github</a>
        <a
          href="#"
          class="rounded-full text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-sm px-4 py-3"
        >Carrera <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  </nav>
</template>