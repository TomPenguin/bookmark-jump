<template>
  <div>
    <p>{{ messages.extName }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { browser } from "webextension-polyfill-ts";
import { useMessages } from "../compositions/useMessages";

export default defineComponent({
  name: "SearchBar",
  setup() {
    const { messages } = useMessages(browser.i18n, ["extName"]);
    return { messages };
  },
});
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
