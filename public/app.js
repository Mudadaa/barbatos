const app={
    //contiendra les nouvelles fonctions de dynamisation de la page web
    //pour sa refonte
    init :function (){
      app.toggleOne=document.querySelector('.toggleButton');
      app.face=document.getElementById('faceB');
      app.dos=document.getElementById('dosB');
      app.scanBface=document.getElementById('scanBface');
      app.scanBdos=document.getElementById('scanBdos');
      //event listener pour le bouton toggle
      app.toggleOne.addEventListener('click',app.toggle);
      app.scanBface.addEventListener('mouseenter',app.hoverScan);
      app.scanBdos.addEventListener('mouseenter',app.hoverScan);
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

  hoverScan: function(){
 if(app.scanBdos.hasAttribute('hidden')){
    app.scanBdos.removeAttribute('hidden');
    app.scanBface.setAttribute("hidden", "true"); 
 }else{
    app.scanBface.removeAttribute('hidden');
    app.scanBdos.setAttribute("hidden", "true");
 }
  },
};
  document.addEventListener('DOMContentLoaded', app.init);