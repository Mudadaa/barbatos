const dataMapper = require('./dataMapper.js');

const mainController = {
    HomePage: async (request, response, next) => {
        try {
            const tradList = await dataMapper.getGundamTrad();
            
            response.render('accueil',{tradList});
            console.log(tradList);
            console.log(tradList[0].content);
        } catch (error) {
            console.log(error)

            response.status(500).send("Une erreur de serveur est survenue, désolé du souci");
        }
      
    }, 
    ToolsPage:(request, response) => {
       try {
        response.render('outils');
       } catch (error) {
        console.log(error)

        response.status(500).send("Une erreur de serveur est survenue, désolé du souci");
   
       }
    },
   
};

module.exports = mainController;
