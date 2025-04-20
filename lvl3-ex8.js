function estPalindrome(nombre) {
    const chaineNombre = nombre.toString();
    const longueur = chaineNombre.length;
    
    for (let i = 0; i < Math.floor(longueur / 2); i++) {
        if (chaineNombre[i] !== chaineNombre[longueur - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

function trouverProchainPalindrome(nombre) {
    let nombreActuel = nombre;
    
    while (!estPalindrome(nombreActuel)) {
        nombreActuel++;
    }
    
    return nombreActuel;
}

const nombre = parseInt(prompt("Entrez un nombre entier :"));
const prochainPalindrome = trouverProchainPalindrome(nombre);
console.log("Le plus petit palindrome supérieur ou égal à " + nombre + " est " + prochainPalindrome + ".");