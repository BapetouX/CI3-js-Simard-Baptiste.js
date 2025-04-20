function filtrerMotsAvecMajuscule(tableau) {
    const motsAvecMajuscule = [];
    
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i].length > 0 && tableau[i][0] === tableau[i][0].toUpperCase() && 
            tableau[i][0] !== tableau[i][0].toLowerCase()) {
            motsAvecMajuscule.push(tableau[i]);
        }
    }
    
    return motsAvecMajuscule;
}

const mots = ["JavaScript", "html", "CSS", "programming", "Development", "web"];
const motsAvecMajuscule = filtrerMotsAvecMajuscule(mots);
console.log("Mots avec une première lettre majuscule :", motsAvecMajuscule);