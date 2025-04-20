function genererStatistiquesPersonnes(personnes) {
    const statistiques = {
        nombreTotal: personnes.length,
        ageMoyen: 0,
        personnesParProfession: {},
        personnesParTranche: {
            "0-18": 0,
            "19-35": 0,
            "36-50": 0,
            "51+": 0
        }
    };
    
    let sommeAges = 0;
    
    for (let i = 0; i < personnes.length; i++) {
        const personne = personnes[i];
        
        sommeAges += personne.age;
        
        if (statistiques.personnesParProfession[personne.profession] === undefined) {
            statistiques.personnesParProfession[personne.profession] = 1;
        } else {
            statistiques.personnesParProfession[personne.profession]++;
        }
        
        if (personne.age <= 18) {
            statistiques.personnesParTranche["0-18"]++;
        } else if (personne.age <= 35) {
            statistiques.personnesParTranche["19-35"]++;
        } else if (personne.age <= 50) {
            statistiques.personnesParTranche["36-50"]++;
        } else {
            statistiques.personnesParTranche["51+"]++;
        }
    }
    
    statistiques.ageMoyen = personnes.length > 0 ? sommeAges / personnes.length : 0;
    
    return statistiques;
}

const personnes = [
    { nom: "Dupont", age: 25, profession: "Développeur" },
    { nom: "Martin", age: 42, profession: "Designer" },
    { nom: "Durand", age: 19, profession: "Étudiant" },
    { nom: "Petit", age: 35, profession: "Développeur" },
    { nom: "Dubois", age: 58, profession: "Manager" },
    { nom: "Robert", age: 17, profession: "Étudiant" }
];

const statistiques = genererStatistiquesPersonnes(personnes);
console.log("Statistiques des personnes :");
console.log("Nombre total :", statistiques.nombreTotal);
console.log("Âge moyen :", statistiques.ageMoyen);
console.log("Personnes par profession :", statistiques.personnesParProfession);
console.log("Personnes par tranche d'âge :", statistiques.personnesParTranche);