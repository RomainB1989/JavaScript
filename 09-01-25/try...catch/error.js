try{
    prenom;
    alert('Ce message ne s\'affichera pas.');
}catch(error){
    console.log(error);
    alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
    ----------------------
    Le Nom de l'erreur :

    ${error.name}
    ----------------------
    Le Message de l'erreur  :

    ${error.message}
    ---------------------
    L'emplacement de l'erreur:

    ${error.stack}`);
}
alert(`Ce message s'affiche correctement.`);