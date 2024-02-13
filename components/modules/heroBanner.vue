<template>
  <section class="md:h-[90vh] flex items-center px-6 py-24 sm:py-32 lg:px-8 mx-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="md:w-1/3 flex items-center">
        <img
          class="shadow-xl md:h-60 md:w-60 h-48 w-48 object-cover rounded-full mx-auto"
          src="../../assets/img/profile.jpg"
          alt="profile"
        >
      </div>

      <div class="md:w-2/3 px-2 flex flex-wrap">
        <div class="font-medium items-center text-gray-500">
          <div class="mt-6">
            Web Developer | Front end | Back end | PHP | Symfony | Vue | Nuxt
          </div>
          <Typed :options="options">
            <div class="text-xl lg:text-4xl mt-3 inline-block text-green-400">
              <span class="typing font-weight-bold" />
            </div>
          </Typed>
        </div>
        <blockquote>
          <p class="text-md font-medium mt-6 md:mt-4 text-gray-200">
            Estudié Ingeniería Informática en Madrid, y actualmente trabajo como Full Stack aunque mi especialidad es desarrollo Backend.
          </p>
          <p class="text-md font-medium mt-6 md:mt-4 text-gray-200">
            Soy un verdadero friki de la informática y de las nuevas tecnologías. Abierto a nuevos lenguajes de programación y agradecido a todos aquellos que han hecho de mi lo que soy a dia de hoy.
          </p>
        </blockquote>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            class="rounded-md bg-green-400 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Proyectos</a>
          <a
            href="#"
            class="text-sm font-semibold text-gray-200"
          >Contacto</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";
const options: TypedOptions = {
  strings: ["Mi nombre es Manuel Aranda", "Soy desarrollador de software freelance", "Creo aplicaciones full stack"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 60,
};

</script>