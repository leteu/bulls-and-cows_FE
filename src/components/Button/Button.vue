<template>
  <div
    class="btn"
    :class="{
      'btn__primary': !secondary,
      'btn__secondary': secondary,
    }"
  ><p>{{ label }}</p></div>
</template>

<script lang="ts" setup>
import "./style.scss"

defineProps({
  label: {
    type: String,
    default: () => '',
  },
  secondary: {
    type: Boolean,
    default: () => false,
  }
})
</script>
