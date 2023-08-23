<template>
    <v-text-field
      :value="value"
      :label="label"
      :placeholder="placeholder"
      outlined
      :full-width="fullWidth"
      dense
      @input="$emit('input', $event)"
    ></v-text-field>
  </template>
  
  <script>
  export default {
    props: {
      value: String,
      label: String,
      placeholder: String,
      fullWidth: Boolean,
      dense: Boolean,
    },
  };
  </script>
  