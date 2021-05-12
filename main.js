// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe
// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence
// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"
// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span
// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 
// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"


//correction

//exo1
let redPurple = document.getElementsByClassName('redPurple');
console.log(redPurple);
//exo2
let redPurple2 = document.querySelectorAll('.redPurple');
console.log(redPurple2);
//exo3
let redPurple3 = document.querySelectorAll('h1.redPurple');
console.log(redPurple3);
//exo4
let redPurple4 = document.querySelectorAll('li, p, span');
console.log(redPurple4);
//exo5
let redPurple5 = document.querySelectorAll('li.important, p');
console.log(redPurple5);
//exo6
let redPurple6 = document.querySelectorAll('h1.redPurple, span.redPurple');
console.log(redPurple6);