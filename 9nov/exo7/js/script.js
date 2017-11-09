// Déclarer un objet
var user = {
    firstname: 'Julien',
    lastname: 'Noyer',
    age: 38,
    isMajor: true,
    skills: ['HTML', 'CSS', 'JS'],
    sayHello: function(){
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
};

user.sayHello();

// Changer une des propriétés de l'objet user
user.firstname = 'Jul';
console.log( user );
user.sayHello();

user.age++;
console.log( user );

console.log( user.skills[2] );