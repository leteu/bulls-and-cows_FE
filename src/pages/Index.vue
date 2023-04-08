<template>
  <div :class="$style.main">
    <div class="row" :class="$style['main-visual']">
      <img src="/favicon.svg" alt="" width="150">
      <div class="col flex flex-center">
        <div>
          <div :class="$style.title">
            숫자야구
          </div>
          <div :class="$style.desc">
            아래 버튼을 선택하여 시작
          </div>
        </div>
      </div>
    </div>
    <div class="row gap">
      <BacBtn label="싱글 플레이" @click="goToLink('SinglePlay')" />
      <BacBtn label="멀티 플레이" @click="goToLink('MultiLobby')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BacBtn } from 'src/components/Button'
import { useRouter } from 'vue-router'

const $router = useRouter()

const goToLink = (name: string) => {
  $router.push({ name })
}
</script>

<style lang="sass" module>
.main
  margin: 100px auto
  width: 500px
  .main-visual
    margin-bottom: 48px
    .title
      font-size: 48px
      font-weight: bolder
    .desc
      font-size: 24px
</style>
