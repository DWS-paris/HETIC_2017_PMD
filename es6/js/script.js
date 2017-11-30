"use strict";

/*
Les variables "classiques" s'écrivent "let"
Le templating de string se fait avec des backquote
*/
var username = "Thomas";
//

/*
Créer une variable constante => non modifiable
Une fois définie, la const n'est plus modifiable
*/
var birthYear = 1979;
//

/*
Modifier le DOM
*/
// Céer une variable pour sélectionner la balise #pageTitle
var pageTitle = document.querySelector("#pageTitle");

// Modifier le contenu de la balise
pageTitle.innerHTML = "\n        Bonjour <em>" + username + "</em>, vous avez " + (2017 - birthYear) + " ans\n    ";
//