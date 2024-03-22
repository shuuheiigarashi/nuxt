<template>
  <div>
    <h1 class="text-center">{{ category?.name }}</h1>
    <ul>
      <div v-if="blogs?.contents?.length === 0" class="text-center">
        対象の記事がありません
      </div>
      <div v-else>
        <li v-for="blog in blogs?.contents" :key="blog.id">
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
              {{ blog.title }}
            </div>
            <div>
              {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
            </div>
          </NuxtLink>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Blog } from "@/types/blog";
import type { Category } from "@/types/category";

const route = useRoute();
const categoryId = route.params.id;

// カテゴリーの詳細データを取得
const { data: category } = useMicroCMSGetList<Category>({
  endpoint: `category/${categoryId}`,
});

// カテゴリーに紐づく記事を取得
const { data: blogs } = useMicroCMSGetList<Blog>({
  endpoint: "blogs",
  queries: {
    filters: `category[equals]${categoryId}`,
  },
});
</script>
