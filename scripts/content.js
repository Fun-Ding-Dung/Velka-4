console.log("Loaded")

let T_On

let divi

function CreateWin(){
    divi = document.createElement("div");
            divi.className = "div"; // Apply the CSS class
            document.body.appendChild(divi);
}

function SignalRec(signal){
    T_On = signal
    if(T_On){ //If turned on
        console.log("Turned on!")
        CreateWin()

    }else{
        console.log("Turned off!")
    }
}

chrome.runtime.onMessage.addListener((request, sender) => {
    console.log("seen")
    SignalRec(request.data);
});