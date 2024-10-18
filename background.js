let T_On = false

function getActiveTab() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);  // Handle any error
            } else {
                resolve(tabs[0]);  // Resolve with the active tab
            }
        });
    });
}

async function Msg(data) {
    try {
        let activeTab = await getActiveTab();  // Wait for the active tab
        if (activeTab) {
            console.log("Sending message to tab:", activeTab.id);
            chrome.tabs.sendMessage(activeTab.id, { data: data });
        } else {
            console.log("No active tab found");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
function StatusChange(){
    T_On = !T_On //Change bool
    Msg(T_On)
    if(T_On){ //If turned on
        chrome.action.setIcon({path: {128: "pragon.png"}})
    }else{
        chrome.action.setIcon({path: {128: "pragrest.png"}})
    }
    
    
}

chrome.action.onClicked.addListener(() => {
    StatusChange()
});
