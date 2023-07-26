<template>
  <router-view />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMulitPlayStore } from 'src/store/multi-play-store'
import { onBeforeMount } from 'vue'

const $multi = useMulitPlayStore()
const {} = storeToRefs($multi)

onBeforeMount(() => {
  $multi.connect()
})
</script>

<style lang="sass" scoped></style>
