document.addEventListener('DOMContentLoaded', function() {
  // Le code JavaScript lié au DOM va ici

  // Sélectionner l'élément image
  const barbatos = document.getElementById("barbatos");

  // Définir les chemins d'accès aux images
  const front = "./img/face.png";
  const behind = "./img/dos.png";
  
  // je mets en place une image par défaut
  let currentImage = front;
  
  // je crée une fonction qui va changer l'image
  function barbaSwitch() {
    // Si l'image actuelle est l'image de face, alors je change l'image pour l'image de dos
    if (currentImage === front) {
      barbatos.src = behind;
      currentImage = behind;
    } else if (currentImage === behind) {
      // Sinon, si l'image actuelle est l'image de dos, alors je change l'image pour l'image de face
      barbatos.src = front;
      currentImage = front;
    }
  }

  // Ajouter un event listener pour le clic
  barbatos.addEventListener("click", barbaSwitch())});

  // Utiliser event.preventDefault() si nécessaire
document.addEventListener('DOMContentLoaded', function(){});
