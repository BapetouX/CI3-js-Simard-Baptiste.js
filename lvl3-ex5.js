function quicksort(tableau) {
    if (tableau.length <= 1) {
        return tableau;
    }
    
    const pivot = tableau[0];
    
    const elementsPlusPetits = [];
    const elementsPlusGrands = [];
    
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < pivot) {
            elementsPlusPetits.push(tableau[i]);
        } else {
            elementsPlusGrands.push(tableau[i]);
        }
    }
    
    return quicksort(elementsPlusPetits).concat([pivot], quicksort(elementsPlusGrands));
}

const nombres = [38, 27, 43, 3, 9, 82, 10];
console.log("Tableau non trié :", nombres);
const nombresTries = quicksort(nombres);
console.log("Tableau trié :", nombresTries);