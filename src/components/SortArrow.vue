<script setup lang="ts">
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconArrowUp from "@/components/icons/IconArrowUp.vue";
import {useClientsStore} from "@/stores/clients.ts";

const props = defineProps({
  type: String,
  letters: Boolean
})

const store = useClientsStore()
</script>

<template>
    <span v-if="store.sortColumn === props.type">
    <IconArrowDown v-if="store.sortDirection"/>
    <IconArrowUp v-else/>
  </span>
  <span v-else>
    <IconArrowDown/>
  </span>
  <span v-if="props.letters" class="text-[10px] text-[#9873FF]">
    <span v-if="store.sortColumn === props.type">
        <span v-if="store.sortDirection">А-Я</span>
        <span v-else>Я-А</span>
    </span>
  </span>
</template>

<style scoped>

</style>
