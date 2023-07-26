<template>
  <DialogWrap :show="show">
    <template #default>
      <div class="dialog__card">
        <div class="dialog__card-content">
          <Icon
            name="clear"
            @click="onClickClose($event)"
          />
        </div>
        <Separator />
        <div class="dialog__card-content"></div>
      </div>
    </template>
  </DialogWrap>
</template>

<script lang="ts" setup>
import './style.scss'
import './CreateRoomDialog.scss'

import { default as DialogWrap } from './DialogWrap.vue'
import { Separator } from 'src/components/misc'

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (event: 'close', e: Event): void
}>()

const onClickClose = (event: Event) => {
  emit('close', event)
}
</script>
