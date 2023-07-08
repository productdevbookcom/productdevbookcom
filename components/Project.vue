<template>
  <div class="flex flex-col gap-2 items-center">
    <div class="text-xs text-[#717171] px-2 py-[5px] border border-[#272727] rounded-full">
      PROJECT
    </div>
    <h3 class="text-[32px] text-white font-medium">
      project title
    </h3>
    <p class="max-w-[480px] text-sm sm:text-base leading-normal text-center text-[#727272]">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, dicta doloremque deserunt suscipit dolore dolor ad architecto ex voluptatum asperiores cumque ipsa pariatur et reiciendis!
    </p>
    <div class="flex items-center gap-4 mt-4">
      <Button priority="primary" link="" name="Project Website" :blank="true" icon="arrow" />
      <Button priority="secondary" link="" name="Github" :blank="true" icon="github" />
    </div>
  </div>
</template>
