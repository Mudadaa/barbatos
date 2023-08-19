const dataMapper = require('./dataMapper.js');

const mainController = {
    HomePage: async (request, response, next) => {
        try {
            const gundamEnglish = await dataMapper.getGundamTrad();
            
            response.render('accueil',{gundamEnglish});
          
        } catch (error) {
            console.log(error)

            response.status(500).send("Une erreur de serveur est survenue, désolé du souci");
        }
      
    }, 
   
};

module.exports = mainController;
