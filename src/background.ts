import { browser } from "webextension-polyfill-ts";

browser.runtime.onMessage.addListener(function() {
  console.log("test");
});
