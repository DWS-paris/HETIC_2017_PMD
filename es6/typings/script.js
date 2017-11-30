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