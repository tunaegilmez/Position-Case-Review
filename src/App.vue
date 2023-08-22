<template>
  <v-app>
    <PositionView></PositionView>
    <button @click="saveNewPosition">Add</button>
    {{ positions }}
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PositionView from "./View/PositionView.vue";
import { currencyService } from "./service/currency.service";
export default {
  name: "App",
  data() {
    return {
      data: [],
      positionSaveData: {
        id: 1,
        text: "Tuna",
      },
    };
  },
  components: {
    PositionView,
  },
  computed: {
    ...mapGetters("position", ["positions"]),
  },
  methods: {
    ...mapActions("position", ["getPositions", "savePosition"]),
    async test() {
      const response = await currencyService.getCurrencys();
      console.log(response);
      return response;
    },
    async saveNewPosition() {
      const response = await this.savePosition(this.positionSaveData);
      return response;
    },
  },
  mounted() {
    this.test();
    this.getPositions();
  },
};
</script>
