<template>
  <div class="room column gap">
    <div class="row items-center gap">
      <MatchIndicator :status="match" />
      <div class="col ell_wrap">{{ name }}</div>
    </div>
    <div class="flex items-center gap">
      <div class="flex items-center gap-xs">
        <Icon name="sports_mma" />
        <span>{{ `${player.length} / 2` }}</span>
      </div>
      <div class="flex items-center gap-xs">
        <Icon name="visibility" />
        <span>{{ observer.length }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from 'src/components/misc'
import { MatchStatus } from 'src/types'
import { PropType } from 'vue'
import { MatchIndicator } from './MatchIndicator'

defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  match: {
    type: String as PropType<MatchStatus>,
    default: MatchStatus.Wait,
  },
  player: {
    type: Array as PropType<string[]>,
    required: true,
  },
  observer: {
    type: Array as PropType<string[]>,
    default: 0,
  },
})
</script>

<style lang="sass" scoped>
.room
  border-radius: 16px
  border: 1px solid #ccc
  padding: 16px
</style>
