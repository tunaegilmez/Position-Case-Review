<template>
  <div>
    <PositionCard>
      <div>
        <ComboBox
          :items="testData"
          v-model="selectedData"
          label="Select a data"
        ></ComboBox>
      </div>
      <div>
        <TextField
          v-model="name"
          label="test"
          placeholder="test"
          :full-width="true"
          :dense="false"
        ></TextField>
      </div>
    </PositionCard>
  </div>
</template>

<script>
import ComboBox from "./ComboBox.vue";
import TextField from "./TextField.vue";
import PositionCard from "../shared/PositionCard.vue";
export default {
  components: {
    ComboBox,
    TextField,
    PositionCard,
  },
  data() {
    return {
      testData: ['Apple', 'Banana', 'Orange', 'Strawberry'],
      selectedData: '',
    };
  },
};
</script>

<style scoped></style>
