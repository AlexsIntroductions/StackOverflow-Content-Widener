let originalContent = document.getElementById('content');
let originalSidebar = document.getElementById('sidebar');
let sideBarParent = originalSidebar.parentElement;
let originalMainbar = document.getElementById('mainbar');
let mainBarParent = originalMainbar.parentElement;
let detectClick = 0;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ 
    originalContent,
    originalMainbar,
    originalSidebar,
    sideBarParent,
    mainBarParent,
    detectClick
   });
});