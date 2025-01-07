const allParag = document.body.getElementsByTagName("p");
const paragTab = Array.from(allParag);
console.log(paragTab);


paragTab.map(function(Paragh) {
    Paragh.innerText = "LOL JE SUIS HACKERMAN";
    Paragh.style.color = "red";
    Paragh.addEventListener("click", function(){
        console.log("Tu as Clicker sur un Paragraphe.");
    });
});

// paragTab.forEach(function(p) {
//     p.innerText = "LOL JE SUIS HACKERMAN";
//     p.style.color = "red";
//     p.addEventListener("click", function(){
//         console.log("Tu as Clicker sur un Paragraphe.");
//     });
// });
