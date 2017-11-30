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

/*
Fonction avec REST parameter
*/
var restParam = function restParam(name) {
    for (var _len = arguments.length, skills = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        skills[_key - 1] = arguments[_key];
    }

    console.log(name);

    // Le paramètre REST devient un tableau
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = skills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            console.log(item);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
restParam('Sophie', 'html', 'css');
restParam('John', 'cuisine');
restParam('T\xE9o', 'Djing', 'patinette', 'vieux');
//