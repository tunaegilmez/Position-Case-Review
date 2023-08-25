<template>
  <div>
    <div v-for="(position, i) in positions" :key="i"> 
      <SinglePosition :position="position"></SinglePosition>
    </div>
  </div>
</template>

<script>
import SinglePosition from "@/components/SinglePosition.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SinglePosition,
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("position", ["positions"]),
  }
};
</script>
