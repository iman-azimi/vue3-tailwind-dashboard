<template>
  <div
    v-if="show"
    class="fixed top-0 left-0 w-full h-full z-40 bg-gray-900/80 backdrop-blur-sm"
  >
    <div data-aos="fade-right" class="flex justify-center">
      <div
        v-click-out-side="closeModal"
        class="inline-block"
        :style="`width:${width}px`"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show?: false
  width: {
    type: number
    required: false
    default: 500
  }
}>()
const emit = defineEmits(['close'])

const vClickOutSide = {
  beforeMount(el: any, binding: any) {
    el.clickOutsideEvent = (evt: any) => {
      evt.stopPropagation()
      if (!(el === evt.target || el.contains(evt.target))) {
        binding.value(evt, el)
      }
    }
    // Wait 1 frame otherwise a potential click that mounted the element will immediately trigger a click-outside event:
    window.requestAnimationFrame(() => {
      document.addEventListener('click', el.clickOutsideEvent)
    })
  },
  unmounted(el: any) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
}
function closeModal() {
  emit('close')
}
</script>

<style scoped></style>
