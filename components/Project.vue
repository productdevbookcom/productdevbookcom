<script setup lang="ts">
import ProjectCards from './ProjectCards.vue'
import type { IProjectCards } from './ProjectCards.vue'

export interface ProjectProps {
  data: {
    title: string
    description: string
    github?: string
    website?: string
    cards?: IProjectCards[]
  }
}

defineProps<ProjectProps>()
</script>

<template>
  <div :id="data.title" class="flex flex-col gap-2 items-center pt-20">
    <div class="text-xs text-[#717171] px-2 py-[5px] border border-[#272727] rounded-full">
      PROJECT
    </div>
    <h3 class="text-[32px] text-white font-medium">
      {{ data.title }}
    </h3>
    <p class="max-w-[600px] text-sm sm:text-base leading-normal text-center text-[#727272]">
      {{ data.description }}
    </p>
    <div class="flex items-center gap-4 mt-4">
      <Button priority="primary" :link="data.website ? data.website : ''" name="Project Website" :blank="true" icon="arrow" :class="{ hidden: !data.website }" />
      <Button priority="secondary" :link="data.github ? `https://github.com/${data.github}` : ''" name="Github" :blank="true" icon="github" :class="{ hidden: !data.github }" />
    </div>

    <div v-for="item in data.cards" :key="item.name" class="flex flex-col" :class="{ '!hidden': !data.cards }">
      <div class="w-full h-[1px] bg-[#212121] my-8" />
      <div class="flex items-center gap-2">
        <h3 class="text-white text-2xl font-medium">
          {{ item.name }}
        </h3>
        <a target="_blank" class="text-[#ccc] transition duration-300 hover:text-white flex items-center gap-1 group" :href="data.github ? `https://github.com/${data.github}` : ''">View All <span class="i-ic-outline-arrow-forward transition-all duration-300 group-hover:translate-x-1" /> </a>
      </div>

      <ProjectCards class="mt-4" :data="item.data" :class="{ '!hidden': !data.cards }" />
    </div>
  </div>
</template>
