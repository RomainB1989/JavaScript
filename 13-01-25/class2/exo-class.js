class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
        this.firstnameEmployee = nom;
        this.secondEmployee = prenom;
        this.ageEmployee = age;
        this.salaryEmployee = salaireMensuel;
        this.nbMonthWork = 12;
    }
    // me servira à passer le cout d 1 employé dans la classe PME
    getCout() {
        return this.calculCout();
    }
    //calcul cout total d 1 salarié
    calculCout() {
        return (this.nbMonthWork * this.salaryEmployee)  + (0.9 * (this.nbMonthWork * this.salaryEmployee));
    }
}

class Pme {
    constructor(nom, equipe, ventes, coutsFixes, achats) {
        this.nameCompany = nom;
        this.teamCompany = equipe;
        this.salesCompany = ventes;
        this.fixedCostCompany = coutsFixes;
        this.purchasesCompany = achats;
    }

    getTeamCost() {
        let salaryTeam = 0;
        this.teamCompany.forEach(function(Employee){
            salaryTeam += Employee.getCout();
        });
        return salaryTeam;
    }

    bilanCalculed() {
        console.log("-------------------P.M.E-------------------");
        console.log(`${this.nameCompany}: Cout Initial : ${this.fixedCostCompany + this.purchasesCompany}`);
        console.log(`${this.nameCompany}: Cout Total Equipe : ${this.getTeamCost()}`);
        console.log(`${this.nameCompany}: VENTES : ${this.salesCompany}`);
        console.log(`${this.nameCompany}: BILAN : ${this.salesCompany - this.fixedCostCompany - this.purchasesCompany - this.getTeamCost()}`);
    }
}

const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);

pme.bilanCalculed();