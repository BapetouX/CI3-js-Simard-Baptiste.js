function estPalindromeIgnorantCasseEtNonAlphabetiques(chaine) {
    const chaineNettoyee = chaine.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    for (let i = 0; i < Math.floor(chaineNettoyee.length / 2); i++) {
        if (chaineNettoyee[i] !== chaineNettoyee[chaineNettoyee.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

const phrase = prompt("Entrez une phrase :");
if (estPalindromeIgnorantCasseEtNonAlphabetiques(phrase)) {
    console.log("\"" + phrase + "\" est un palindrome (en ignorant la casse et les caractères non alphabétiques).");
} else {
    console.log("\"" + phrase + "\" n'est pas un palindrome (en ignorant la casse et les caractères non alphabétiques).");
}