function estNombrePremier(nombre) {
    if (nombre < 2) {
        return false;
    }
    
    if (nombre === 2) {
        return true;
    }
    
    if (nombre % 2 === 0) {
        return false;
    }
    
    for (let i = 3; i <= Math.sqrt(nombre); i += 2) {
        if (nombre % i === 0) {
            return false;
        }
    }
    
    return true;
}

const nombre = parseInt(prompt("Entrez un nombre :"));
if (estNombrePremier(nombre)) {
    console.log(nombre + " est un nombre premier.");
} else {
    console.log(nombre + " n'est pas un nombre premier.");
}