/*
    Calculer la date de naissance d'un utilisateur
    - demander l'age de l'utilisateur
    - savoir qu'elle année nous sommes
    - soustraire l'age de l'année en cours
    - afficher l'age dans la console
*/

// #1 : demander l'age de l'utilisateur
var userAge = prompt( 'Quel est ton age ?' );
console.log( parseInt(userAge) );

// #2 : savoir qu'elle année nous sommes
var actualYear = 2017;

// #3 : soustraire l'age de l'année en cours
var userBirthDate = actualYear - parseInt(userAge);

// #4 : afficher l'age dans la console
console.log( 'Votre date de naissance est ' + userBirthDate );