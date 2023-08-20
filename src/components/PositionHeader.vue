<template>
  <v-app-bar
      color="primary"
      dark
      app
      :style="appBarStyle"
      class="flex justify-center items-center"
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
        borderRadius: '10px',
        margin: '0 auto',
      };
    },
  },
};
</script>





