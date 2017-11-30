/*
Les variables "classiques" s'écrivent "let"
Le templating de string se fait avec des backquote
*/
    let username = `Thomas`;
//

/*
Créer une variable constante => non modifiable
Une fois définie, la const n'est plus modifiable
*/
    const birthYear = 1979;
//

/*
Modifier le DOM
*/
    // Céer une variable pour sélectionner la balise #pageTitle
    let pageTitle = document.querySelector(`#pageTitle`);
    
    // Modifier le contenu de la balise
    pageTitle.innerHTML = `
        Bonjour <em>${username}</em>, vous avez ${2017 - birthYear} ans
    `;
//


/*
Création d'une fonction
*/ 
    // Fonction simple = un retour
    const sayHello = () => console.log('Say Hello')
    sayHello()

    // Fonction avec un paramètre = pas besoin de parenthèses
    const twice = uniqNumber => console.log( uniqNumber * 2 )
    twice(10)
    twice(15)

    // Fonction avec plusieurs paramètres
    const simpleAddition = (firstNumber, secondeNumber) => {
        let total = firstNumber + secondeNumber
        console.log(total)
    }
    simpleAddition(10, 45)

    // Fonction avec paramètre optionnel (valeur par defaut)
    const optionalParameter = (name = `Julien`) => console.log(name)
    optionalParameter()
    optionalParameter(`Abdel`)
//

/*
Fonction avec REST parameter
*/
    const restParam = (name, ...skills) => {
        console.log(name)
        
        // Le paramètre REST devient un tableau
        for( let item of skills ){
            console.log(item)
        }
    }
    restParam(`Sophie`, `html`, `css`)
    restParam(`John`, `cuisine`)
    restParam(`Téo`, `Djing`, `patinette`, `vieux`)
//