// Exercice Tableau

let nom = "Bergout"; 
let prenom = "Romain";
let tab =[];

tab.push(nom, prenom, nom[0]+"."+prenom[0]);
console.log("Nom : "+tab[0]+".\u000A"+"Prenom : "+tab[1]+".\u000A"+"Initial : "+tab[2]+".");

// Exercie Fonction
let note = [];
note.push(14, 15, 17, 18, 17, 13);

function averageNote(tab){
    let average = 0;
    for(let i=0; i < tab.length; i++){
        average += tab[i];
    }
    return average /= tab.length;
}

function averageMentions(tab){
    let averageMentions = [0, ""];

    for(let i=0; i < tab.length; i++){
        averageMentions[0] += tab[i];
    }
    averageMentions[0] /= tab.length;

    if(averageMentions[0] >= 15){
        averageMentions[1] = "Très Bien \ud83d\ude04";
    }
    else if (averageMentions[0] >= 10){
        averageMentions[1] = "Assez Bien \ud83d\ude09";
    }
    else{
        averageMentions[1] = "Refus \ud83d\ude21";
    }
    return averageMentions;
}

console.log("Votre Note est : "+averageMentions(note)[0].toFixed(2)+"/20.\u000A"+"Mention "+averageMentions(note)[1]);

console.log("Votre Moyenne est de "+averageNote(note).toFixed(2)+"/20.");

// Exercice Objet

let voiture = {
    vitesseMax:200,
    nbChevaux:500,
    marque:"Alpine"
};

voiture.modèle = "A110";

console.log("Ma Voiture est de Marque et de Modèle "+voiture.marque+" "+voiture.modèle+".\u000A"+"Ma Voiture possède "+voiture.nbChevaux+" chevaux.\u000A"+"Ma Voiture peut aller jusqu'à "+voiture.marque+" km/h.\u000A");
console.log(voiture);
delete voiture.marque;
console.log(voiture.hasOwnProperty("modèle"));
console.log(voiture.hasOwnProperty("marque"));

voiture.pilotes = {
    pilote:"Monique",
    copilote:"Bernard"
};

console.log(voiture.pilotes);





