// document.addEventListener('DOMContentLoaded', function() {
  

  // Le code JavaScript lié au DOM va ici
const app = {
  init: function(){

    //Sélection des images de face et de dos pr le buttonToggle
   app.face=document.getElementById("barbatos");
   app.dos=document.getElementById("barbatosDos");
   app.button=document.querySelector(".togglButton");
   app.button.addEventListener("click",app.toggleView);


//Hover sur les images de face et de dos
    app.divFace=document.querySelector(".barbatosFace");
    app.faceHover=document.getElementById("hover-barbatos");
    app.divFace.addEventListener("mouseover");


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


  

   //selection des div vignet
   app.vMassue=document.querySelector(".vignet-massue");
   app.vDessous=document.querySelector(".vignet-dessous");


   //selection des div video 
   app.massue=document.querySelector(".massue");
   app.dessous=document.querySelector(".dessous");


   //ajout d'events hover 
  app.vMassue.addEventListener("mouseenter",app.getWeapon);
  app.vDessous.addEventListener("click",app.getBarbatos);
  
   },
   toggleView :function(){
    console.log("ça toggle ouuuuu ?")
    if (app.dos.hasAttribute("hidden")){
     app.face.setAttribute("hidden", "true");
     app.dos.removeAttribute("hidden");
   }else{
     app.dos.setAttribute("hidden", "true");
     app.face.removeAttribute("hidden");
   }
  },
  // getHover :function(){
    
  //   if(app.faceHover.style.display="none"){
  //   app.faceHover.style.display="block";
  //    app.face.style.display="none";
  // }else{
  //   app.face.style.opacity=1;
   
  //  },


    

  getJapanese :function(){
app.japaneseP.removeAttribute("hidden");
app.englishP.setAttribute("hidden","true");
  },
  
 getEnglish : function(){
  app.englishP.removeAttribute("hidden");
  app.japaneseP.setAttribute("hidden","true");
 },

getWeapon: function(){
  app.weapon.addEventListener("mouseenter", ()=>{
    app.weapon.style.display="none"
    app.massue
    app.massue.play()
  });
   
  app.weapon.addEventListener("mouseleave", ()=>{
    app.massue.style.display="none";
    app.weapon.style.display="block";
    app.massue.pause();
   
  });

},
getBarbatos: function(){
  app.upper.setAttribute("hidden","true");
  app.dessous.display="block";
  app.dessous.play();
  console.log("ça démarre ouuuu?")
},
};
document.addEventListener('DOMContentLoaded', app.init);

