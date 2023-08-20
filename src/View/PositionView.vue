<template>
  <div>
    <div>
      <!-- <Header></Header> -->
      <ToastAlert type="success" :duration="1000">Success</ToastAlert>
    </div>
    <div>
      <SinglePosition></SinglePosition>
    </div>
  </div>
</template>

<script>
import SinglePosition from "@/components/SinglePosition.vue";
// import Header from "../components/PositionHeader.vue";
import ToastAlert from "@/shared/ToastAlert.vue";

export default {
  components: {
    // Header,
    SinglePosition,
    ToastAlert
  },

  data: () => ({
    //
  }),
};
</script>
