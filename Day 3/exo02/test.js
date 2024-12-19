const listChapter = document.body.getElementsByClassName("chapter");
const tabChapter = Array.from(listChapter);

const listTitle = document.body.getElementsByTagName("h2");
const tabTitle = Array.from(listTitle);

// tabChapter.map(function(chapter){
//     let posY = chapter.offsetTop;
//     let addY = chapter.offsetHeight;
//     let height = window.innerHeight;

//     chapter.addEventListener("click", function(){
//         console.log("Hauteur Chapter : "+posY+"\u000AHauteur Fenetre : "+height+"\u000A");
//         scrollTo({top: posY + addY, behavior: "smooth"});
//     });
// });

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    console.log("Bouton Test Clické !");
});

function goToTitle(title){
    let posY = title.offsetTop;
    console.log(posY);

    window.scrollTo({top: posY, behavior: "smooth"});
}

let queryTitle = Number(window.prompt("Veuillez saisir un nombre.", "1")) - 1;
console.log(queryTitle);

if (!queryTitle){
    if (queryTitle < tabTitle.length) {
        goToTitle(tabTitle[queryTitle]);
    } else{
        alert("Veuillez saisir un nombre.");
    }
}

addEventListener("keypress", function(pressKey){
    console.log(pressKey);
});



