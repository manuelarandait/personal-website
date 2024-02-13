<script setup>

</script>

<template>
  <div class="max-w-3xl px-6 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 overflow-y-hidden">
    <div class="pt-10 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-2xl font-bold leading-9 tracking-tight text-gray-300 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Conóceme mejor
      </h1>
    </div>
    <div class="md:flex">
      <div class="md:w-1/3 flex flex-wrap items-center ">
        <img
          class="shadow-xl md:h-60 md:w-60 h-48 w-48 object-cover mx-auto "
          src="../../assets/img/profile.jpg"
          alt="profile"
        >
      </div>
      <div class="md:w-2/3 flex flex-wrap items-center">
        <div class="justify-center px-2">
          <p class="text-sm font-medium mt-6 md:mt-4 text-gray-200">
            Mi nombre es Manuel Aranda, estudié Ingeniería Informática en Móstoles, Madrid, y actualmente trabajo como full Stack aunque mi especialidad es desarrollo Backend. En 2024 tomé la decision de hacerme desarrollador freelance.
          </p>
          <p class="text-sm font-medium mt-6 md:mt-4 text-gray-200">
            He trabajado tanto en empresas multinacionales, como startups donde. Y he conocido a grandisimos compañeros. De hecho todavia mantengo contacto con la gran mayoria de ellos.
          </p>
          <p class="text-sm font-medium mt-6 md:mt-4 text-gray-200">
            Empecé con PHP, y me fui especializando en desarrollo backend. Conocí el framework Symfony y me enamoró tanto que todavia sigo trabajando con el. Me parece una de las mejores opciones para construir un back robusto, rapido y seguro.
          </p>
          <p class="text-sm font-medium mt-6 md:mt-4 text-gray-200">
            Debido a la rápida evolucion de las tecnologias, me decidí a aprender Vue, por su corta curva de aprendizaje. Unido a Api Platform, y Symfony, ahora manejo de forma independiente el back, y front.
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center border my-4 border-gray-600" />
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