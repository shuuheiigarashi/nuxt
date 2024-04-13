<template>
  <div class="w-screen h-screen flex justify-center">
    <BlogList :blogs="data?.contents" />
  </div>
</template>
<script setup lang="ts">
import BlogList from "@/components/organisms/BlogList.vue";
import type { Blog } from "@/types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
console.log(data);
</script>
