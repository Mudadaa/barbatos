const dataMapper = require('./dataMapper.js');
const mainController = {
    homePage: async (request,response) => {
        try {
            const gundamTrad= await dataMapper.getGundamTrad()
                 
            response.send(gundamTrad)
            console.log(gundamTrad);
        } catch (error) {
            console.log(error)

            response.status(500).send("Une erreur de server est survenue, désolé du soucis")
        }
        
    }
   
 };

module.exports = mainController;