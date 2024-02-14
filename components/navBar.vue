<script setup>
const navigation = [
  { name: 'Inicio', to: '/' },
  { name: 'Portfolio', to: '/projects' },
  { name: 'Sobre mi', to: '/about' },
  { name: 'Contacto', to: '/contact' }
]

import { Dialog, DialogPanel } from '@headlessui/vue'

const mobileMenuOpen = ref(false)
const isOpen = ref(false)

</script>


<template>
  <nav class="mx-auto md:container sticky top-0 backdrop-blur flex-none transition-colors z-50 text-black">
    <div class="flex flex-wrap items-center justify-end md:justify-center px-4 py-4 border-b border-gray-400 font-2xl">
      <div class="hidden lg:flex lg:flex-1 lg:justify-start">
        <a
          href="/"
          class="text-sm font-semibold leading-6"
        >MA</a>
      </div>

      <div class="lg:hidden">
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 "
          @click="mobileMenuOpen = true"
        >
          <Icon
            name="quill:hamburger"
            color="black"
            size="20px"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12 px-4 py-3 font-semibold leading-6 hover:text-grey-darker">
        <nuxt-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="text-md font-semibold leading-6"
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
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-light px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex justify-end">
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 "
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
            <div class="-my-6 divide-y divide-gray-500">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.to"
                  class="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-black"
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
          href="https://github.com/manuelarandait?tab=repositories"
          class="text-sm font-semibold leading-6"
          target="_blank"
        >
          <Icon
            name="uil:github"
            color="black"
            size="30px"
          />
        </a>
        <UButton
          label="Carrera"
          class="rounded-full ring-1 ring-gray-800 hover:ring-gray-900 text-sm px-4 flex flex-wrap items-center justify-center mx-2"
          color="gray"
          variant="solid"
          @click="isOpen = true"
        />

        <UModal v-model="isOpen">
          <div class="opacity-100 mt-10 px-10">
            <ol class="relative border-l border-gray-200">
              <li class="mb-10 ml-6">
                <span
                  class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                />
                <h3
                  class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
                >
                  Software Engineer at FANG
                  <span
                    class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
                  >Currently</span>
                </h3>
                <time
                  class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >2018-Currently</time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout, charts,
                  kanban board, calendar, and pre-order E-commerce & Marketing pages.
                </p>
              </li>
              <li class="mb-10 ml-6">
                <span
                  class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                />
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Freelancer
                </h3>
                <time
                  class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Released on December 7th, 2021</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  All of the pages and components are first designed in Figma and we
                  keep a parity between the two versions even as we update the project.
                </p>
              </li>
              <li class="mb-10 ml-6">
                <span
                  class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                />
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  2013 - Dhaka University
                </h3>
                <time
                  class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >2013 - 2018
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  Studied "BSC in Computer Science and Engineering" in Dhaka University.
                </p>
              </li>
              <li class="mb-10 ml-6">
                <span
                  class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                />
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Born in 1996, July 27
                </h3>
                <time
                  class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                >Dhaka Bangladesh</time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  I couldn't remember any productive work in that time. But
                </p>
              </li>
            </ol>
          </div>
        </UModal>
      </div>
    </div>
  </nav>
</template>