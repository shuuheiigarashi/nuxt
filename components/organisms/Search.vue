<!-- components/organisms/Search.vue -->
<template>
  <form @submit.prevent="search" class="my-4">
    <SearchForm />
  </form>
</template>

<script setup>
import SearchForm from "@/components/molecules/SearchForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const search = () => {
  // 検索処理
  // 例: ルーターを使用して検索結果ページにリダイレクト
  router.push({ path: "/search", query: { q: searchTerm } });
};
</script>
