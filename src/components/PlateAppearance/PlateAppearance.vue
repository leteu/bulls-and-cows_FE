<template>
  <div class="plate-appearance">
    <div class="marble-container">
      <template v-for="i in 4">
        <Marble
          v-if="props.value[i - 1]"
          :batted="props.value[i - 1]"
        />
        <div
          v-else
          class="marble-place"
        />
      </template>
    </div>
    <JumbotronBox :call="call" />
  </div>
</template>

<script lang="ts" setup>
import './style.scss'

import type { InningBatted, Jumbotron } from 'src/types'

import { PropType } from 'vue'
import { Marble, JumbotronBox } from '.'

const props = defineProps({
  value: {
    type: Object as PropType<InningBatted>,
    default: (): InningBatted => []
  },
  call: {
    type: Array as unknown as PropType<Jumbotron>,
    default: () => []
  },
})
</script>
