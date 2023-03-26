<template>
  <div class="main">
    <div class="row main-visual">
      <img src="/favicon.svg" alt="" width="150">
      <div class="column">
        <div class="title">
          숫자야구
        </div>
        <div class="desc">
          아래 버튼을 선택하여 시작
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

<style lang="sass" scoped>
.main
  margin: 100px auto
  width: 500px
  &-visual
    margin-bottom: 48px
    .column
      margin: auto 16px
      .title
        font-size: 32px
        font-weight: bolder
</style>
