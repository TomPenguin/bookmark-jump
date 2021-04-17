<template>
  <main class="container">
    <search-bar />
  </main>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "App",
  components: { SearchBar },
};
</script>

<style>
html {
  width: 50rem;
  height: 30rem;
  max-width: 50rem;
  max-height: 30rem;
  box-sizing: border-box;
  background-image: linear-gradient(
    135.9deg,
    rgba(109, 25, 252, 1) 16.4%,
    rgba(125, 31, 165, 1) 56.1%
  );
}

html,
body {
  padding: 0;
  margin: 0;
}
</style>
