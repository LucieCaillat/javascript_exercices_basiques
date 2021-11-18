let userChoice = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let line = [] // line est un array qui va me permettre de stocker le bon nombre d'espace et de # pour chaque ligne

for( let countline = 1; countline <= userChoice; countline++){// cette boucle va me permettre de faire le nombre de ligne désirée qui correspond au nombre choisi par l'utilisateur
    line = [] // pour chaque boucle de contline j'initialise line...
    for(let countSpace = 1; countSpace <= userChoice-countline; countSpace++){// ... je fais une boucle qui met le bon nombre d'espace dans line...
        line.push(" ")
    };
    for(let countHashtag = 1; countHashtag <= countline; countHashtag++){// ... je fais une boucle qui met le bon nombre d'# dans ligne...
        line.push("#")
    }
    console.log(line.join(""))// ... j'affiche line sur un ligne avec la fonction join 

}
