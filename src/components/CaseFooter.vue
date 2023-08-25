<template>
  <v-footer padless height="50" :style="appFooterStyle">
    <v-col class="text-center text-black" cols="12">
      {{ new Date().getFullYear() }} — <strong>Position Case</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      appFooterStyle: {
        background: "#4a90e215 0% 0% no-repeat padding-box",
        border: "1px solid #4a90e2",
        borderRadius: "4px",
        opacity: "1",
        margin: "0 auto",
        boxShadow: 'none'
      },
    };
  },
};
</script>