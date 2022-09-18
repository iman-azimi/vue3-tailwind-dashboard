<template>
  <div class="flex">
    <div class="h-screen">
      <NavigationDrawer v-if="!isMobile" />
    </div>
    <div class="w-full">
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { isMobile } from 'mobile-device-detect'
</script>
