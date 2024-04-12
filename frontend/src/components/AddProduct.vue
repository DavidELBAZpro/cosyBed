<template>
  <button
    @click="isModalOpen = true"
    data-modal-target="crud-modal"
    data-modal-toggle="crud-modal"
    class="block float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    + Ajouter un produit
  </button>

  <!-- Main modal -->
  <div
    v-show="isModalOpen"
    id="crud-modal"
    tabindex="-1"
    aria-hidden="true"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-auto z-50 flex justify-end items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    @click="closeOnOutsideClick"
  >
    <div class="relative p-4 w-full max-w-md max-h-full" @click.stop>
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3
            class="text-lg font-semibold text-gray-900 dark:text-white underline"
          >
            Ajout d'un produit
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="crud-modal"
            @click="isModalOpen = false"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form class="p-4 md:p-5">
          <div class="grid gap-4 mb-4 grid-cols-2">
            <div class="flex items-center justify-center w-full col-span-2">
              <label
                v-if="!imageData.url"
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG OR JPEG (MAX. 1980x18200px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  @change="handleFileUpload"
                  accept=".svg, .png, .jpg, .jpeg"
                />
              </label>
            </div>
            <div
              v-if="imageData.url"
              class="flex items-center justify-center w-full col-span-2"
            >
              <img
                :src="imageData.url"
                :alt="imageData.file?.name"
                class="max-w-full h-auto rounded-lg"
              />
            </div>
            <div class="col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nom du produit<span class="text-gray-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Entrez le nom du produit"
                required="true"
              />
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Prix<span class="text-gray-400">* (€)</span></label
              >
              <input
                type="number"
                name="price"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="299 €"
                required="true"
              />
            </div>
            <div class="col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description<span class="text-gray-400">*</span></label
              >
              <textarea
                id="description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex: Belle petite chaise de jardin ..."
                required="true"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Add new product
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const isModalOpen = ref(false)
const imageData = reactive({
  file: null as File | null,
  url: '' as string,
})

const closeOnOutsideClick = (event: MouseEvent) => {
  if (event.target instanceof HTMLElement && event.target.id === 'crud-modal') {
    isModalOpen.value = false
  }
}

function handleFileUpload(event: Event) {
  const files = (event.target as HTMLInputElement).files
  if (!files) return

  const file = files[0]
  if (!file) return
  // Validation du type et de la taille de l'image
  const validTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif']
  if (!validTypes.includes(file.type)) {
    alert('Invalid file type. Please select an image file.')
    return
  }
  if (file.size > 1980 * 18200) {
    alert('File is too large. Max size is 1980x18200.')
    return
  }

  imageData.file = file
  imageData.url = URL.createObjectURL(file)
}
//libérer les ressources lorsque le composant est démonté
watch(isModalOpen, (newValue) => {
  if (!newValue) {
    if (imageData.url) {
      URL.revokeObjectURL(imageData.url)
      imageData.url = ''
      imageData.file = null
    }
  }
})
</script>
