<script setup>
  import projectsData from "../../data/projects"

  const projects = ref(projectsData)
</script>

<template>
  <div class="max-w-3xl px-6 mx-auto xl:max-w-5xl xl:px-0 overflow-y-hidden pb-4">
    <div class="pt-10 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-2xl font-bold leading-9 tracking-tight text-sky-950 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Proyectos
      </h1>
      <p class="text-lg leading-7 text-gray-500">
        Algunos de los proyectos en los que he participado.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="h-full overflow-hidden border-2 border-gray-300 rounded-md border-opacity-90 shadow-xl"
      >
        <div class="p-6">
          <div class="flex flex-row justify-between items-center">
            <div class="my-2">
              <Icon
                name="material-symbols:folder-outline"
                size="30px"
                color="black"
              />
            </div>
          </div>
          <h2 class="text-2xl font-bold leading-8 tracking-tight mb-3 text-sky-950">
            {{ project.title }}
          </h2>
          <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
            {{ project.description }}
          </p>
          <div class="flex flex-row justify-between">
            <div class="text-gray-400 text-sm font-extralight">
              {{ project.tech1 }} • {{ project.tech2 }} • {{ project.tech3 }} • {{ project.tech4 }} • {{ project.tech5 }}
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