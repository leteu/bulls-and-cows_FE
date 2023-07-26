<template>
  <Transition
    name="custom-classes"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    appear
  >
    <div class="dialog" v-if="show">
      <slot></slot>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import 'animate.css';
import './style.scss'

defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})
</script>
