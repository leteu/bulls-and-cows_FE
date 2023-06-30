<template>
  <div :class="$style.main">
    <div class="card">
      <div class="row" :class="$style['main-visual']">
        <img
          src="/baseball.svg"
          :class="$style['baseball-icon']"
          alt=""
        />
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
        <BacBtn label="멀티 플레이" disable @click="goToLink('MultiLobby')" />
      </div>
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
  width: 100vw
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  // background: #415a3c
  background: #2e2e2e
  color: #fff
  .main-visual
    margin-bottom: 48px
    .baseball-icon
      width: 150px
    .title
      font-size: 48px
      font-weight: bolder
    .desc
      font-size: 24px
</style>
