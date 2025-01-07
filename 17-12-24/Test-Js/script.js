const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

const tabData = [];
tabData.push(usersHuman, usersPet, usersXeno);

function afficherHummain(objet){
    console.log(`nom : ${objet.name}\u000Aemail : ${objet.email}\u000Aage : ${objet.age}ans`);
}

function afficherAnimal(objet){
    console.log(`nom : ${objet.name}\u000Aespece : ${objet.espece}\u000Aage : ${objet.age}ans\u000Apropriétaire : ${objet.propriétaire}`);
}

function afficherXeno(objet){
    console.log(`nom : ${objet.name}\u000Aespece : ${objet.espece}\u000Aage : ${objet.age}ans\u000Aniveau de menace : ${objet.menace}`);
}

function profil(tab){
    for(let i = 0; i < tab.length; i++){
        if(tab[i].type == "humain"){
            afficherHummain(tab[i]);
        } else if(tab[i].type == "animal de compagnie"){
            afficherAnimal(tab[i]);
        } else if(tab[i].type == "Xeno"){
            afficherXeno(tab[i]);
        } else {
            console.log("Type de Profil non Existant");
        }
    }
}

function profilAll(tab){
    profil(tab[0]);
    profil(tab[1]);
    profil(tab[2]);
}

profilAll(tabData);
