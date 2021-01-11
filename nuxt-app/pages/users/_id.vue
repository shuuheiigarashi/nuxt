<template>
  <div>
    <!-- <p>/users/_id.vue</p> -->
    <p>User ID: {{userId}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id
    };
  }
};
</script>