const textarea = document.querySelector("textarea");
const txt = [];
const voyelles = ["a","e","i","o","u","y"];


textarea.addEventListener("keypress", function(event){
    const key = event.key;
    if(!voyelles.includes(key)){
        txt.push(key);
    }
    console.log(txt);
});