function trierLivresParTitre(livres) {
    return livres.sort((a, b) => {
        const titreA = a.titre.toLowerCase();
        const titreB = b.titre.toLowerCase();
        
        if (titreA < titreB) {
            return -1;
        }
        if (titreA > titreB) {
            return 1;
        }
        return 0;
    });
}

const livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943 },
    { titre: "Harry Potter", auteur: "J.K. Rowling", annee: 1997 },
    { titre: "1984", auteur: "George Orwell", annee: 1949 },
    { titre: "Don Quichotte", auteur: "Miguel de Cervantes", annee: 1605 },
    { titre: "Les Misérables", auteur: "Victor Hugo", annee: 1862 }
];

const livresTries = trierLivresParTitre(livres);
console.log("Livres triés par titre :");
livresTries.forEach(livre => {
    console.log("- " + livre.titre + " (" + livre.auteur + ", " + livre.annee + ")");
});