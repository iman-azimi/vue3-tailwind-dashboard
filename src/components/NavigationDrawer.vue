<template>
  <aside
    class="flex flex-col justify-between w-80 sticky bg-white dark:bg-dark-900 h-full p-4 rounded-l-lg"
  >
    <div>
      <div class="flex items-center relative mt-6">
        <span class="w-3 h-3 bg-green-500 rounded-full absolute top-4 z-10" />
        <div class="p-2 border-2 border-gray-500 rounded-full text-center">
          <img
            src="@/assets/images/avatar.png"
            class="rounded-full w-16 h-16"
          />
        </div>
        <div class="dark:text-white text-black ml-3">
          <h2 class="text-lg">IMAN AZIMI</h2>
          <span class="text-xs">Manager</span>
        </div>
      </div>
      <div class="w-12/12 mt-10 flex flex-col justify-between">
        <ul class="text-slate-500">
          <li v-for="item in mainItem" :key="item.i" class="py-4 text-lg">
            <div
              :class="[activeRoute === item.link ? getActiveItemClass : '']"
              class="px-4"
            >
              <router-link :to="item.link" @click="activeItem(item.link)">
                <i
                  :class="[
                    activeRoute === item.link ? 'text-pink-400' : '',
                    `icon-${item.icon} text-xl align-middle mr-4`,
                  ]"
                />
                {{ item.title }}
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb-6">
      <DarkMode class="mt-6" />
    </div>
  </aside>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const mainItem = reactive([
  {
    title: 'Overview',
    icon: 'category',
    link: '/',
  },

  {
    title: 'Learning',
    icon: 'teacher',
    link: '/dashboard/learning',
  },
  {
    title: 'Packages',
    icon: 'box-1',
    link: '/dashboard/packages',
  },
  {
    title: 'Transaction',
    icon: 'arrange-square',
    link: '/dashboard/transactions',
  },
  {
    title: 'God View',
    icon: 'hierarchy',
    link: '/dashboard/tree',
  },
  {
    title: 'Users',
    icon: 'profile',
    link: '/dashboard/users',
  },
  {
    title: 'Invitation codes',
    icon: 'share',
    link: '/dashboard/invitation',
  },
  {
    title: 'withdrawals',
    icon: 'bitcoin-convert',
    link: '/dashboard/Withdraw',
  },
  {
    title: 'investments',
    icon: 'coin',
    link: '/dashboard/investments',
  },
])
const activeRoute = ref(null)
onMounted(() => {
  activeRoute.value = route.fullPath
})
const getActiveItemClass = computed(() => {
  return 'dark:text-pink-400 text-black font-bold py-3'
})
function activeItem(link) {
  activeRoute.value = link
}
</script>
