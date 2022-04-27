let color = "#3aa757";

chrome.runtime.onConnect.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});
