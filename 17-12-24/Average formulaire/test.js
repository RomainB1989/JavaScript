// Fonction Calcul et retourne Moyenne
let note = [];
note.push(14, 15, 17, 18, 17, 13);

function averageNote(tab){
    let average = 0;
    for(let i=0; i < tab.length; i++){
        average += tab[i];
    }
    average /= tab.length;
    alert("La Moyenne de ("+tab+") est :  "+average.toFixed(2));
}

// Fonction Calcul Moyenne et retourne Mentions
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

// Fonction Afficher contenu d'un input
function getValue(idInput) {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById(idInput).value;
    // Afficher la valeur
    alert(input);
}


// Fonction Check String est Nombre Valide
function isNumeric(str) {
    return !isNaN(str);
}

// Fonction check contenu text
function checkValidNumberTab(tab){
    for(let i=0; i < tab.length; i++){
        if(!isNumeric(tab[i])){
            return false;
        }
    }
    return true;
}

function textToTab(text){

    const tab = text.split(" ");
    return tab;
}

// Fonction sur Onclick
function getAverage(idInput){
    var input = document.getElementById(idInput).value;
    
}



