function compterOccurrencesCaracteres(chaine) {
    const occurrences = {};
    
    for (let i = 0; i < chaine.length; i++) {
        const caractere = chaine[i];
        
        if (occurrences[caractere] === undefined) {
            occurrences[caractere] = 1;
        } else {
            occurrences[caractere]++;
        }
    }
    
    return occurrences;
}

const texte = prompt("Entrez un texte :");
const occurrencesCaracteres = compterOccurrencesCaracteres(texte);

console.log("Occurrences de chaque caractère :");
for (const caractere in occurrencesCaracteres) {
    console.log("'" + caractere + "' : " + occurrencesCaracteres[caractere]);
}