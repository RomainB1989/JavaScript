const cardMeteo = document.querySelector(".cardMeteo");
const iconMeteo = document.querySelector("i");
const button = document.querySelector("button");

// Création de la div "info"
const info = document.createElement("info");

// Paramétrage du style de la div "info"
info.style.height = "300px";
info.style.width = "200px";
info.style.margin = "16px 0px";
info.style.border = "3px solid grey";
info.style.padding = "16px 12px 24px 12px";

// Insert de la div "info" avant le button dans la div de class "cardMeteo"
cardMeteo.insertBefore(info, button);


/**
 * Fonction qui affiche dans la div "info" les chaines de caractère qu'on lui envoie.
 *  
 * @param {*} str 
 */
function addinfo(str){
    info.innerText = str;
    bouton();
}

/** Fonction qui donne un nom de class au bouton */
function bouton(){
    button.setAttribute("class", "button__cardMeteo");
}

button.addEventListener("mousedown", function(){
    button.style.backgroundColor = "orange";
});

document.addEventListener("mouseup", function(){
    button.style.backgroundColor = "forestgreen";
});

button.addEventListener("click", function(){
    contactApiSecure();
});

/**
 * Function asynchrone avec gestion d'erreur qui contact l'API méteo, récupère les infos et les ajoute a la div "info".
 *
 * @async
 * @returns {*} 
 */
const contactApiSecure =  async () => {
    const rawData = await fetch('https://prevision-meteo.ch/services/json/toulouse');

    try{
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            throw `Erreur lors de la récupération des données : ${rawData.statusText}`;
        }
    }
    catch(err){
        console.log(err);
    }
    
    // Vérification du statut de la réponse
    if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
        console.error("Erreur lors de la récupération des données : ", rawData.statusText);
        return; // Sortir de la fonction si la réponse n'est pas OK
    }
  
    const meteo = await rawData.json();
    addinfo(`Aujourd'hui le temps est :\n ${meteo.current_condition.condition} et la température est de ${meteo.current_condition.tmp}°C\nT°Max = ${meteo.fcst_day_0.tmax} - T°Min = ${meteo.fcst_day_0.tmin}`);
};


