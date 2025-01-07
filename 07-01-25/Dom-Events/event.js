const title = document.querySelector("h1");
const label = document.querySelector("label");
const input = document.querySelector("input");

document.body.style.display = "flex";
document.body.style.flexDirection = "column";

title.style.cursor = "pointer";
title.style.width = "15%";
title.style.margin = "auto";
title.style.marginTop = "20px";
title.style.boxShadow = "0px 5px 10px 5px rgba(0,0,0,0.75)";
title.style.textAlign = "center";

label.style.textAlign = "center";
label.style.marginTop = "40px";

input.style.width = "20%";
input.style.margin = "auto";

title.addEventListener("click", function(){
    title.innerText = title.innerText == "D.O.M Events" ? "-- 🥳 --" : "D.O.M Events"; //?Definition en Test de condition ternaire
    
    //? Test de Condition avec If...Else
    // if(title.innerText == "D.O.M Events"){
    //     title.innerText = "-- 🥳 --";
    // }
    // else{
    //     title.innerText = "D.O.M Events"
    // }
});

input.addEventListener("focus", function(){
    input.style.backgroundColor = "blue";
    input.style.color = "white";
});

input.addEventListener("blur", function(){
    input.style.backgroundColor = "";
    input.style.color = "black";
});




