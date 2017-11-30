/*
Requête asynchrone en ES6
Fonction fetch() plus le système de Promise
*/


// La fonction fetch() prend en paramètre l'adresse de l'API
fetch(`http://digitalworkshop.fr/wp-json/wp/v2/posts`).then(data => {
    // Vérifier la présence de données dans la réponse de la requête
  if (data.ok) {
    // Les données sont présentes => renvoyer une Promise de type 'resolve'
    return Promise.resolve(data);
  }
  else {
      // Les données sont présentes => renvoyer une Promise de type 'reject'
    return Promise.reject(new Error('Problème dans la requête')); 
  }
})
.then(
    // Renvoyer la réponse
    data => data.json()
    
).then(data => {
  // Afficher les données dans la console
  console.log(data)
})
.catch((err) => {
    // Afficher l'erreur
  console.log(err);
});