<script setup>
const navigation = [
  { name: 'Inicio', to: '/' },
  { name: 'Portfolio', to: '/projects' },
  { name: 'Sobre mi', to: '/about' },
  { name: 'Contacto', to: '/contact' }
]

import { Dialog, DialogPanel } from '@headlessui/vue'

const mobileMenuOpen = ref(false)

</script>


<template>
  <nav class="mx-auto md:container sticky top-0 backdrop-blur flex-none transition-colors z-50]">
    <div class="flex flex-wrap items-center justify-end md:justify-center px-4 py-4 border-b border-gray-200 font-2xl">
      <div class="hidden lg:flex lg:flex-1 lg:justify-start">
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >MA</a>
      </div>

      <div class="lg:hidden">
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Icon
            name="quill:hamburger"
            color="black"
            size="20px"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12 px-4 py-3 font-semibold leading-6 text-gray-900 hover:text-grey-darker">
        <nuxt-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="text-md font-semibold leading-6 text-gray-900"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
      <Dialog
        as="div"
        class="lg:hidden"
        :open="mobileMenuOpen"
        @close="mobileMenuOpen = false"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex justify-end">
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <Icon
                name="material-symbols:close"
                color="black"
                size="30px"
              />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.to"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {{ item.name }}
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end w-auto">
        <a
          href="#"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          <Icon
            name="uil:github"
            color="black"
            size="30px"
          />
        </a>
        <a
          href="#"
          class="rounded-full text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-sm px-4 flex flex-wrap items-center justify-center mx-2"
        >Carrera</a>
      </div>
    </div>
  </nav>
</template>