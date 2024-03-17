<template>
  <button class="button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
    handleClick() {
      // Add your button click logic here
    },
  },
};
</script>

<style scoped>
.button {
  /* Add your button styles here */
}
</style>
