class Imc {
    constructor(paramNameUser, paramWeightUser, paramsizeUser){
        this.userName = paramNameUser;
        this.userWeight = paramWeightUser;
        this.userSize = paramsizeUser;
    }

    calculImc() {
        return(this.userWeight/(this.userSize ** 2));
    }

    display(){
        console.log("Bonjour "+ this.userName +"("+this.userWeight+", "+this.userSize+") a un Imc de : "+this.calculImc());
    }
}

let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55)
];

list.forEach((person) => person.display());