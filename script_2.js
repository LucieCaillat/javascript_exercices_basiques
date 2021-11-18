let userChoice = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = 1
for(let count = 1; count <= userChoice; count++){
    result *= count;
}

console.log(`Le résultat est : ${result}`);