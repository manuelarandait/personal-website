<script setup>
  import projectsData from "../../data/projects"

  const projects = ref(projectsData)
</script>

<template>
  <div class="max-w-3xl px-6 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 overflow-y-hidden">
    <div class="pt-10 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Proyectos
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Some of the projects I've build or been a part of.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700"
      >
        <div class="p-6">
          <div class="flex flex-row justify-between items-center">
            <div class="my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="text-primary-color dark:text-primary-color-dark h-10 w-10"
              />
            </div>
            <div class="flex flex-row justify-between">
              <div class="mx-1">
                <a
                  class="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                ><span class="sr-only" /><img
                  class="w-6 h-6"
                ></a>
              </div>
              <div class="mx-1">
                <a
                  class="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                ><span class="sr-only">github</span><img
                  class="w-6 h-6"
                ></a>
              </div>
            </div>
          </div>
          <h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">
            {{ project.title }}
          </h2>
          <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
            {{ project.description }}
          </p>
          <div class="flex flex-row justify-between">
            <div class="text-gray-400 text-sm font-extralight">
              {{ project.tech1 }} • {{ project.tech2 }} • {{ project.tech3 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body::-webkit-scrollbar {
  width: 8px !important;
  height: 6px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: white;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10px;       /* roundness of the scroll thumb */
  border: 1px solid darkgrey;  /* creates padding around scroll thumb */
}

</style>