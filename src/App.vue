<script setup>
import DashboardFooter from './components/DashboardFooter.vue'
import DashboardHeader from './components/DashboardHeader.vue'
import PageContainer from './components/PageContainer.vue'
</script>

<template>
  <PageContainer>
    <div class="dashboard">
      <DashboardHeader />
      <main>
        <RouterView />
      </main>
    </div>
    <DashboardFooter />
  </PageContainer>
</template>

<style scoped>
.dashboard {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
}

@media (min-width: 640px) {
  .dashboard {
    flex-direction: row;
  }

  main {
    flex-grow: 1;
  }
}
</style>
