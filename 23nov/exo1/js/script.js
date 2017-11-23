// Créer un tableau contenant 3 données
var myArray = [
    'Salut',
    'Bonjour',
    'Bien ou bien ?'
];

console.log( myArray );

// Afficher dans la console la deuxième donnée du tableau
console.log( myArray[1] );

// Ajouter 'Ciao' dans le tableau
myArray.push( 'Ciao' );
console.log( myArray );

// Afficher chacuns des index du tableau dans la console grâce à une boucle for(...) {...}
for( var i = 0; i < myArray.length; i++ ){
    // Itération sur le tableau
    console.log( 'Array ', myArray[i] );

    // Vérifier si 'Bonjour' est présent dans le tableau
    if( myArray[i] == 'Bonjour' ){
        console.log('Bonjour à vous');

    } else if( myArray[i] == 'Salut' ){
        console.log('Hey salut !');

    } else if( myArray[i] == 'Bien ou bien ?' ){
        console.log( 'Wesh mon gars !' );

    } else{
        console.log( 'Bongiorno' );
    };
};


var userMessage = prompt( 'Tapez votre message' );
console.log( userMessage );