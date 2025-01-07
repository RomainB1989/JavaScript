//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };

function addUserCard() {
    // crée un nouvel élément div et Modification style du div crée
    const newCard = document.createElement("div");
    newCard.style.width = "20%";
    newCard.style.height = "40%";
    newCard.style.display = "flex";
    newCard.style.flexDirection = "column";
    newCard.style.justifySelf = "center";
    newCard.style.alignSelf = "center";
    newCard.style.justifyContent = "space-evenly";
    newCard.style.color = "white";
    newCard.style.fontFamily = "Calibri";
    newCard.style.border = "solid";
    newCard.style.borderColor = "aqua";
    newCard.style.borderWidth = "3px";
    newCard.style.borderRadius = "10px";

    newCard.style.height = "auto";
    newCard.style.backgroundImage = "linear-gradient(45deg, rgba(250,139,255,1) 0%, rgba(43,210,255,1) 52%, rgba(43,255,136,1) 90%)";;
    newCard.style.padding = "30px 20px";


    // Creation Elements, Ajout de Texte et Modification style Elements
    let newContent = document.createElement("img");
    newContent.src = userData.img;
    newContent.style.width = "100%";
    newContent.style.height = "auto";

    let newContent1 = document.createElement("h1");
    newContent1.innerText = userData.name;
    newContent1.style.padding = "0px";
    newContent1.style.margin = "0px";

    let newContent2 = document.createElement("h2");
    newContent2.innerText = userData.email;
    newContent2.style.padding = "0px";
    newContent2.style.margin = "0px";

    let newContent3 = document.createElement("h2");
    newContent3.innerText = userData.age;
    newContent3.style.padding = "0px";
    newContent3.style.margin = "0px";

    let newContent4 = document.createElement("h3");
    newContent4.innerText = userData.dob;
    newContent4.style.padding = "0px";
    newContent4.style.margin = "0px";

    let newContent5 = document.createElement("h3");
    newContent5.innerText = userData.active;
    newContent5.style.padding = "0px";
    newContent5.style.margin = "0px";

    let newContent6 = document.createElement("h3");
    newContent6.innerText = "44 rue du truc";
    newContent6.style.padding = "0px";
    newContent6.style.margin = "0px";
    
    // Ajoute les noeuds elements au nouvel div créé
    newCard.appendChild(newContent);
    newCard.appendChild(newContent1);
    newCard.appendChild(newContent2);
    newCard.appendChild(newContent3);
    newCard.appendChild(newContent4);
    newCard.appendChild(newContent5);
    newCard.appendChild(newContent6);
  
    // Ajoute le nouvel élément créé et son contenu dans le DOM
    document.body.append(newCard);
}

addUserCard();