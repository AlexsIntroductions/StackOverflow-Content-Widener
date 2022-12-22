let widenButton = document.getElementById("widenButton");

//testing document elements to get
//let content = document.getElementById('content'); 
//let contentParent = content.parentElement;
//let leftSideBar = document.getElementById('left-sidebar');
//let leftSideBarParent = leftSideBar.parentElement;
let sidebar = document.getElementById('sidebar');
let mainbar = document.getElementById('mainbar');

//How to widen StackOverflow Content
  //delete sidebar element
  //content gets max width removed and width changed to 100%
  //mainbar will be removed

widenButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  //if clicked first time then remove, if clicked again then re-add
  chrome.storage.sync.get("detectClick", ({detectClick}) => {
    detectClick+=1;
    if(detectClick === 1){
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: widenContent,
      });
    }
    else{
      //sidebar is removed so add it back
      chrome.storage.sync.get("originalSidebar", ({originalSidebar, sideBarParent}) => {
        sideBarParent.appendChild(originalSidebar);
      })
      //mainbar has its style changed so remove it then add the original
      chrome.storage.sync.get("originalMainbar", ({originalMainbar, mainBarParent, mainbar}) => {
        mainbar.remove();
        mainBarParent.appendChild(originalMainbar);
      })
      detectClick = 0;
    }
  });

  
});

function widenContent() {
  console.log("removed");
  sidebar.remove();
  mainbar.style.maxWidth = '100%';
  mainbar.style.width = '100%';
}