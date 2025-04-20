function compterOccurrencesMots(chaine) {
    const chaineNettoyee = chaine.toLowerCase().replace(/[^\w\s]/g, "");
    
    const mots = chaineNettoyee.split(/\s+/);
    
    const occurrences = {};
    
    for (let i = 0; i < mots.length; i++) {
        const mot = mots[i];
        
        if (mot.length === 0) {
            continue;
        }
        
        if (occurrences[mot] === undefined) {
            occurrences[mot] = 1;
        } else {
            occurrences[mot]++;
        }
    }
    
    return occurrences;
}

const texte = prompt("Entrez un texte :");
const occurrencesMots = compterOccurrencesMots(texte);

console.log("Occurrences de chaque mot :");
for (const mot in occurrencesMots) {
    console.log("'" + mot + "' : " + occurrencesMots[mot]);
}