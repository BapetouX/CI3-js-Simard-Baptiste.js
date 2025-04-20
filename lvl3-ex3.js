function genererNombresPremiers(limite) {
    if (limite < 2) {
        return [];
    }
    
    const estPremier = new Array(limite + 1).fill(true);
    estPremier[0] = estPremier[1] = false;
    
    for (let i = 2; i * i <= limite; i++) {
        if (estPremier[i]) {
            for (let j = i * i; j <= limite; j += i) {
                estPremier[j] = false;
            }
        }
    }
    
    const nombresPremiers = [];
    for (let i = 2; i <= limite; i++) {
        if (estPremier[i]) {
            nombresPremiers.push(i);
        }
    }
    
    return nombresPremiers;
}

const limite = parseInt(prompt("Entrez une limite pour générer des nombres premiers :"));
const nombresPremiers = genererNombresPremiers(limite);
console.log("Nombres premiers jusqu'à " + limite + " : " + nombresPremiers.join(", "));