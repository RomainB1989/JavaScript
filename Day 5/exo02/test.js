const textarea = document.querySelector("textarea");
const txt = [];
// const voyelles = ["a","e","i","o","u","y"];
const button = document.querySelector("button");
const form = document.querySelector("form");

textarea.addEventListener("keypress", function(event){
    txt.push(event.key);
    if(txt.length % 10 > 4 && txt.length % 10 <= 9){
        button.style.pointerEvents = "none";
        button.style.opacity = "0.5";
    }
    else{
        button.style.pointerEvents = "auto";
        button.style.opacity = "1";
    }
});


form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("OK");
});