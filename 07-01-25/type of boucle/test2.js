const allParag = document.body.getElementsByTagName("p");
const paragTab = Array.from(allParag);
console.log(paragTab);

//? Utilisation du map pour parcourir le tableau d'Objet paragraphe.
paragTab.map(function(Paragh, index) {
    Paragh.innerText = "LOL JE SUIS HACKERMAN";
    Paragh.style.color = "red";
    Paragh.style.cursor = "pointer";
    console.log("Je suis le Paragraphe numéro : ", index);
    Paragh.addEventListener("click", function(){
        console.log("Tu as cliqué sur un Paragraphe.");
    });
});

//? Utilisation du forEach pour parcourir le tableau d'Objet paragraphe.
// paragTab.forEach(function(p) {
//     p.innerText = "LOL JE SUIS HACKERMAN";
//     p.style.color = "red";
//     p.style.cursor = "pointer";
//     p.addEventListener("click", function(){
//         console.log("Tu as Clicker sur un Paragraphe.");
//     });
// });
