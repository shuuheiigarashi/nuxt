<template>
  <div class="text-center">カテゴリー</div>
  <div class="w-screen h-screen flex justify-center">
    <ul class="grid grid-cols-2 gap-4">
      <li v-for="category in data?.contents" :key="category.id">
        <div
          class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-gray-700 bg-gray-100 border border-gray-300"
        >
          <NuxtLink
            :to="`/category/${category?.id}`"
            class="text-xs font-normal leading-none max-w-full flex-initial"
          >
            {{ category?.name }}
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { Category } from "../../types/category";

const { data } = await useMicroCMSGetList<Category>({
  endpoint: "category",
});
console.log(data);
</script>
