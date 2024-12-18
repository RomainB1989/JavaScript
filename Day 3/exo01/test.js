const title = document.querySelector(".titre");
// const allParagraph = document.querySelectorAll(".paragraph");
// const paragraph = document.querySelector(".paragraph");
// const paragraph2 = document.getElementById("paragraph");
// const paragraph3 = document.getElementsByClassName("paragraph");


// console.log(title);
// console.log(allParagraph);

// console.log(paragraph);
// document.body.insertBefore(allParagraph[1], title);
// const paragraph4 = document.createTextNode(" Ceci est ma Phrase Test!!");
// paragraph.appendChild(paragraph4);

// const list = document.getElementById("liste");
// console.log(list);
// list.removeChild(list.children[1]);
// console.log(list);

// const text = document.body.getElementsByTagName("p");
// console.log(text);

function addText(pseudo, txt){
    const newTxt = document.createElement("p");
    const strongTxt = document.createElement("strong");

    strongTxt.innerText = `\u000A${pseudo}`;
    newTxt.innerText = `- ${txt}`;

    
    document.body.appendChild(strongTxt);
    document.body.appendChild(newTxt);
}

const link1 = document.body.getElementsByTagName("a")[0];
// const link2 = document.body.getElementsByTagName("a")[1];
// const link3 = document.body.getElementsByTagName("a")[2];

// link1.setAttribute("href", "./index.html");
// link1.setAttribute("target", "_self");
// link2.setAttribute("href", "https://loremipsum.io/fr/generator");
// link2.setAttribute("target", "_blank");
// link3.setAttribute("href", "https://fr.wikipedia.org/wiki/Caf%C3%A9");
// link3.setAttribute("target", "_blank");

const txt = document.body.getElementsByTagName("p");
const txt2 = document.body.querySelectorAll("p");
console.log(txt);
console.log(txt2);
const tabTxt = Array.from(txt);
const tabTxt2 = Array.from(txt2);
console.log(tabTxt);
console.log(tabTxt2);
// tabTxt2[0].innerText = "LOL HACKED";

console.log(`
    Largeur avec Bordure : ${title.offsetWidth}
    Largeur sans Bordure : ${title.clientWidth}
    Hauteur avec Bordure : ${title.offsetHeight}
    Hauteur sans Bordure : ${title.clientHeight}`);

const p = document.body.querySelectorAll("p")[1];
const linkTitle = document.body.querySelectorAll("a")[0];
const btn = document.body.querySelectorAll("button");
const body = document.querySelector("body");

btn[0].addEventListener("click", function(){
    p.classList.add("maCouleur")
    linkTitle.classList.add("maCouleur2");
    title.classList.add("titre2");
});

btn[1].addEventListener("click", function(){
    p.classList.remove("maCouleur");
    linkTitle.classList.remove("maCouleur2");
    title.classList.remove("titre2");
});

btn[2].addEventListener("click", function(){
    p.classList.toggle("maCouleur");
    linkTitle.classList.toggle("maCouleur2");
    title.classList.toggle("titre2");
});

btn[3].addEventListener("click", function(){
    body.setAttribute("class", "body2");
});

btn[4].addEventListener("click", function(){
    body.setAttribute("class", "body3");
});

btn[5].addEventListener("click", function(){
    body.setAttribute("class", "body4");
});

btn[6].addEventListener("click", function(){
    body.setAttribute("class", "");
});

btn[7].addEventListener("click", function(){
    addText("Rayanjuki", "Je m'appelle Jean Marc.");
    addText("Mojo Khamas", "En fait je suis DeadSpaguettis.");
    addText("DeadSpaguettis", "Non c'est moi DeadSpaguettis.");
});

btn[8].addEventListener("click", function(){
    txt2[0].remove();
});

btn[9].addEventListener("click", function(){
    txt2[1].remove();
});

btn[10].addEventListener("click", function(){
    txt2[2].remove();
});



