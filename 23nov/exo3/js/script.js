// Création de 3 variables
var userName = 'Julien';
var userAge = 38;
var isGreeted = false;

/*
Opérateurs d'égalité
*/
    if( userName == 'Julien' ){
        console.log( 'userName est égale à "Julien"' );
    };

    if( userAge == '38'){
        console.log( 'userAge et égale à "38" ou 38' )
    };
// 

/*
Opérateurs d'égalité stricts
Vérification de la valeur ET du type de variable
*/
    if( userAge === 38 ){
        console.log( 'userAge est égale à 38');
    };
// 

/*
Opérateurs d'inégalité stricts
Vérification de la valeur ET du type de variable
*/
    if( isGreeted !== true ){
        console.log( 'isGreeted est égale à false' );
    };
// 

/*
Le "OU" logique
*/
    if( userAge === 70 || userAge !== 40){
        console.log( userAge );
    };
//

/*
Le "ET" logique
*/
    if( userAge >= 20 && userAge <= 40 ){
        console.log('Le user est un djeun');
    };
// 

/*
le "NON" logique
*/
    if( isGreeted != true ){
        console.log(isGreeted)
    };
// 