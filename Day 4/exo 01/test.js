const btn1 = document.getElementById("btn1");
const paragraph = document.body.querySelector("p");

btn1.addEventListener("click", function(){
    console.log("Bouton Test Clické !");
});

addEventListener("keypress", function(pressKey){
    if(pressKey.code == 'NumpadEnter'){
        let queryPrompt = window.prompt("Veuillez saisir quelquechose", "");
        addText(queryPrompt);
    } else{
        console.log(pressKey);
        addText(pressKey.key);
    }
});

function addParagraph(txt){
    const newTxt = document.createElement("p");

    newTxt.setAttribute("class", "chapter");
    newTxt.innerText = `${txt}`;
    document.body.appendChild(newTxt);
}

function addText(txt){
    if(txt == "Enter"){
        paragraph.textContent += "\u000A";
    } else{
        paragraph.textContent += txt;
    }
}