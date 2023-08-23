<template>
  <div class="border-b-2 border-black flex flex-col justify-center gap-3 w-[75vw]" style="margin: 0 auto;">
    <div class="top-0 left-0 bg-white text-black text-md font-bold">
      Position {{ position }}
    </div>
    <div class="flex flex-row gap-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: Number,
  },
};
</script>