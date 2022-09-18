<template>
  <section>
    <div
      class="flex justify-between items-center cursor-pointer text-black dark:text-white"
      @click="changeColorMode()"
    >
      <div
        class="w-10/12 h-11 flex items-center p-px duration-300 ease-in-out rounded-full mx-auto"
        :class="[toggleActive ? 'bg-dark-700' : 'bg-neutral-100']"
      >
        <span v-if="toggleActive" class="leading-9 absolute left-8">
          <img src="@/assets/images/icons/sun.svg" class="inline" />
          Light
        </span>

        <div
          class="w-1/2 h-10 rounded-full transform duration-300 ease-in-out text-center border border-violet-900"
          :class="[
            toggleActive ? 'bg-dark-900 translate-x-[7.5rem]' : 'bg-white',
          ]"
        >
          <span class="leading-9">
            <img
              v-if="toggleActive"
              src="@/assets/images/icons/moon.svg"
              class="inline"
            />
            <img
              v-if="!toggleActive"
              src="@/assets/images/icons/sun.svg"
              class="inline"
            />

            {{ toggleActive ? 'Dark' : 'Light' }}
          </span>
        </div>

        <div class="text-center w-1/2">
          <span v-if="!toggleActive" class="leading-9">
            <img src="@/assets/images/icons/moon.svg" class="inline" />
            Dark
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useThemeStore } from '../stores/theme'

const toggleActive = ref(false)
const themeStore = useThemeStore()
function changeColorMode() {
  toggleActive.value = !toggleActive.value
  const theme = toggleActive.value ? 'dark' : 'light'
  localStorage.setItem('theme', theme)
  themeStore.changeTheme(theme)
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

onMounted(async () => {
  const theme = localStorage.getItem('theme') || 'light'
  themeStore.changeTheme(theme)
  if (theme && theme === 'dark') {
    toggleActive.value = true
    document.body.classList.add('dark')
  }
})
</script>

<style lang="scss" scoped></style>
