function rechercheBinaire(tableau, element) {
    let debut = 0;
    let fin = tableau.length - 1;
    
    while (debut <= fin) {
        const milieu = Math.floor((debut + fin) / 2);
        
        if (tableau[milieu] === element) {
            return milieu;
        }
        
        if (tableau[milieu] > element) {
            fin = milieu - 1;
        } 
        else {
            debut = milieu + 1;
        }
    }
    
    return -1;
}

const nombres = [2, 4, 7, 10, 13, 18, 22, 27, 35, 42, 51, 63, 77, 85, 90];
const elementRecherche = parseInt(prompt("Entrez un nombre à rechercher :"));
const indice = rechercheBinaire(nombres, elementRecherche);

console.log("Tableau :", nombres);
if (indice !== -1) {
    console.log("L'élément " + elementRecherche + " se trouve à l'indice " + indice + ".");
} else {
    console.log("L'élément " + elementRecherche + " n'a pas été trouvé dans le tableau.");
}