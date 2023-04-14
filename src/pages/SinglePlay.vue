<template>
  <div class="page">
    <div class="play-board">
      <div class="plate-appearance-container">
        <template v-for="i in 8" :key="`plate-${i}`">
          <PlateAppearance :call="$single.getUmpireCall(i - 1)" :value="$single.getInning(i - 1)" />
        </template>
      </div>
      <ColorPalette @click:marble="onClickMarble" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'

import { ColorPalette } from 'src/components/ColorPalette'
import { PlateAppearance } from 'src/components/PlateAppearance'
import { MarbleType } from 'src/types'
import { useSinglePlayStore } from 'src/store'
import { storeToRefs } from 'pinia'

const $single = useSinglePlayStore()
const { currentInning } = storeToRefs($single)

const onClickMarble = (marble: MarbleType) => {
  if ((currentInning.value.value as MarbleType[]).includes(marble)) {
    alert('이미 선택된 구슬입니다.')
    return
  }
  $single.addMableToInning(currentInning.value.key, marble)
}

onBeforeMount(() => {
  $single.getNewAnswer()
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
      grid-template-rows: repeat(4, 1fr)
      grid-auto-flow: column
      gap: 16px
</style>
