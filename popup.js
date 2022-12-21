let widenButton = document.getElementById("widenButton");

//testing document elements to get
let content = document.getElementById('content'); 
let container = document.getElementById('left-sidebar');
let sidebar = document.getElementById('sidebar');
let mainbar = document.getElementById('mainbar');

//How to widen StackOverflow Content
  //delete sidebar element
  //content gets max width removed and width changed to 100%
  //mainbar will be removed

widenButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: widenContent,
  });
});

function widenContent() {
  console.log("removed");
  sidebar.remove();
  mainbar.style.maxWidth = '100%';
  mainbar.style.width = '100%';
}