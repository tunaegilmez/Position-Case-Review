<template>
  <v-combobox
    :items="items"
    :value="selectedItem"
    :label="label"
    outlined
    :full-width="fullWidth"
    :dense="dense"
    @input="updateSelectedItem"
  ></v-combobox>
</template>

<script>
export default {
  props: {
    items: Array,
    value: String,
    label: String,
    placeholder: String,
    fullWidth: Boolean,
    dense: Boolean,
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
