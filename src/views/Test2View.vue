<script setup lang="ts">
import {useClientStore} from "@/stores/client.ts";

const store = useClientStore()
store.fetch(1733659517251)
</script>

<template>
  <button class="border" @click="test">Api test</button>
</template>

<style scoped>

</style>
