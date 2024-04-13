<template>
  <ul class="grid grid-cols-2 gap-4">
    <li v-for="blog in blogs" :key="blog.id">
      <BlogCard :blog="blog" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogCard from "@/components/molecules/BlogCard.vue";
import type { Blog } from "@/types/blog";

export default defineComponent({
  props: {
    blogs: {
      type: Array as () => Blog[],
      required: true,
    },
  },
  components: {
    BlogCard,
  },
});
</script>
