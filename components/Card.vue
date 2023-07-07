<script setup lang="ts">
defineProps({
  category: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="relative w-[360px] overflow-hidden group">
    <a :href="link" class="w-[360px] p-4 rounded-2xl flex-col gap-2 backdrop-blur-sm bg-[#575757]/10 border border-[#303030] inline-flex">
      <div class="">
      <span class="text-xs px-2 py-1 border border-[#222] rounded-full text-[#676767] inline">{{ category }}</span>

      </div>
      <span class="text-white font-medium">{{ title }}</span>
      <p class="text-[#6D6D6D]">{{ description }}</p>
      <div class="card-light" />
    </a>
  </div>
</template>

<style>
.card-light {
  @apply absolute w-[220px] h-[220px] transition-all duration-300;
  right: -1px;
  top: -93px;
  background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%);
  opacity: 0.3;
  z-index: -1;

}

.group:hover {
    .card-light {
  opacity: 0.5; transform: scale(1.5);

    }
  }
</style>
