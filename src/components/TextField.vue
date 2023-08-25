<template>
    <v-text-field
      :value="value"
      :label="label"
      outlined
      hide-details
      :full-width="fullWidth"
      dense
      :type="type"
      @input="$emit('input', $event)"
    ></v-text-field>
  </template>
  
  <script>
  export default {
    props: {
      value: [String, Number],
      label: String,
      placeholder: String,
      fullWidth: Boolean,
      dense: Boolean,
      type: String
    },
  };
  </script>
  