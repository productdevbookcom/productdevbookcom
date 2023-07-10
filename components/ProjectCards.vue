<script setup lang="ts">
export interface CardProps {
  title: string
  category: string
  description: string
  link: string
}

export interface IProjectCards {
  name?: string
  data?: CardProps[]
}

defineProps<IProjectCards>()
</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
    <div v-for="card in data" :key="card.title" class="w-full">
      <Card :category="card.category" :title="card.title" :description="card.description" :link="card.link" />
    </div>
  </div>
</template>
