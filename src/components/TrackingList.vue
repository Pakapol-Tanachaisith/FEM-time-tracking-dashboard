<script setup>
import { useRoute } from 'vue-router'
import TrackingItem from './TrackingItem.vue'

defineProps(['items'])

const route = useRoute()

const previousLabels = {
  weekly: 'Last Week',
  daily: 'Yesterday',
  monthly: 'Last Month'
}
</script>

<template>
  <ul>
    <TrackingItem
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :bg="item.bg"
      :icon="item.icon"
      :current="item.current"
      :previous="item.previous"
      :previous-label="previousLabels[route.name]"
    />
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
