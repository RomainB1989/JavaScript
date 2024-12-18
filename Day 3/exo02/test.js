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

function goToTitle(title){
    let posY = title.offsetTop;
    console.log(posY);

    window.scrollTo({top: posY, behavior: "smooth"});
}

let queryTitle = prompt("Please select the Chapter you want to go to.", "") - 1;
console.log(queryTitle);

if (queryTitle != null && queryTitle < tabTitle.length) {
    goToTitle(tabTitle[queryTitle]);
}


