<script setup lang="ts">
import type { ProjectProps } from 'components/Project.vue'

const Projects: ProjectProps['data'] = [
  {
    title: 'oku',
    description: 'oku',
    github: 'oku-ui',
    website: 'https://oku-ui.com',
  },
  {
    title: 'productdevbook',
    description: 'oku',
    github: 'productdevbook',
  },
  {
    title: 'huntersofbook',
    description: 'oku',
    github: 'huntersofbook',
  },
]
</script>

<template>
  <Header />
  <div class="flex flex-col items-center">
    <!-- hero section -->
    <div class="flex flex-col justify-center gap-4 mt-20 relative">
      <div class="light absolute -left-[200px] -top-[400px] -z-0" />
      <h1 class="text-2xl text-white font-medium md:text-5xl max-w-[600px] text-center leading-snug">
        We Develop Open Source Projects For All
      </h1>
      <p class="text-sm sm:text-base text-[#828282] leading-normal max-w-[600px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae enim at minima porro! Incidunt, facere dolores tenetur nostrum earum temporibus!
      </p>
      <div class="flex gap-4 items-center justify-center mt-4">
        <Button name="Join Us" priority="primary" link="https://chat.productdevbook.com" blank icon="discord" />
        <Button name="Github" priority="secondary" link="https://chat.productdevbook.com" blank icon="github" />
      </div>
    </div>

    <!-- projects section -->
    <div class="flex flex-col gap-40">
      <div v-for="item in Projects" :key="item?.title" class="flex justify-center">
        <Project :data="{ item }" />
      </div>
    </div>
  </div>
</template>
