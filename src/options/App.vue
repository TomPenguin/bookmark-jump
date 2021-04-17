<template>
  <search-bar />
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
  width: 400px;
  height: 400px;
}
</style>
