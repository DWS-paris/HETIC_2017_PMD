/*
Calculer la moyenne d'une classe
- L'utilisateur ajoute une note dans un tableau
- Quand il le désire, l'utilisateur peut afficher la moyenne des notes
*/

var notes = [];
var total = 0;

function addNote(){
    var userNote = prompt('Ajouter une note');
    notes.push( parseInt(userNote) );
    console.log( notes );
};

function noteAmount(){
    
    // Boucle sur le collection de données
    for( var i = 0; i < notes.length; i++ ){
        total += notes[i];
    };

    // Afficher la moyenne
    console.log( total / notes.length );

};