<script setup lang="ts">
const isOpen = ref(false)

function Toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="py-4 border-b border-[#212121] w-full">
    <div class="container grid grid-cols-2 md:grid-cols-3 items-center">
      <div class="">
        <Logo />
      </div>
      <ul class="hidden md:flex items-center gap-6 place-self-center">
        <li><a class="nav-link" href="#">oku</a></li>
        <li><a class="nav-link" href="#">productdevbook</a></li>
        <li><a class="nav-link" href="#">huntersofbook</a></li>
      </ul>
      <ul class="hidden md:flex items-center gap-2 place-self-end">
        <li>
          <SocialMedia link="https://github.com/productdevbookcom">
            <span class="i-fa-brands-github text-white w-5 h-5" />
          </SocialMedia>
        </li>
        <li>
          <SocialMedia link="https://twitter.com/productdevbook">
            <span class="i-fa-brands-twitter text-white w-5 h-5" />
          </SocialMedia>
        </li>
        <li>
          <SocialMedia link="https://chat.productdevbook.com">
            <span class="i-fa-brands-discord text-white w-5 h-5" />
          </SocialMedia>
        </li>
      </ul>
      <div class="flex px-6 md:hidden items-center justify-center flex-col gap-3 cursor-pointer justify-self-end" :class="{ '!gap-0': isOpen }" @click="Toggle">
        <div class="w-[22px] h-[1px] bg-white transition duration-300" :class="{ 'rotate-45 translate-y-[1px]': isOpen }" />
        <div class="w-[22px] h-[1px] bg-white transition duration-300" :class="{ '-rotate-45 ': isOpen }" />
      </div>
      <div class="fixed top-[61px] left-0 translate-x-[200%] w-full h-screen  transition duration-300 px-6" :class="{ '!translate-x-[0%]': isOpen }">
        <div class="flex flex-col gap-8">
          <ul class="flex flex-col gap-3 mt-8">
            <li>
              <a href="#" class="text-[#818181] text-3xl font-medium hover:text-white transition duration-300">oku</a>
            </li>
            <li>
              <a href="#" class="text-[#818181] text-3xl  font-medium hover:text-white transition duration-300">productdevbook</a>
            </li>
            <li>
              <a href="#" class="text-[#818181] text-3xl  font-medium hover:text-white transition duration-300">huntersofbook</a>
            </li>
          </ul>
          <ul class="flex items-center gap-2">
            <li>
              <SocialMedia link="https://github.com/productdevbookcom">
                <span class="i-fa-brands-github text-white w-5 h-5" />
              </SocialMedia>
            </li>
            <li>
              <SocialMedia link="https://twitter.com/productdevbook">
                <span class="i-fa-brands-twitter text-white w-5 h-5" />
              </SocialMedia>
            </li>
            <li>
              <SocialMedia link="https://chat.productdevbook.com">
                <span class="i-fa-brands-discord text-white w-5 h-5" />
              </SocialMedia>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss">
.nav-link {
  @apply text-[#aaa] transition duration-300;
  &:hover {
    @apply text-white;
  }
}
</style>
