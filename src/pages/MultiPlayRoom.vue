<template>방 {{ roomName }}</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const roomName = ref('')

onBeforeMount(() => {
  roomName.value = ($route.params.room as string) || ''
})
</script>
