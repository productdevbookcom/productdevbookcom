<script setup lang="ts">
import type { ProjectProps } from 'components/Project.vue'

const projects: ProjectProps['data'][] = [
  {
    title: 'oku',
    description: 'Oku is a brand and community focused on Vue and Nuxt ecosystem. The name Oku means "read" in Turkish. This name is used to read the world, read life, read people, read code, read design, read anything. In Türkiye, where I live, the phrase read is used a lot. Therefore, they used the name Oku. To show our respect for the library, science and knowledge. Also, our organization @productdevbook reads a lot of books. Therefore, the name Oku is versatile for her as well. The library and the book are his greatest passion.',
    github: 'oku-ui',
    website: 'https://oku-ui.com',
  },
  {
    title: 'productdevbook',
    description: 'oku',
    github: 'productdevbookcom',
    cards: [
      {
        name: 'packages',
        data: [
          {
            title: 'ts-i18n', category: 'NPM Package', description: 'Give your TypeScript the ability to speak many languages.', link: 'https://github.com/productdevbookcom/ts-i18n',
          },
          {
            title: 'ts-relay-cursor-paging', category: 'NPM Package', description: 'Simple relay cursor paging for graphql.', link: 'https://github.com/productdevbookcom/ts-relay-cursor-paging',
          },
          {
            title: 'urql-storage-capacitor', category: 'NPM Package', description: 'Graphcache offline storage for Capacitor.', link: 'https://github.com/productdevbookcom/urql-storage-capacitor',
          },
          {
            title: 'v-plausible', category: 'NPM Package', description: 'Plausible Analytics module for Nuxt 3 or Vue 3.', link: 'https://github.com/productdevbookcom/v-plausible',
          },
          {
            title: 'animejs-vue', category: 'NPM Package', description: 'A lightweight JavaScript animation library with a simple, yet powerful API. Support Vue 3, Nuxt 3.', link: 'https://github.com/productdevbookcom/animejs-vue',
          },
          {
            title: 'chatwoot', category: 'NPM Package', description: 'Chatwoot is a customer support tool for instant messaging channels which can help businesses to provide exceptional customer support.', link: 'https://github.com/productdevbookcom/chatwoot',
          },
          {
            title: 'avvvatars-vue', category: 'NPM Package', description: 'Avvvatars is a free avatar placeholder service for developers and designers.', link: 'https://github.com/productdevbookcom/avvvatars-vue',
          },
        ],
      },
      {
        name: 'templates',
        data: [
          {
            title: 'ts-bundle-template', category: 'template', description: 'Smart TypeScript speed bundle template.', link: 'https://github.com/productdevbookcom/ts-bundle-template',
          },
          {
            title: 'vue-ts-bundle-template', category: 'template', description: 'a template or boilerplate project for building Vue.js applications that are bundled using Vite.', link: 'https://github.com/productdevbookcom/vue-ts-bundle-template',
          },
          {
            title: 'nuxt-bundle-template', category: 'template', description: 'a template or boilerplate project for building Nuxt.js applications.', link: 'https://github.com/productdevbookcom/nuxt-bundle-template',
          },
        ],
      },
    ],
  },
  {
    title: 'huntersofbook',
    description: 'oku',
    github: 'huntersofbook',
    cards: [
      {
        name: 'packages',
        data: [
          {
            title: 'i18n', category: 'NPM Package', description: 'Give your TypeScript the ability to speak many languages.', link: 'https://github.com/huntersofbook/i18n',
          },
          {
            title: 'naive-ui-nuxt', category: 'NPM Package', description: 'Naive UI Nuxt Module.', link: 'https://github.com/huntersofbook/naive-ui-nuxt',
          },
        ],
      },
    ],
  },
]
</script>

<template>
  <Header />
  <div class="flex flex-col items-center">
    <!-- hero section -->
    <div class="flex flex-col justify-center gap-4 mt-40 relative">
      <div class="light absolute -left-[200px] -top-[400px]" />
      <h1 class="text-2xl text-white font-medium md:text-5xl max-w-[600px] text-center !leading-snug z-10">
        We Develop Open Source Projects For All
      </h1>
      <p class="text-base sm:text-xl text-[#747474] leading-normal max-w-[600px] text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae enim at minima porro! Incidunt, facere dolores tenetur nostrum earum temporibus!
      </p>
      <div class="flex gap-4 items-center justify-center mt-4">
        <Button name="Join Us" priority="primary" link="https://chat.productdevbook.com" blank icon="discord" />
        <Button name="Github" priority="secondary" link="https://chat.productdevbook.com" blank icon="github" />
      </div>
    </div>

    <!-- projects section -->
    <div class="flex flex-col gap-60 mt-20 container">
      <div v-for="item in projects" :key="item?.title" class="flex justify-center">
        <Project :data="{ ...item }" />
      </div>
    </div>

    <!-- newsletter section -->
    <div class="flex justify-center my-40">
      <Newsletter />
    </div>
  </div>
</template>
