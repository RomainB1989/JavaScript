const title = document.querySelector("h1");

title.style.cursor = "pointer";
title.style.width = "15%";
title.style.boxShadow = "1px 1px 5px 5px rgba(0,0,0,0.75)";
title.style.textAlign = "center";

title.addEventListener("click", function(){
    if(title.innerText == "D.O.M Events"){
        title.innerText = "-- 🥳 --";
    }
    else{
        title.innerText = "D.O.M Events"
    }
});
