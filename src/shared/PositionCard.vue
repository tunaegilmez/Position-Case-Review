<template>
  <div class="card border-black flex flex-col justify-center gap-3 mt-3 w-[75vw]" style="margin: 0 auto;">
    <div class="top-0 left-0 bg-white text-black text-md font-bold">
      Position {{ position }}
    </div>
    <div class="flex flex-row">
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

<style scoped>
.card {
  border-bottom: 1px solid black;
}
</style>