<script setup lang="ts">
defineProps({
  priority: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  blank: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <a
    :target="[blank === true ? '_blank' : '']" :class="[priority === 'primary' ? 'primary-btn' : 'secondary-btn']"
    :href="link"
  >{{
    name }}</a>
</template>

<style>
.primary-btn {
  @apply bg-royalblue-600 px-4 py-2 rounded-full border-royalblue-600 border text-white transition duration-300;

  &:hover {
    @apply bg-royalblue-500 border-royalblue-500;
  }
}

.secondary-btn {
  @apply bg-codgray-950 px-4 py-2 rounded-full border-codgray-900 border text-white transition duration-300;

  &:hover {
    @apply bg-codgray-900;
  }
}
</style>
