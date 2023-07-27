<template>
  <i
    ref="iconRef"
    class="material-icons"
  >
    {{ name }}
  </i>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
})

const iconRef = ref()

onMounted(() => {
  iconRef.value.style.color = props.color
})
</script>
