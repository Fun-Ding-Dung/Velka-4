let T_On = false

function StatusChange(){
    T_On = !T_On //Change bool
    function sendMessageToActiveTab(data) { //Communicate with active tab content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            
            if (activeTab) {
                chrome.tabs.sendMessage(activeTab.id, { action: "updateData", data: data });
            }
        });
    }
    
    
}

chrome.action.onClicked.addListener(() => {
    StatusChange()
});
