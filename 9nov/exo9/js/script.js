/*
    - Créer un tableu contenant 4 objets
    - Chaque objet contient : fullname, age, skills (tableau)
*/

// Le constructeur
function Employee(fullname, age, skills, gender){
    this.fullname = fullname;
    this.age = age;
    this.skills = skills;
    this.gender = gender;
};

// Créer un objet pour le nombre d'individus
var counter = {
    female: 0,
    male: 0,
    mutant: 0
};

// Création de 4 objets
var userJulien = new Employee('Julien Noyer', 38, ['CSS', 'HTML', 'JS'], 'Male');
var userKevin = new Employee('Kevin Malik', 45, ['PHP', 'SQL'], 'Male');
var userAline = new Employee('Aline Lameuf', 27, ['Ruby', 'C++'], 'Female');
var userJacques = new Employee('Jacques Rakchy', 80, [null], 'Mutant');

// Création du tableau
var myEmployees = [ userJulien, userKevin, userAline, userJacques ];
console.log( myEmployees );

// Boucle sur une collection de données
for( var i = 0; i < myEmployees.length; i++ ){
    console.log( myEmployees[i].fullname );

    // Vérifier si l'employé-e est une femme ou un homme
    if( myEmployees[i].gender == 'Male' ){
        counter.male++;

    } else if(myEmployees[i].gender == 'Female'){
        counter.female++;

    } else{
        counter.mutant++;
    };
};

console.log( counter );