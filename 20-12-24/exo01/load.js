const imgs = document.querySelectorAll("img");
const imgTab = Array.from(imgs);
const title = document.querySelector("h1");
let cpt = 0;

console.log(imgTab);

// imgTab.map((image,i) => image.addEventListener("load", 
//     function(){
//         const countdown = setTimeout(function(){
//             console.log(`Timer : ${i}`);
//         }, 1000);
//         console.log(`Img Num : ${i} - OK`);
//         i++;
// }));

// const txt = setTimeout(function(){
//     title.textContent = "Salut Je suis le Nouveau Titre";
//     title.style.opacity = 1;
//     document.body.style.background = "royalblue";

// }, 2000);


if(cpt < imgTab.length){
    const myTimeout = setTimeout(displayImage(imgTab[cpt]), 1000);
    cpt++;
}

function displayImage(img){
    img.style.display = "block";
}

// for(let cpt = 0; cpt < imgTab.length; cpt++){
//     displayImage(imgTab[cpt], 1000);

   
// }

