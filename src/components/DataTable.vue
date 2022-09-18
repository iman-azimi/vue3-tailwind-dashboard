<template>
  <div>
    <template v-if="items">
      <table class="min-w-full text-center">
        <thead class="dark:bg-dark-700 bg-neutral-50">
          <tr>
            <th
              v-for="header in headers"
              :key="header.i"
              scope="col"
              class="text-sm text-center first:rounded-l-xl last:rounded-r-xl font-medium text-gray-900 dark:text-white px-6 py-6 text-left"
            >
              {{ header.name }}
            </th>
          </tr>
        </thead>
        <tbody class="top-3">
          <tr
            v-for="item in items"
            :key="item.i"
            class="odd:bg-white even:bg-slate-50 dark:odd:bg-dark-700 dark:even:bg-dark-900"
          >
            <td
              v-for="header in headers"
              :key="header.i"
              class="py-6 whitespace-nowrap text-sm font-medium text-gray-900 text-gray-900 dark:text-white"
            >
              <slot :name="`item-${header.value}`" :item="item">
                {{ item[header.value] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-8 text-dark-800 dark:text-white cursor-pointer">
        <i class="icon-arrow-left align-middle" @click="perPage()" />

        <ul class="inline-block">
          <li
            v-for="i in getPages"
            :key="i"
            class="inline-block mx-3"
            :class="{ 'bg-[#6A59DD] rounded-full py-1 px-3': activePage === i }"
            @click="setPage(i)"
          >
            {{ i }}
          </li>
        </ul>
        <i class="icon-arrow-right align-middle" @click="nextPage()" />
      </div>
    </template>
    <div v-else class="text-center">no data available</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
defineProps<{
  headers?: []
  items?: []
}>()
const activePage = ref(1)
const pageCount = ref(16)

function perPage() {
  if (activePage.value <= 1) {
    return
  }
  activePage.value = activePage.value - 1
}
function nextPage() {
  activePage.value = activePage.value + 1
}
function setPage(i: number) {
  activePage.value = i
}
const getPages = computed(() => {
  const numShown = Math.min(6, pageCount.value)
  let first = activePage.value - Math.floor(numShown / 2)
  first = Math.max(first, 1)
  first = Math.min(first, pageCount.value - numShown + 1)
  return [...Array(numShown)].map((_k, i) => i + first)
})
</script>

<style scoped>
tr:first-child td:first-child {
  @apply rounded-tl-xl;
}

tr:first-child td:last-child {
  @apply rounded-tr-xl;
}

tr:last-child td:first-child {
  @apply rounded-bl-xl;
}

tr:last-child td:last-child {
  @apply rounded-br-xl;
}
</style>
