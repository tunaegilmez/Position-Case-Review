<template>
  <div>
    <div v-for="(position, i) in positions" :key="i">
      <SinglePosition></SinglePosition>
    </div>
    <ToastAlert type="success" :duration="1000">Success</ToastAlert>
  </div>
</template>

<script>
import SinglePosition from "@/components/SinglePosition.vue";
import ToastAlert from "@/shared/ToastAlert.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SinglePosition,
    ToastAlert,
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("position", ["positions"]),
  }
};
</script>
