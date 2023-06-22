// document.addEventListener('DOMContentLoaded', function() {
  // Le code JavaScript lié au DOM va ici
const app = {
  front : "./img/face.png",
  behind : "./img/dos.png",
  currentImage : 'Hassan',
  // Sélectionner l'élément image
  init: function(){
    app.barbatos = document.getElementById("barbatos");
    app.view = document.querySelector(".view");
    app.view.addEventListener("click", app.barbaSwitch );
    app.barbatos.addEventListener("click", app.barbaSwitch);

  },
  // Définir les chemins d'accès aux images
  
  // je mets en place une image par défaut
  
  // je crée une fonction qui va changer l'image
  barbaSwitch: function() {
    
  
    if (app.currentImage === app.front || app.currentImage === 'Hassan') { // Utiliser la propriété "src" pour comparer les chemins d'accès aux images

      app.currentImage = app.behind; 
      app.barbatos.src = app.behind
    

      // Mettre à jour la source de l'image avec l'image de dos
    } else if (app.currentImage === app.behind) {

      app.barbatos.src = app.front// Mettre à jour la source de l'image avec l'image de face
     app.currentImage = app.front


    }
  }
  // Ajouter un event listener pour le clic
};

document.addEventListener('DOMContentLoaded', app.init);

