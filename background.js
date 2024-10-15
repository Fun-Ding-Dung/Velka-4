let T_On = false
let divi;
function StatusChange(){
    T_On = !T_On //Change bool
    if(T_On){ //If turned on
        console.log("Turned on!")
        chrome.action.setIcon({path: {128: "pragon.png"}})
        myDiv = document.createElement("div");
            myDiv.className = "my-custom-div"; // Apply the CSS class
            myDiv.innerText = "Hello, I am a styled div!";
            document.body.appendChild(myDiv);
    }else{
        chrome.action.setIcon({path: {128: "pragrest.png"}})
    }
}

chrome.action.onClicked.addListener(() => {
    StatusChange()
});
