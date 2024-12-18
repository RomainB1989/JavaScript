var firstName = "Bergout";
var secondName = "Romain";
var age = "35";


// Appel de fonction Classique
function displayStr(str){
    console.log(str);
}
displayStr(`Bonjour je m'appelle ${secondName} ${firstName} et j'ai ${age} ans.`);

// Appel de fonction Anonyme
var message = function() {
    console.log("Message Test de la Fonction anonyme");
}
message();

// Appel de fonction Anonyme dont le contenu est fléché
var message2 = () => console.log("Message Test de l'appel de la Fonction anonyme en fléchée");
message2();