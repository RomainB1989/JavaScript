//! Le nom de la classe commence tjrs par majuscule
class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(paramNameUser, paramMailUser, paramPhoneUser, paramDateUser) {
    // Attribut en IN MODE indispensable pour créer des new UserProfile
    this.nameUser = paramNameUser;
    this.mailUser = paramMailUser;
    this.phoneUser = paramPhoneUser;
    // Attribut en outMode
    this.contact = paramPhoneUser + paramMailUser;
    this.resume = this.getProfileInfo();
    this.count = 0;
    this.date = paramDateUser;
    this.isConnect = false;
    this.isAdmin = false;
    // this._nom = nom;  
    }
    getPhone(){
        if(user==="connected")
        return this.phoneUser;
    }
    getProfileInfo() {
    console.log('this Person',this);
    return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }

    connect(){
        this.isConnect = true;
    }

    disconnect(){
        this.isConnect = false;
    }
}

const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
console.log(exampleUser1);
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");


console.log(exampleUser2.nameUser);
exampleUser2.getProfileInfo();
const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
exampleUser3.getProfileInfo();