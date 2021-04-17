browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Hello from the background", request, sender, sendResponse);
});

chrome.commands.onCommand.addListener((c) => console.log(c));
