<template>
  <section class="md:h-[90vh] flex items-center px-6 py-24 sm:py-32 lg:px-8 mx-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="md:w-1/3 p-2 flex justify-center">
        <img
          class="shadow-xl md:h-auto md:w-[100%] h-48 w-auto rounded-full mx-auto"
          src="https://us.123rf.com/450wm/yupiramos/yupiramos2004/yupiramos200436847/145498923-dise%C3%B1o-de-ilustraci%C3%B3n-de-vector-de-icono-de-personaje-de-avatar-de-param%C3%A9dico-masculino.jpg"
          alt=""
        >
      </div>

      <div class="md:w-2/3 px-4 flex flex-wrap">
        <div class="font-medium items-center">
          <div class="text-secondary-dark dark:text-slate-500 mt-6">
            Web Developer
          </div>
          <Typed :options="options">
            <div class="text-xl lg:text-5xl text-sky-950 dark:text-sky-400 mt-3 inline-block">
              I'm a <span class="typing font-weight-bold" />
            </div>
          </Typed>
        </div>
        <blockquote>
          <p class="text-lg font-medium mt-6 md:mt-4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </blockquote>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Projects</a>
          <a
            href="#"
            class="text-sm font-semibold text-gray-900"
          >Contact support</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";
const options: TypedOptions = {
  strings: ["Manuel Aranda", "Symfony enthusiastic", "Full stack developer"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 60,
};

</script>