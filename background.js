let T_On = false  

//Message handling
async function SendToAll() {
    try {
        const tabs = await chrome.tabs.query({});
        for (const tab of tabs) {
            // Attempt to send a message to the content script
            chrome.tabs.sendMessage(tab.id, { data: T_On }, async (response) => {
                // Check if there's an error sending the message
                if (chrome.runtime.lastError) {
                    console.log("Injecting content script into tab:", tab.id);
                    try {
                        await chrome.scripting.executeScript({
                            target: { tabId: tab.id },
                            files: ['scripts/content.js']
                        });
                        // Send the message again after injecting the script
                        chrome.tabs.sendMessage(tab.id, { data: T_On }); // No callback here
                    } catch (m) {
                        console.error("Error injecting script:", m.message);
                    }
                } else {
                    // Optionally handle a successful send if needed
                    console.log("Message sent successfully to tab:", tab.id);
                }
            });
        }
    } catch (m) {
        console.error("Error querying tabs:", m.message);
    }
}

function StatusChange(){
    T_On = !T_On //Change bool
    SendToAll(T_On);
    if(T_On){ //If turned on
        chrome.action.setIcon({path: {128: "pragon.png"}})
    }else{
        chrome.action.setIcon({path: {128: "pragrest.png"}})
    }
    
    
}

chrome.action.onClicked.addListener(() => {
    StatusChange()
});
