<script setup lang="ts">
interface ButtonProps {
  priority?: 'primary' | 'secondary'
  link: string
  name: string
  blank?: boolean
  icon?: 'arrow' | 'github' | 'discord'
}

defineProps<ButtonProps>()
</script>

<template>
  <a
    class="inline-flex items-center gap-2"
    :target="blank === true ? '_blank' : ''" :class="[priority === 'primary' ? 'primary-btn hover:bg-royalblue-500 hover:border-royalblue-500 px-3 py-2 md:px-4 md:py-[10px]' : 'secondary-btn hover:bg-codgray-900 px-3 py-2 md:px-4 md:py-[10px]']"
    :href="link"
  >
    <span class="i-fa-brands-github text-white w-5 h-5" :class="{ hidden: icon !== 'github' }" />
    <span class="i-fa-brands-discord text-white w-5 h-5" :class="{ hidden: icon !== 'discord' }" />
    {{ name }}
    <span class="i-ic-round-arrow-outward text-white w-5 h-5" :class="{ hidden: icon !== 'arrow' }" />
  </a>
</template>

<style>
.primary-btn {
  @apply bg-royalblue-600 rounded-full border-royalblue-600 border text-white transition duration-300;
}

.secondary-btn {
  @apply bg-codgray-950 rounded-full border-codgray-900 border text-white transition duration-300;

}
</style>
