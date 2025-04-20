function compterVoyelles(chaine) {
    const voyelles = ["a", "e", "i", "o", "u", "y", "à", "â", "é", "è", "ê", "ë", "î", "ï", "ô", "ù", "û", "ü", "ÿ"];
    let nombreVoyelles = 0;
    
    const chaineMinuscule = chaine.toLowerCase();
    
    for (let i = 0; i < chaineMinuscule.length; i++) {
        if (voyelles.includes(chaineMinuscule[i])) {
            nombreVoyelles++;
        }
    }
    
    return nombreVoyelles;
}

const phrase = prompt("Entrez une phrase :");
const nombreVoyelles = compterVoyelles(phrase);
console.log("La phrase \"" + phrase + "\" contient " + nombreVoyelles + " voyelle(s).");