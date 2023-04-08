<template>
  <div
    class="btn"
    :class="{
      'btn__primary': !secondary,
      'btn__secondary': secondary,
      'btn__disabled': disable,
    }"
    @click="onClick"
  ><p>{{ label }}</p></div>
</template>

<script lang="ts" setup>
import "./style.scss"

const props = defineProps({
  label: {
    type: String,
    default: () => '',
  },
  secondary: {
    type: Boolean,
    default: () => false,
  },
  disable: {
    type: Boolean,
    default: () => false,
  }
})

const emit = defineEmits<{
  (event: 'click', e: Event): void
}>()

const onClick = (e: Event) => {
  if (!props.disable) {
    emit('click', e)
  }
}
</script>
