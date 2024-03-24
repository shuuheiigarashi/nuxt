<template>
  <div class="input-container">
    <input
      class="input-field"
      type="text"
      :placeholder="placeholder"
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "Enter text...",
    },
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
