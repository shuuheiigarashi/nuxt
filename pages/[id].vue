<template>
  <template v-if="data">
    <h1>
      {{ data.title }}
    </h1>
    <div
      v-if="!data.eyecatch"
      class="w-48 h-36 bg-gray-500 text-white flex items-center justify-center"
    >
      No Image
    </div>
    <img
      v-else
      :src="data.eyecatch?.url"
      :width="data.eyecatch?.width"
      :height="data.eyecatch?.height"
      alt=""
    />
    <div>
      <div>
        {{ data.category?.name }}
      </div>
      <div>
        {{ dateFormat(data.publishedAt ?? data.createdAt) }}
      </div>
    </div>
    <div v-html="data.body"></div>
  </template>
</template>
<script setup lang="ts">
import type { Blog } from "../types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
console.log(data);
</script>
