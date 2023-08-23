<template>
  <v-app-bar
      color="primary"
      dark
      app
      rounded
      outlined
      :style="appBarStyle"
      class="flex justify-center items-center w-[75vw]"
    >
      <v-toolbar-title class="text-3xl">Total Amount: 0 €</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
  computed: {
    appBarStyle() {
      return {
        height: '78px',
        margin: '0 auto',
      };
    },
  },
};
</script>





