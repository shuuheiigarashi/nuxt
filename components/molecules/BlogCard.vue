<template>
  <NuxtLink :to="`/${blog.id}`" class="blog-card">
    <Image
      v-if="blog.eyecatch"
      :src="blog.eyecatch.url"
      :width="blog.eyecatch.width"
      :height="blog.eyecatch.height"
      :alt="blog.title"
    />
    <div
      v-else
      class="w-48 h-36 bg-gray-500 text-white flex items-center justify-center"
    >
      No Image
    </div>
    <div class="blog-info">
      <NuxtLink :to="`/category/${blog.category?.id}`" class="category-link">{{
        blog.category?.name
      }}</NuxtLink>
      <div class="blog-title">{{ blog.title }}</div>
      <div class="blog-date">
        {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { dateFormat } from "@/utils/dateFormat";
import { Blog } from "@/types/blog";

export default defineComponent({
  props: {
    blog: {
      type: Object as () => Blog,
      required: true,
    },
  },
});
</script>
