const app={
    //contiendra les nouvelles fonctions de dynamisation de la page web
    //pour sa refonte
    init :function (){
      app.toggleOne=document.querySelector('.toggleButton');
      app.face=document.getElementById('faceB');
      app.dos=document.getElementById('dosB');

      //event listener pour le bouton toggle
      app.toggleOne.addEventListener('click',app.toggle);
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
  }
};
  document.addEventListener('DOMContentLoaded', app.init);