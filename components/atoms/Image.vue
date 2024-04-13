<template>
  <img :src="src" :width="width" :height="height" :alt="alt" />
</template>

<script setup>
props: {
  src: String,
  width: { type: [String, Number], default: null },
  height: { type: [String, Number], default: null },
  alt: { type: String, default: '' }
}
</script>
