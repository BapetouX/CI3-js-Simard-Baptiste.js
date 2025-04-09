let mot = prompt("Mot ?");
let inverse = mot.split("").reverse().join("");
if (mot == inverse) {
  console.log("Palindrome");
} else {
  console.log("Pas palindrome");
}