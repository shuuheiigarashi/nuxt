<template>
  <header>
    <div class="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 class="text-4xl font-bold">My Blog</h1>
      <nav>
        <ul class="flex space-x-4 items-center">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/category">Category</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <!-- 検索コンポーネントを追加 -->
          <li>
            <SearchForm />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import SearchForm from "@/components/organisms/Search.vue";

export default {
  name: "Header",
  components: {
    SearchForm,
  },
  // Your component's logic goes here
};
</script>
