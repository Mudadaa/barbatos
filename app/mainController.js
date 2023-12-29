// // const dataMapper = require('./dataMapper.js');
// en raison de SOUCIS DE BUILD pour l'hébergement sur HEROKU, j'ai du changer la structure de mon projet et donc le chemin d'accès à mon fichier JSON
//  const traData=require('./DB/fullData.json');

// const mainController = {
//     HomePage: async (request, response, next) => {
//         try {
//             const tradList = await traData.map(tradList => tradList.content);
                
            
//             response.render('index.html',{tradList});
           
            
//         } catch (error) {
//             console.log(error)

//             response.status(500).send("Une erreur de serveur est survenue, désolé du souci");
//         }
      
//     }, 
//     ToolsPage:(request, response) => {
//        try {
//         response.render('outils');
//        } catch (error) {
//         console.log(error)

//         response.status(500).send("Une erreur de serveur est survenue, désolé du souci");
   
//        }
//     },
   
// };

// module.exports = mainController;
