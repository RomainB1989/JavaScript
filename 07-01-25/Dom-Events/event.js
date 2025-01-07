const title = document.querySelector("h1");
console.log(title);
// titleTab = Array.from(title);
// console.log(titleTab);

title.style.cursor = "pointer";
title.style.width = "15%";
title.style.boxShadow = "10px 10px 5px 0px rgba(0,0,0,0.75)";


title.addEventListener("click", function(){
    if(title.innerText == "D.O.M Events"){
        title.innerText = "-- 🥳 --";
    }
    else{
        title.innerText = "D.O.M Events"
    }
});
