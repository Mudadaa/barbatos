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
   //img hover events
  //  app.upper.addEventListener("mouseover",app.getLupus);

   //selection des div vignet
   app.vMassue=document.querySelector(".vignet-massue");
   //selection video hover events
   app.massue=document.querySelector(".massue");
    app.vMassue.addEventListener("mouseover",app.getWeapon);
   },

  getJapanese :function(){
app.japaneseP.removeAttribute("hidden");
app.englishP.setAttribute("hidden","true");
  },
  
 getEnglish : function(){
  app.englishP.removeAttribute("hidden");
  app.japaneseP.setAttribute("hidden","true");
 },
getLupus: function(){

  console.log("hola los FACE de la venga")
  app.lupus.removeAttribute("hidden")
  
},
getWeapon: function(){
  app.weapon.addEventListener("mouseenter", ()=>{
    app.weapon.style.display="none"
    app.massue.style.display="block"
    app.massue.play()
  });
   
  app.weapon.addEventListener("mouseleave", ()=>{
    app.massue.style.display="none";
    app.weapon.style.display="block";
    app.massue.pause();
   
  });
}
};
document.addEventListener('DOMContentLoaded', app.init);

