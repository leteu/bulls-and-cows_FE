<template>
  <div class="lobby">
    <div class="lobby__header">
      <div></div>
      <div>
        <button @click="showCreateRoomDialog">방 만들기</button>
      </div>
    </div>
    <div class="lobby__room-list">
      <template
        v-for="(room, index) in roomList"
        :key="`room-${index}`"
      >
        <RoomCard
          :id="room.id"
          :match="room.match"
          :name="room.name"
          :observer="room.observer"
          :player="room.player"
          @click="joinRoom(room.id)"
        />
      </template>
    </div>
    <div class="pagination"></div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import { Room } from 'src/types'
import { api } from 'src/api'
import { useMulitPlayStore } from 'src/store'

import { CreateRoomDialog } from 'src/components/Dialog'
import { RoomCard } from 'src/components/Multiplay'

const $q = useQuasar()
const $router = useRouter()
const $multi = useMulitPlayStore()
const { token } = storeToRefs($multi)

const roomList = ref<Room[]>([])

const showCreateRoomDialog = () => {
  $q.dialog({
    component: CreateRoomDialog,
    componentProps: {},
  })
}

const getRoomList = async () => {
  const res = await api.get('/room/list')

  roomList.value = res.data.contents
}

const joinRoom = async (id: string) => {
  try {
    console.log(token.value)

    await api.post('/room/join', {
      id,
      token: token.value,
    })

    $router.push({ name: 'MultiPlayRoom', params: { room: id } })
  } catch (e) {
    //
  }
}

onBeforeMount(() => {
  getRoomList()
})
</script>

<style lang="sass" scoped>
.lobby
  margin: 0 auto
  width: 1440px
  display: flex
  flex-direction: column
  gap: 16px
  &__header
    display: flex
    align-items: center
    justify-content: space-between
  &__room-list
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 16px
</style>
