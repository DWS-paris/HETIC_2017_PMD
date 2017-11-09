// Définir le type d'objet User (constructor)
function User(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
};

// Ajouter une fonction à un type d'objet (constructor)
User.prototype.fullname = function(){
    console.log( this.firstname + ' ' + this.lastname );
};

// Créer un objet utilisant le type User (constructor)
var julienNoyer = new User('Julien', 'Noyer', 38);
console.log( julienNoyer );
julienNoyer.fullname();

var chuckNorris = new User('Chuck', 'Norris', 123456);
console.log( chuckNorris );
chuckNorris.fullname();