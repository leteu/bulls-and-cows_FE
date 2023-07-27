<template>방 {{ roomName }}</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { api } from 'src/api'
import { useMulitPlayStore } from 'src/store'
import { onBeforeMount, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'

const $multi = useMulitPlayStore()
const { token } = storeToRefs($multi)

const $route = useRoute()
const roomName = ref('')

const leaveRoomEvt = (event?: Event) => {
  event?.preventDefault()

  console.log(1)

  api.post('/room/leave', {
    id: roomName.value,
    token: token.value,
  })
}

onBeforeMount(() => {
  roomName.value = ($route.params.room as string) || ''
  window.addEventListener('beforeunload', leaveRoomEvt)
})

onBeforeUnmount(() => {
  leaveRoomEvt()
  window.removeEventListener('beforeunload', leaveRoomEvt)
})
</script>
