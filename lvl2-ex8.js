function trouverDiviseurs(nombre) {
    const diviseurs = [];
    
    for (let i = 1; i <= nombre; i++) {
        if (nombre % i === 0) {
            diviseurs.push(i);
        }
    }
    
    return diviseurs;
}

const nombre = parseInt(prompt("Entrez un nombre entier :"));
const diviseurs = trouverDiviseurs(nombre);
console.log("Les diviseurs de " + nombre + " sont : " + diviseurs.join(", "));