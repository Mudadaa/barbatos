// document.addEventListener('DOMContentLoaded', function() {
  

  // Le code JavaScript lié au DOM va ici
const app = {
  
  
  // Sélectionner les éléments p de traduction
  init: function(){
    app.english = document.querySelector(".english");
    app.japanese = document.querySelector(".japanese");
    app.english.addEventListener("click", app.getEnglish);
    app.japanese.addEventListener("click", app.getJapanese);
    app.englishP=document.getElementById("english");
    app.japaneseP=document.getElementById("japanese");
   },
  // Définir les chemins d'accès aux images
  
  // je mets en place une image par défaut
  
  // je crée une fonction qui va changer l'image
  getJapanese :function(){
app.japaneseP.removeAttribute("hidden");
app.englishP.setAttribute("hidden","true");
  },
  
 getEnglish : function(){
  app.englishP.removeAttribute("hidden");
  app.japaneseP.setAttribute("hidden","true");
 }


}
document.addEventListener('DOMContentLoaded', app.init);

