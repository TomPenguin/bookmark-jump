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
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
}

html,
body {
  padding: 0;
  margin: 0;
}
</style>
