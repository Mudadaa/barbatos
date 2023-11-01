
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
      app.closingButton=document.querySelector('.closingButton');
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
      // ---------------DIV Videos IMG SKILLS------------------------------------
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
      
      app.screenL.addEventListener('click',app.lateralGHover);
      
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
      
    //leftScreen Communication with MikaZuki
    app.notice=document.querySelector('.notice');
    app.speech=document.querySelector('.speech');
    app.speechOne=document.querySelector('.mika-speech');
    app.mikazuki=document.querySelector('.mikazuki');
    app.mikaOne=document.querySelector('.mikaOne');
    app.mikaTwo=document.querySelector('.mikaTwo');
    app.notice.addEventListener('click',app.mikaCommunication);
    app.notice.addEventListener('click',app.mikaSpeechAddLetter);
      //event listener pour les boutons de changement de langue
      app.intelButton.addEventListener('click',app.changeEnglish);
      app.johoButton.addEventListener('click',app.changeJapanese);
      app.closingButton.addEventListener('click',app.closingText);
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
  mikaCommunication: function(){
    app.notice.setAttribute('hidden', 'true');
    app.speech.removeAttribute('hidden');
    app.mikazuki.removeAttribute('hidden');
    app.mikaOne.removeAttribute('hidden');
  },
  mikaSpeechAddLetter: function(){
    var text="Hey! T'es aux commandes de Barbatos! Ne l'abîmes pas !";
    const textContainer = app.speechOne;
  
    // Fonction pour effacer le contenu du textContainer
    function clearTextContainer() {
      while (textContainer.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
      }
    }
  
    clearTextContainer(); // Efface le contenu actuel
  
    let index = 0;
    let delay = 50;
  
    function addLetter() {
      if (index < text.length) {
        const letter = document.createElement('span');
        letter.textContent += text[index];
        textContainer.appendChild(letter);
        index++;
        // Délai entre chaque lettre (en millisecondes)
        if (index % 10 === 0) {
          delay = 50;
        }
        setTimeout(addLetter, delay);
      }else {
        // La première fonction a terminé d'afficher le texte
        // Démarrez la deuxième fonction après 1.5 secondes
        setTimeout(app.mikaSpeechAddLetterTwo, 1500);
      }
    }
    addLetter();
  },
  mikaSpeechAddLetterTwo: function(){
    console.log("mikaSpeech2");
    app.mikaOne.setAttribute('hidden', 'true');
    app.mikaTwo.removeAttribute('hidden');
    var text = "Tu te débrouilles pas trop mal pour un bleu ! Passes voir Orga, notre chef, il te trouvera un poste";
    const textContainer = app.speechOne;
  
    // Fonction pour effacer le contenu du textContainer
    function clearTextContainer() {
      while (textContainer.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
      }
    }
  
    clearTextContainer(); // Efface le contenu actuel
  
    let index = 0;
    let delay = 50;
  
    function addLetter() {
      if (index < text.length) {
        const letter = document.createElement('span');
        letter.textContent += text[index];
        textContainer.appendChild(letter);
        index++;
        // Délai entre chaque lettre (en millisecondes)
        if (index % 10 === 0) {
          delay = 50;
        }
        setTimeout(addLetter, delay);
      }
    }
    addLetter();
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
  const mediaQuery = window.matchMedia('(max-height: 575.98px) ');
  app.firstVideo.style.display='none';
  app.body.removeAttribute('hidden');
 
},
bodyLHover: function(){
  
  app.body.setAttribute('hidden', 'true');
  app.firstVideo.style.display='inline-flex';
  app.firstVideo.play();
},
massueHover: function(){
  const mediaQuery = window.matchMedia('(max-height: 575.98px) ');
  app.secondVideo.style.display='none';
  app.massue.removeAttribute('hidden');
},
massueLHover: function(){
  app.massue.setAttribute('hidden', 'true');
  app.secondVideo.style.display='inline-flex';
  app.secondVideo.play();
},
lupusHover: function(){
  const mediaQuery = window.matchMedia('(max-height: 575.98px) ');
  app.thirdVideo.style.display='none';
  app.lupus.removeAttribute('hidden');
  if (mediaQuery.matches) {
    app.thirdVideo.play();
  }
},
lupusLHover: function(){
  app.lupus.setAttribute('hidden', 'true');
  app.thirdVideo.style.display='inline-flex';
  app.thirdVideo.play();
},
changeEnglish: function(){
  if(app.english.hasAttribute('hidden')){
    app.milieu.style.gridTemplateColumns = "1fr 1fr";
    app.tradText.removeAttribute('hidden');
    app.scanDiv.style.display='none';
    app.english.removeAttribute('hidden');
    app.japanese.setAttribute("hidden", "true");
    app.closingButton.removeAttribute('hidden');
    app.tradText.style.backgroundColor='rgba(0, 255, 255, 0.076)';
    app.tradText.style.border='#0C7175 solid 1px';
    app.tradText.style.backgroundImage="url('/img/card.png')";
}
},
changeJapanese: function(){
  if(app.japanese.hasAttribute('hidden')){
    app.milieu.style.gridTemplateColumns = "1fr 1fr";
    app.tradText.removeAttribute('hidden');
    app.scanDiv.style.display='none';
    app.japanese.removeAttribute('hidden');
    app.english.setAttribute("hidden", "true");
    app.closingButton.removeAttribute('hidden');
    app.tradText.style.backgroundColor='rgba(0, 255, 255, 0.076)';
    app.tradText.style.border='#0C7175 solid 1px';
    app.tradText.style.backgroundImage="url('/img/card.png')";
}
}, 
closingText: function(){
  app.closingButton.setAttribute('hidden', 'true');
  app.english.setAttribute("hidden", "true");
  app.japanese.setAttribute("hidden", "true");
  app.scanDiv.style.display='unset';
  app.milieu.style.gridTemplateColumns = "1fr 1fr 1fr";
  app.tradText.style.backgroundColor='transparent';
  app.tradText.style.border='none';
  app.tradText.style.backgroundImage='none';
},
  resizingLoadOne: function() {
    //pour adapter les dimesnions au format téléphone
    const mediaQuery = window.matchMedia('(max-height: 575.98px) ');
//pour l'effet d'ouverture d'écrans
    if (app.face && app.dos && app.scanBface && app.scanBdos) {
        app.scanBdos.style.height = '240px';
        app.scanBface.style.height = '240px';
        app.face.style.height = '240px';
        app.dos.style.height = '240px';
        
    }
    
  //téléphone
    if (mediaQuery.matches) {
      app.scanBdos.style.height = '140px';
        app.scanBface.style.height = '140px';
        app.face.style.height = '140px';
        app.dos.style.height = '140px';
    }
   
  },
 
  resizingLoadTwo: function() {
    if (app.screenR&& app.notice){
      app.screenR.style.height = '43vh';
      app.notice.textContent="『　Attention: Initiating communication sequence.  CLICK　』";
      app.notice.style.setProperty('height', 'fit-content');
      app.notice.style.setProperty('width', 'fit-content');
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
      setTimeout(app.resizingLoadTwo,800);
      setTimeout(app.resizingLoadThree,700);
    },
};
  document.addEventListener('DOMContentLoaded', app.init);