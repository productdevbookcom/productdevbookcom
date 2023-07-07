<script setup lang="ts">
interface ButtonProps {
  priority?: string
  link: string
  name: string
  blank?: boolean
}

defineProps<ButtonProps>()
</script>

<template>
  <a
    :target="blank === true ? '_blank' : ''" :class="[priority === 'primary' ? 'primary-btn hover:bg-royalblue-500 hover:border-royalblue-500 px-3 py-2 md:px-4 md:py-[10px]' : 'secondary-btn hover:bg-codgray-900 px-3 py-2 md:px-4 md:py-[10px]']"
    :href="link"
  >{{
    name }}</a>
</template>

<style lang="postcss">
.primary-btn {
  @apply bg-royalblue-600 rounded-full border-royalblue-600 border text-white transition duration-300;
}

.secondary-btn {
  @apply bg-codgray-950 rounded-full border-codgray-900 border text-white transition duration-300;

}
</style>
