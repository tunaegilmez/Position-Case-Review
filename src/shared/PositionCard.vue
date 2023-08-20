<template>
  <div class="border-b-2 border-black p-2 relative flex gap-6">
      <div
      class="absolute top-0 left-0 bg-white p-1 text-black text-xs font-bold"
      >
      Position {{ position }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    position: Number,
  },
};
</script>
