<template>
  <div class="w-screen h-screen flex justify-center">
    <ul class="grid grid-cols-2 gap-4">
      <li v-for="blog in data?.contents" :key="blog.id">
        <NuxtLink :to="`/${blog.id}`">
          <div
            v-if="!blog.eyecatch"
            class="w-48 h-36 bg-gray-500 text-white flex items-center justify-center"
          >
            No Image
          </div>
          <img
            v-else
            :src="blog.eyecatch?.url"
            :width="blog.eyecatch?.width"
            :height="blog.eyecatch?.height"
            alt=""
          />
          <div>
            <div>
              {{ blog.category?.name }}
            </div>
            <div>
              {{ blog.title }}
            </div>
            <div>
              {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { dateFormat } from "../utils/dateFormat";
import type { Blog } from "../types/blog";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
console.log(data);
</script>
