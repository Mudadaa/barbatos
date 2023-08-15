const dataMapper = require('./dataMapper.js');
const mainController = {
    HomePage: async (request, response, next) => {
        try {
            const GundamTrad = await dataMapper.getGundamTrad();
            
            response.send(GundamTrad);
          
        } catch (error) {
            console.log(error)

            response.status(500).send("Une erreur de serveur est survenue, désolé du souci");
        }
      
    }, 
   
};

module.exports = mainController;
