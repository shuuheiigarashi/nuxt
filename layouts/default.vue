<template>
  <div>
    <header-component />
    <main>
      <NuxtPage />
    </main>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/organisms/Header.vue";
import FooterComponent from "@/components/organisms/Footer.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>
