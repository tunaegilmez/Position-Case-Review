<template>
  <v-app>
    <div class="flex h-screen flex-col gap-y-5">
      <div>
        <PositionHeader></PositionHeader>
      </div>
      <v-main>
        <PositionView></PositionView>
      </v-main>
      <!-- <button @click="saveNewPosition">Add</button>
        {{ positions }} -->
      <footer>
        <CaseFooter class="mt-auto"></CaseFooter>
      </footer>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PositionHeader from "./components/PositionHeader.vue";
import PositionView from "./View/PositionView.vue";
import CaseFooter from "./components/CaseFooter.vue";
// import { currencyService } from "./service/currency.service";
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
    CaseFooter,
    PositionHeader,
  },
  computed: {
    ...mapGetters("position", ["positions"]),
  },
  methods: {
    ...mapActions("position", ["getPositions", "savePosition"]),
    // async test() {
    //   const response = await currencyService.getCurrencys();
    //   console.log(response);
    //   return response;
    // },
    // async saveNewPosition() {
    //   const response = await this.savePosition(this.positionSaveData);
    //   return response;
    // },
  },
  mounted() {
    this.test();
    this.getPositions();
  },
};
</script>
