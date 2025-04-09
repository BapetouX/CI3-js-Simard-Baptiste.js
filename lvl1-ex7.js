let mots = ["chat", "éléphant", "chien"];
let long = "";
for (let i = 0; i < mots.length; i++) {
  if (mots[i].length > long.length) {
    long = mots[i];
    }
}
console.log("Le plus long mot :", long);