<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)

function increment(): void {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
