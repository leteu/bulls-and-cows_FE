<template>
  <div></div>
  <CreateRoomDialog
    :show="showCreateRoomDialog"
    @close="setShowCreateRoomDialog(false)"
  />
</template>

<script lang="ts" setup>
import { CreateRoomDialog } from 'src/components/Dialog'
import { ref } from 'vue'

const showCreateRoomDialog = ref(false)

const setShowCreateRoomDialog = (value: boolean) => {
  showCreateRoomDialog.value = value
}
</script>
