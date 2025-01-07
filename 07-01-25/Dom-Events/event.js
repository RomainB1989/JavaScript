const title = document.querySelector("h1");

title.style.cursor = "pointer";
title.style.width = "15%";
title.style.margin = "auto";
title.style.boxShadow = "0px 5px 10px 5px rgba(0,0,0,0.75)";
title.style.textAlign = "center";

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
