const app={
    //contiendra les nouvelles fonctions de dynamisation de la page web
    //pour sa refonte
    init :function (){
      app.toggleDiv=document.querySelector('.normalBarbatos');
      app.scanDiv=document.querySelector('.rayBarbatos');
      app.face=document.getElementById('faceB');
      app.dos=document.getElementById('dosB');
      app.scanBface=document.getElementById('scanBface');
      app.scanBdos=document.getElementById('scanBdos');
      app.screenR=document.querySelector('.ecran-droit');
      app.screenL=document.querySelector('.ecran-gauche');
      //event listener pour la div qui toggle
      app.toggleDiv.addEventListener('click',app.toggle);
      app.scanDiv.addEventListener('click',app.toggleScan);
      //pour le resize qui simule l'allumage du gundam
      app.resizingTimeOut();
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
  resizingLoad: function() {
    if (app.face && app.dos && app.scanBface && app.scanBdos) {
        app.scanBdos.style.height = '280px';
        app.scanBface.style.height = '280px';
        app.face.style.height = '280px';
        app.dos.style.height = '280px';
        app.screenR.style.height = '43vh';
        app.screenL.style.height = '43vh';
    }
    console.log('resizingLoad');
  },
    resizingTimeOut:function(){
      setTimeout(app.resizingLoad,1000);
    },
};
  document.addEventListener('DOMContentLoaded', app.init);