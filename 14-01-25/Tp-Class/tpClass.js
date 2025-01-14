class CompteBancaire {
    constructor(User) {
        this.nameUser = User;
        this.money = 0;
    }

    // Ajoute un montant au solde
    crediter(value) {
        this.money += value;
        console.log(`Ajout de: ${value} pour: ${this.nameUser}`);
    }

    // Retirer un montant au solde
    retirer(value) {
        try{
            if ((this.money - value) < 0) {
                throw `${this.nameUser}, retrait: ${value} refusé avec solde: ${this.money}`;
            }
            else{
                this.money -= value;
                console.log(`Retrait de: ${value} pour: ${this.nameUser}`);
            }
        }
        catch(err){
            console.log("Erreur Custom----->"+err);
        }
    }
    
    // Virement d'un montent vers un compte Destinataire
    virer(value, CompteDestinataire) {
        try{
            if ((this.money - value) < 0) {
                throw `${this.nameUser}, retrait: ${value} refusé avec solde: ${this.money}`;
            }
            else{
                console.log(`Virement de: ${value} de ${this.nameUser} vers: ${CompteDestinataire.nameUser}`);
                CompteDestinataire.crediter(value);
                this.retirer(value);
            }
        }
        catch(err){
            console.error("Erreur Custom----->"+err);
        }
    }

    // Renvoie la description du compte
    decrire() {
        return (`titulaire: ${this.nameUser}, solde: ${this.money}`);
    }
}

// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
};

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) {
    lesComptes[key].crediter(1000);
}

// un retrait de 100 par Alex
lesComptes["Alex"].retirer(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].virer(300, lesComptes["Clovis"]);
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
lesComptes["Alex"].retirer(1200);
// bilan : faire une déscription de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) {
    console.log(lesComptes[key].decrire());
}