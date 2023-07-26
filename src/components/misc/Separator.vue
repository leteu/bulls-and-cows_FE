<template>
  <div :class="styles" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
  inset: {
    type: Boolean,
    default: false,
  },
})

const orientation = computed(() => (props.vertical ? 'vertial' : 'horizontal'))
const inset = computed(() => (props.inset ? '-inset' : ''))

const styles = computed(() => `separator separator--${orientation.value}${inset.value}`)
</script>

<style lang="scss">
.separator {
  border: 0;
  background: #dadada;
  margin: 0;
  transition:
    background 0.3s,
    opacity 0.3s;
  flex-shrink: 0;

  &--horizontal {
    display: block;
    height: 1px;

    &-inset {
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  &--vertical {
    width: 1px;
    height: auto;
    align-self: stretch;

    &-inset {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
}
</style>
