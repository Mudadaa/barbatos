const app={
    //contiendra les nouvelles fonctions de dynamisation de la page web
    //pour sa refonte
    
    init :function (){
      
      app.container=document.querySelector('.container');
      app.containerVideos=document.querySelector('.containerVideos');
      app.gauche=document.querySelector('.laterale-gauche');
      app.droite=document.querySelector('.laterale-droite');
      app.centre=document.querySelector('.centre');
      app.milieu=document.querySelector('.ecran-milieu');
      app.tradText=document.querySelector('.tradText');
      app.skills=document.querySelector('.skills');
      app.toggleDiv=document.querySelector('.normalBarbatos');
      app.scanDiv=document.querySelector('.rayBarbatos');
      app.face=document.getElementById('faceB');
      app.dos=document.getElementById('dosB');
      app.scanBface=document.getElementById('scanBface');
      app.scanBdos=document.getElementById('scanBdos');
      app.screenR=document.querySelector('.ecran-droit');
      app.screenL=document.querySelector('.ecran-gauche');
      app.english=document.querySelector('.english');
      app.japanese=document.querySelector('.japanese');
      app.buttons=document.querySelector('.buttons');
      app.intelButton=document.querySelector('.intelButton');
      app.johoButton=document.querySelector('.johoButton');
      // ---------------------------------------------------
      app.perfOne=document.getElementById('perfOne');
      app.perfTwo=document.getElementById('perfTwo');
      app.perfThree=document.getElementById('perfThree');
      app.firstVideo=document.getElementById('premiere');
      app.secondVideo=document.getElementById('deuxieme');
      app.thirdVideo=document.getElementById('troisieme');
      app.body=document.getElementById('body');
      app.massue=document.getElementById('massue');
      app.lupus=document.getElementById('lupus');
      //event listener pour la div qui toggle
      app.toggleDiv.addEventListener('click',app.toggle);
      app.scanDiv.addEventListener('click',app.toggleScan);
      //event pour que laterale gauche se déplace au centre et occupela gauche et le milieu
      app.screenL.addEventListener('mouseenter',app.lateralGHover);
      
      //toggle hover sur les videos pour afficher les img
       app.perfOne.addEventListener('mouseleave',app.bodyHover);
       app.perfOne.addEventListener('mouseover',app.bodyLHover);
        app.perfTwo.addEventListener('mouseleave',app.massueHover);
        app.perfTwo.addEventListener('mouseover',app.massueLHover);
        app.perfThree.addEventListener('mouseleave',app.lupusHover);
        app.perfThree.addEventListener('mouseover',app.lupusLHover);
      
      //removeEventListener pour revenir à la normale
      app.quit=document.querySelector('.quitVideo');
      app.quit.addEventListener('click',app.removeHandler);
      
    
      
      //event listener pour les boutons de changement de langue
      app.intelButton.addEventListener('click',app.changeEnglish);
      app.johoButton.addEventListener('click',app.changeJapanese);
      //pour le resize qui simule l'allumage du gundam
      app.resizingTimeOut();
      app.skills.play();
    },
    
    toggle : function(){
      console.log('ça toggle ouuuuu ?');
      if(app.dos.hasAttribute('hidden')){
        app.dos.removeAttribute('hidden');
        app.face.setAttribute("hidden", "true");
    }else{
        app.face.removeAttribute('hidden');
        app.dos.setAttribute("hidden", "true");
    };
  },

  toggleScan: function(){
 if(app.scanBdos.hasAttribute('hidden')){
    app.scanBdos.removeAttribute('hidden');
    app.scanBface.setAttribute("hidden", "true"); 
 }else{
    app.scanBface.removeAttribute('hidden');
    app.scanBdos.setAttribute("hidden", "true");
 }
  },
  lateralGHover: function(){
    app.gauche.style.display='none';
    app.centre.style.display='none';
    app.droite.style.display='none';
   app.containerVideos.removeAttribute('hidden');
    
    
},
removeHandler: function(){
  console.log('ça marche ?');
  app.gauche.style.display='unset';
  app.centre.style.display='unset';
  app.droite.style.display='unset';
  app.containerVideos.setAttribute('hidden', 'true');
  
},
    
bodyHover: function(){
  app.firstVideo.style.display='none';
  app.body.removeAttribute('hidden');
 
},
bodyLHover: function(){
  app.body.setAttribute('hidden', 'true');
  app.firstVideo.style.display='inline-flex';
  app.firstVideo.play();
},
massueHover: function(){
  app.secondVideo.style.display='none';
  app.massue.removeAttribute('hidden');
},
massueLHover: function(){
  app.massue.setAttribute('hidden', 'true');
  app.secondVideo.style.display='inline-flex';
  app.secondVideo.play();
},
lupusHover: function(){
  
  app.thirdVideo.style.display='none';
  app.lupus.removeAttribute('hidden');
},
lupusLHover: function(){
  app.lupus.setAttribute('hidden', 'true');
  app.thirdVideo.style.display='inline-flex';
  app.thirdVideo.play();
},
changeEnglish: function(){
  if(app.english.hasAttribute('hidden')){
    app.milieu.style.gridTemplateColumns = "1fr 1fr";
    app.scanDiv.style.display='none';
    app.english.removeAttribute('hidden');
    app.japanese.setAttribute("hidden", "true");
}
},
changeJapanese: function(){
  if(app.japanese.hasAttribute('hidden')){
    app.milieu.style.gridTemplateColumns = "1fr 1fr";
    app.scanDiv.style.display='none';
    app.japanese.removeAttribute('hidden');
    app.english.setAttribute("hidden", "true");
}
}, 
  resizingLoadOne: function() {
    if (app.face && app.dos && app.scanBface && app.scanBdos) {
        app.scanBdos.style.height = '280px';
        app.scanBface.style.height = '280px';
        app.face.style.height = '280px';
        app.dos.style.height = '280px';
    }
   
  },
  resizingLoadTwo: function() {
    if (app.screenR){
      app.screenR.style.height = '43vh';
    }
  },
  resizingLoadThree: function() {
    if (app.screenL){
      app.screenL.style.height = '43vh';
    }
  },
    resizingTimeOut:function(){
      //7500, 9000, 9600
      setTimeout(app.resizingLoadOne,200);
      setTimeout(app.resizingLoadTwo,300);
      setTimeout(app.resizingLoadThree,300);
    },
};
  document.addEventListener('DOMContentLoaded', app.init);