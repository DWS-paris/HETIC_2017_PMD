'use strict';

/*
Les variables "classiques" s'écrivent "let"
Le templating de string se fait avec des backquote
*/
var username = 'Thomas';
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
var pageTitle = document.querySelector('#pageTitle');

// Modifier le contenu de la balise
pageTitle.innerHTML = '\n        Bonjour <em>' + username + '</em>, vous avez ' + (2017 - birthYear) + ' ans\n    ';
//


/*
Création d'une fonction
*/
// Fonction simple = un retour
var sayHello = function sayHello() {
    return console.log('Say Hello');
};
sayHello();

// Fonction avec un paramètre = pas besoin de parenthèses
var twice = function twice(uniqNumber) {
    return console.log(uniqNumber * 2);
};
twice(10);
twice(15);

// Fonction avec plusieurs paramètres
var simpleAddition = function simpleAddition(firstNumber, secondeNumber) {
    var total = firstNumber + secondeNumber;
    console.log(total);
};
simpleAddition(10, 45);

// Fonction avec paramètre optionnel (valeur par defaut)
var optionalParameter = function optionalParameter() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Julien';
    return console.log(name);
};
optionalParameter();
optionalParameter('Abdel');
//