<script setup>
const contacts = ref([
   {
     id: 1,
     name: "Your Address, Your City, Your Country",
     icon: "mdi:address-marker-outline",
   },
   {
     id: 2,
     name: "email@domain.com",
     icon: "mdi:email",
   },
   {
     id: 3,
     name: "555 8888 888",
     icon: "mdi:phone",
   },
])
</script>

<template>
  <div class="max-w-3xl px-6 mx-auto xl:max-w-5xl xl:px-0 overflow-y-hidden pb-4">
    <div class="pt-10 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-2xl font-bold leading-9 tracking-tight text-sky-950 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        ¿Hablamos?
      </h1>
    </div>
    <div
      class="
        mx-auto
        flex flex-col-reverse
        md:flex-row md:py-10 md:mt-6
      "
    >
      <div class="w-full md:w-1/2">
        <div
          class="
          leading-loose
          max-w-xl
          p-7
          bg-secondary-light
          dark:bg-secondary-dark
          rounded-xl
          shadow-xl
          text-left
        "
        >
          <form
            class="font-general-regular space-y-7"
            @submit="
              (e) => {
                e.preventDefault;
              }
            "
          >
            <div class="">
              <label
                class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                for="name"
              >Nombre</label>
              <input
                id="name"
                class="
                w-full
                px-5
                py-2
                border border-gray-300
                dark:border-primary-dark
                border-opacity-50
                text-primary-dark
                dark:text-secondary-light
                bg-ternary-light
                dark:bg-ternary-dark
                rounded-md
                shadow-sm
                text-md
              "
                name="name"
                type="text"
                required=""
                placeholder="Your Name"
                aria-label="Name"
              >
            </div>
            <div class="mt-6">
              <label
                class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                for="email"
              >Email</label>
              <input
                id="email"
                class="
                w-full
                px-5
                py-2
                border border-gray-300
                dark:border-primary-dark
                border-opacity-50
                text-primary-dark
                dark:text-secondary-light
                bg-ternary-light
                dark:bg-ternary-dark
                rounded-md
                shadow-sm
                text-md
              "
                name="email"
                type="text"
                required=""
                placeholder="Your Email"
                aria-label="Email"
              >
            </div>
            <div class="mt-6">
              <label
                class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                for="subject"
              >Asunto</label>
              <input
                id="subject"
                class="
                w-full
                px-5
                py-2
                border border-gray-300
                dark:border-primary-dark
                border-opacity-50
                text-primary-dark
                dark:text-secondary-light
                bg-ternary-light
                dark:bg-ternary-dark
                rounded-md
                shadow-sm
                text-md
              "
                name="subject"
                type="text"
                required=""
                placeholder="Subject"
                aria-label="Subject"
              >
            </div>
  
            <div class="mt-6">
              <label
                class="block text-lg text-primary-dark dark:text-primary-light mb-2"
                for="message"
              >Mensaje</label>
              <textarea
                id="message"
                class="
                w-full
                px-5
                py-2
                border border-gray-300
                dark:border-primary-dark
                border-opacity-50
                text-primary-dark
                dark:text-secondary-light
                bg-ternary-light
                dark:bg-ternary-dark
                rounded-md
                shadow-sm
                text-md
              "
                name="message"
                cols="14"
                rows="6"
                aria-label="Message"
              />
            </div>
  
            <div class="mt-6">
              <UButton
                class="text-sm px-4 flex justify-end mx-2"
                color="white"
                type="submit"
                label="Enviar mensaje"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="w-full md:w-1/2">
        <div class="text-left max-w-xl px-6">
          <h2
            class="font-general-medium text-sky-950 text-2xl mt-8 mb-8"
          >
            Dirección de contacto
          </h2>
          <ul class="font-general-regular">
            <li
              v-for="contact in contacts"
              :key="contact.id"
              class="flex"
            >
              <Icon
                :name="contact.icon"
                size="32px"
                class="w-5 text-sky-950 mr-4"
              />
              <a
                class="text-lg mb-4 text-sky-950"
                :class="
                  contact.icon === 'mail' || contact.icon === 'phone'
                    ? 'hover:underline cursor-pointer'
                    : ''
                "
                aria-label="Website and Phone"
              >
                {{ contact.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>