<script setup lang="ts">
import IconCrossClose from '@/components/icons/IconCrossClose.vue'
import {ref} from 'vue'
import {onClickOutside} from '@vueuse/core'

const props = defineProps({
  isOpen: Boolean,
  title: String,
  subTitle: String
})

const emit = defineEmits(['modal-close'])

const target = ref(null)

onClickOutside(target, () => emit('modal-close'))
</script>

<template>
  <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
    <div class="flex items-center justify-center min-h-screen">
      <div class="absolute bg-white overflow-hidden shadow-xl w-[450px]" ref="target">
        <div class="flex absolute top-[15px] right-[15px] cursor-pointer" @click="emit('modal-close')">
          <IconCrossClose/>
        </div>
        <div class="py-6">
          <div class="px-4 mb-4">
            <span class="mr-3.5 text-lg font-bold">
              {{ title }}
            </span>
            <span class="text-[#B0B0B0] text-xs">
              {{ subTitle }}
            </span>
          </div>
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
