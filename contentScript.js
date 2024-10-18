let T_On

let divi
console.log("Loaded")
function CreateWin(){
    divi = document.createElement("div");
            divi.className = "div"; // Apply the CSS class
            document.body.appendChild(divi);
}

function SignalRec(signal){
    T_On = signal
    if(T_On){ //If turned on
        console.log("Turned on!")

        chrome.action.setIcon({path: {128: "pragon.png"}})

        CreateWin()

    }else{
        chrome.action.setIcon({path: {128: "pragrest.png"}})
    }
}

//Listener for comm. with background
chrome.runtime.onMessage.addListener(function (request, sender) {
    console.log(request.data);  
});