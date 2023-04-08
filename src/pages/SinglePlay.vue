<template>
  <div class="page">
    <div class="play-board">
      <div class="plate-appearance-container">
        <template v-for="i in 8" :key="`plate-${i}`">
          <PlateAppearance :value="hitMap.get(i)" />
        </template>
      </div>
      <ColorPalette />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import type { Inning, InningBatted } from 'src/types'
import { ColorPalette } from 'src/components/ColorPalette'
import { PlateAppearance } from 'src/components/PlateAppearance'
import { MarbleType } from 'src/types'

const hitMap = ref<Map<Inning, InningBatted>>(new Map())

onMounted(() => {
  hitMap.value.set(1, { first: MarbleType.Blue, second: MarbleType.Green, third: MarbleType.Orange, fourth: undefined })
})
</script>

<style lang="sass" scoped>
.page
  margin: 0 auto
  padding: 24px
  width: 60vw
  height: 100vh
  overflow: auto
  .play-board
    display: grid
    grid-template-rows: 4fr 1fr
    gap: 16px
    .plate-appearance-container
      display: grid
      grid-template-columns: repeat(2, 1fr)
      gap: 16px
</style>
