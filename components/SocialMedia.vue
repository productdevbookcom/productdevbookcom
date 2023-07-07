<script setup lang="ts">
interface SocialMediaProps {
  link: string
}

defineProps<SocialMediaProps>()
</script>

<template>
  <a target="_blank" class="bg-[#222] border border-[#282828] rounded-full flex items-center justify-center w-10 h-10 hover:bg-[#333] transition duration-300" :href="link">
    <slot />
  </a>
</template>
