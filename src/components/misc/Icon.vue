<template>
  <i class="material-icons">{{ name }}</i>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>