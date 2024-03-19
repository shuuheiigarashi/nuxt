<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-center items-center">
      <p class="text-sm">
        &copy; {{ currentYear }} Your Company. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
