<template>
  <footer class="w-full border-t border-[#212121] py-12">
    <div class="container flex flex-col md:flex-row items-start gap-12 md:justify-between">
      <div class="">
        <Logo type="big" />
      </div>
      <div class="flex flex-col gap-4">
        <span class="text-white font-medium">Projects</span>
        <ul class="flex flex-col gap-1">
          <li><a class="text-[#999999] transition duration-300 hover:text-white" href="#oku">oku</a></li>
          <li><a class="text-[#999999] transition duration-300 hover:text-white" href="#productdevbook">productdevbook</a></li>
          <li><a class="text-[#999999] transition duration-300 hover:text-white" href="#huntersofbook">huntersofbook</a></li>
        </ul>
      </div>
      <ul class="flex gap-2">
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
  </footer>
</template>
