<template>
  <v-app-bar
    app
    rounded
    outlined
    :style="appBarStyle"
    class="flex justify-center items-center w-[75vw] my_header"
  >
    <v-toolbar-title class="text-3xl">Total Amount: 0 €</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      appBarStyle: {
        height: "78px",
        // background: "#4a90e215 0% 0% no-repeat padding-box",
        border: "2px solid #4a90e2",
        borderRadius: "4px",
        opacity: "1",
        margin: "0 auto",
        boxShadow: 'none'
      },
    };
  },
};
</script>

<style scoped>
/* Diğer stil tanımlamalarınızı buraya ekleyebilirsiniz */
</style>
