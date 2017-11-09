var user = 'Test';

// Déclarer un tableau
var myArray = [ 'Julien', 38, true, user ];
console.log( myArray );

// Afficher un des index du tableau
console.log( myArray[0] );
console.log( myArray[1] );
console.log( myArray[2] );
console.log( myArray[3] );

// Connaitre la taille du tableau
console.log( myArray.length );

// Ajouter une donnée dans le tableau
myArray.push( 'salut' );
console.log( myArray );

// Remplacer des données dans le tableau
myArray.splice(2, 0, 'INDICE_2');
console.log( myArray );

myArray.splice(2, 1, 'NOUVEAU');
console.log( myArray );

myArray.splice(0, 6, 'vide');
console.log( myArray );