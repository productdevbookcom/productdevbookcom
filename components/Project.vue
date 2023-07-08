<script setup lang="ts">
export interface ProjectProps {
  data: {
    title: string
    description: string
    github?: string
    website?: string
  }
}

defineProps<ProjectProps>()
</script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <div class="text-xs text-[#717171] px-2 py-[5px] border border-[#272727] rounded-full">
      PROJECT
    </div>
    <h3 class="text-[32px] text-white font-medium">
      {{ data.title }}
    </h3>
    <p class="max-w-[480px] text-sm sm:text-base leading-normal text-center text-[#727272]">
      {{ data.description }}
    </p>
    <div class="flex items-center gap-4 mt-4">
      <Button priority="primary" :link="data.website ? data.website : ''" name="Project Website" :blank="true" icon="arrow" :class="{ hidden: !data.website }" />
      <Button priority="secondary" :link="data.github ? `https://github.com/${data.github}` : ''" name="Github" :blank="true" icon="github" :class="{ hidden: !data.github }" />
    </div>
  </div>
</template>
