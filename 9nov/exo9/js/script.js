/*
    - Créer un tableu contenant 4 objets
    - Chaque objet contient : fullname, age, skills (tableau)
*/

// Le constructeur
function Employee(fullname, age, skills){
    this.fullname = fullname;
    this.age = age;
    this.skills = skills;
};

// Création de 4 objets
var userJulien = new Employee('Julien Noyer', 38, ['CSS', 'HTML', 'JS']);
var userKevin = new Employee('Kevin Malik', 45, ['PHP', 'SQL']);
var userAline = new Employee('Aline Lameuf', 27, ['Ruby', 'C++']);
var userJacques = new Employee('Jacques Rakchy', 80, [null]);

// Création du tableau
var myEmployees = [ userJulien, userKevin, userAline, userJacques ];
console.log( myEmployees );