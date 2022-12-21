//This extension will need information from a persistent variable as soon as it's installed. 
//Start by including a listening event for runtime.onInstalled in the background script. 
//Inside the onInstalled listener, the extension will set a value using the storage API. 
//This will allow multiple extension components to access that value and update it.

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});