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
          <div class="mb-2 font-bold text-lg flex justify-center">
            Удалить {{ title }}
          </div>
          <div class="flex justify-center">
            <div class="text-sm w-64 text-center">
              Вы действительно хотите удалить {{ subTitle }}?
            </div>
          </div>
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
