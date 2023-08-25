<template>
  <v-combobox
    :items="items"
    :value="selectedItem"
    :label="label"
    outlined
    dense
    @input="updateSelectedItem"
  ></v-combobox>
</template>

<script>
export default {
  props: {
    items: Array,
    value: [String, Number, Object],
    label: String,
    placeholder: String,
  },
  computed: {
    selectedItem: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
  methods: {
    updateSelectedItem(value) {
      this.selectedItem = value;
    },
  },
};
</script>
