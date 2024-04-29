<script setup>
import TrackingList from '@/components/TrackingList.vue'
import data from '@/data.json'

const formattedData = data.map((item) => {
  const { timeframes, ...rest } = item
  return { ...rest, ...timeframes.daily }
})
</script>

<template>
  <TrackingList :items="formattedData" />
</template>
