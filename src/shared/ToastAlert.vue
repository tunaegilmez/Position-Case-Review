<template>
  <v-alert
    :value="visible"
    :type="type"
    dismissible
    @input="visible = false"
    class="custom-alert"
  >
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
    duration: {
      type: Number,
      default: 2000, // Default duration in milliseconds (2 seconds)
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  watch: {
    visible(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.visible = false;
        }, this.duration);
      }
    },
  },
};
</script>

<style scoped>
.custom-alert {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}
</style>
