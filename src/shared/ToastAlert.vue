<template>
  <v-alert :value="visible" :type="type" class="custom-alert">
    <slot></slot>
  </v-alert>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info",
    },
    visible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.custom-alert {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
