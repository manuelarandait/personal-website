<script setup>
  const icons = ref(['logos:php', 'skill-icons:symfony-light', 'mdi:api', 'logos:vue', 'logos:nuxt', 'logos:docker', 'logos:mysql', 'logos:aws', 'logos:tailwindcss-icon'])
  const items = [
    'https://picsum.photos/600/800?random=1',
    'https://picsum.photos/600/800?random=2',
    'https://picsum.photos/600/800?random=3',
    'https://picsum.photos/600/800?random=4',
    'https://picsum.photos/600/800?random=5',
    'https://picsum.photos/600/800?random=6'
  ]
</script>

<template>
  <section>
    <div class="max-w-3xl px-6 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 overflow-y-hidden">
      <div class="pt-10 pb-8 space-y-2 md:space-y-5">
        <h1
          class="text-2xl font-bold leading-9 tracking-tight text-sky-950 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
        >
          Conóceme mejor
        </h1>
      </div>
      <div class="md:flex">
        <div class="md:w-1/3 flex flex-wrap items-center ">
          <UCarousel
            v-slot="{ item }"
            :items="items"
            :ui="{ item: 'basis-full' }"
            arrows
            class="w-64 mx-auto rounded-lg overflow-hidden"
          >
            <img
              class="shadow-xl md:h-60 md:w-60 h-48 w-48 object-cover mx-auto rounded-lg"
              :src="item"
              alt="profile"
            >
          </UCarousel>
        </div>
        <div class="md:w-2/3 flex flex-wrap items-center">
          <div class="justify-center px-2 ">
            <p class="text-sm font-medium mt-6 md:mt-4 text-gray-600 leading-6">
              Mi nombre es Manuel Aranda, estudié Ingeniería Informática en Móstoles, Madrid, y actualmente trabajo como full Stack aunque mi especialidad es desarrollo Backend. En 2024 tomé la decision de hacerme desarrollador freelance.
            </p>
            <p class="text-sm font-medium mt-6 md:mt-4 text-gray-600 leading-6">
              He trabajado tanto en empresas multinacionales, como startups donde. Y he conocido a grandisimos compañeros. De hecho todavia mantengo contacto con la gran mayoria de ellos.
            </p>
            <p class="text-sm font-medium mt-6 md:mt-4 text-gray-600 leading-6">
              Empecé con PHP, y me fui especializando en desarrollo backend. Conocí el framework Symfony y me enamoró tanto que todavia sigo trabajando con el. Me parece una de las mejores opciones para construir un back robusto, rapido y seguro.
            </p>
            <p class="text-sm font-medium mt-6 md:mt-4 text-gray-600 leading-6">
              Debido a la rápida evolucion de las tecnologias, me decidí a aprender Vue, por su corta curva de aprendizaje. Unido a Api Platform, y Symfony, ahora manejo de forma independiente el back, y front.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center border my-8 border-gray-300" />
      <h1
        class="text-xl font-bold leading-6 tracking-tight text-sky-950 sm:text-4xl sm:leading-10 md:text-4xl md:leading-9"
      >
        Mis habilidades
      </h1>
      <div class="container py-4 md:space-y-5">
        <div class="grid md:grid-rows-3 md:grid-flow-col md:grid-cols-3 grid-cols-2 gap-4 justify-center py-5">
          <div
            v-for="(icon,idx) in icons"
            :key="idx"
            class="border-lg rounded-md flex justify-center items-center px-4 py-6 shadow-xl bg-gray-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Icon
              :name="icon"
              size="100px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-950 px-10 py-10 mx-auto mt-10">
      <h2 class="flex justify-center text-gray-200 text-2xl text-center">
        Sígueme!
      </h2>
      <div class="flex justify-center px-10 py-10">
        <a
          href="www.linkedin.com/in/manuel-aranda-rosales"
          target="_blank"
        >
          <Icon
            name="mdi:linkedin"
            size="50px"
          />
        </a>
        <a
          href="www.linkedin.com/in/manuel-aranda-rosales"
          target="_blank"
        >
          <Icon
            name="mdi:twitter"
            size="50px"
          />
        </a>
        <a
          href="www.linkedin.com/in/manuel-aranda-rosales"
          target="_blank"
        >
          <Icon
            name="mdi:instagram"
            size="50px"
          />
        </a> <a
          href="www.linkedin.com/in/manuel-aranda-rosales"
          target="_blank"
        >
          <Icon
            name="mdi:github"
            size="50px"
          />
        </a>
      </div>
    </div>
  </section>
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