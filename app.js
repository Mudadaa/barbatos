// document.addEventListener('DOMContentLoaded', function() {

const { request } = require("express");
const dataMapper = require("./app/dataMapper");

  // Le code JavaScript lié au DOM va ici
const app = {
  front : "./public/img/face.png",
  behind : "./public/img/dos.png",
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
  },
  
  
  async getEnglishTrad(){
  const englishTrad =document.querySelector(".english");
  
    try {
      const gundamTrad= await dataMapper.getGundamTrad()[0];
      englishTrad.textContent=gundamTrad
      console.log(gundamTrad);
    } catch (error) {
      console.log("Erreur 404")
      response.status(404).send ("Une erreur est survenue")
    }

  }
}
document.addEventListener('DOMContentLoaded', app.init);

