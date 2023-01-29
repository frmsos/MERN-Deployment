//Archivo del controlador, definimos las funciones con las cuales el backend tomara
//acciones de acuerdo a la ruta introducida del lado del frotend.

//se importa el modelo
const Pirate = require("../models/pirate.models");

//definimos las acciones

module.exports = {
    createPirate : (request, response) => {
        console.log('create item server', request.body);
        Pirate.create(request.body)
        .then(newPirate=> response.json({pirate : newPirate}))
        .catch(error => 
            response.status(400).json( {message : "Error creating a new pirate", error: error} ));
    }
    ,
    getPirates : (request, response) => { 
        console.log('get all items server');
        Pirate.find()
        .then( allPirates => response.json( { pirates : allPirates } ))
        .catch( error => response.status(400).json({message : "Error getting all authors", error: error}  ))
    }
    ,
    getPirateByID : (request, response) => {
        console.log('get pirate by id server', request.params.id);
        Pirate.findOne({ _id: request.params.id })
        .then(reqPirate => response.json( {pirate : reqPirate }))
        .catch( error => response.json({message : "Error getting pirate by ID", error: error}  ))
    },
    updatePirate : (request, response) =>{
        console.log('update pirate by id server', request.body);
        Pirate.updateOne({ _id: request.params.id }, request.body, {runValidators : true} )
        .then(updatedPirate => response.json( {pirate : updatedPirate }))
        .catch( error => response.status(400).json({message : "Error updating one author", error: error}  ))
    },
    deletePirate : (request, response) => {
        console.log('deleting function server', request.params.id);
        Pirate.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.status(400).json({ message: "Error deleting the author", error: err }));
    }
    



} //module exports