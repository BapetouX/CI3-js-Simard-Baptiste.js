function calculerMoyenne(nombres) {
    if (nombres.length === 0) {
        return 0;
    }
    
    let somme = 0;
    
    for (let i = 0; i < nombres.length; i++) {
        somme += nombres[i];
    }
    
    return somme / nombres.length;
}

const nombres = [12, 15, 8, 10, 7, 9, 11];
const moyenne = calculerMoyenne(nombres);
console.log("Les nombres : " + nombres.join(", "));
console.log("La moyenne est : " + moyenne);