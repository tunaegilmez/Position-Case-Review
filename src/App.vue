<template>
  <v-app>
    <PositionView></PositionView>
  </v-app>
</template>

<script>
import PositionView from "./View/PositionView.vue"
export default {
  name: 'App',
  components: {
    PositionView
  },
};
</script>
