// document.addEventListener('DOMContentLoaded', function() {
  

  // Le code JavaScript lié au DOM va ici
const app = {
  
  
 
  init: function(){
     // Sélection des éléments p de traduction
    app.english = document.querySelector(".english");
    app.japanese = document.querySelector(".japanese");
    app.english.addEventListener("click", app.getEnglish);
    app.japanese.addEventListener("click", app.getJapanese);
    app.englishP=document.getElementById("english");
    app.japaneseP=document.getElementById("japanese");
//Sélection des img de galerie
   app.upper=document.getElementById("upperBody");
   app.lupus=document.getElementById("lupus");
   app.weapon=document.getElementById("weapon");
   //hover events
   app.upper.addEventListener("mouseover",app.getLupus);
   app.lupus.addEventListener("mouseover", app.getWeapon);
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
 },
getLupus: function(){
  console.log("hola los lupus de la venga")
  app.lupus.removeAttribute("hidden")
  
},
getWeapon: function(){
  app.weapon.removeAttribute("hidden")
}

}
document.addEventListener('DOMContentLoaded', app.init);

