function division(){
    let x = prompt('Entrez un premier nombre (numérateur)');
    let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
    if(isNaN(x) || isNaN(y) || x == '' || y == ''){
        throw new Error('Merci de rentrer deux nombres');
    }else if(y == 0){
        throw new Error('Division par 0 impossible')
    }else{
        alert(x / y);
    }
}

// division();

try{
    division();
}catch(error){
   
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
}finally{
    alert(`Ce message s'affiche correctement.`);
}