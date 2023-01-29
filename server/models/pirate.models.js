//Archivo de modelos de datos del proyecto

const mongoose = require("mongoose");


//se declara el schema, con el formato de datos a utilizar
const PiratesSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "Please enter the pirate name"]
    },
    url: {
        type: String,
        minlength: [8, "Please enter a valid URL"],
    },
    treasures: {
        type: Number,
        validate : {
            validator : function (number) {
                return number.isInteger;
            },
            message : 'Entered number is not a valid input value'
        }
    },
    phrase : {
        type: String,
        required: [true, "Please enter the pirate's catch phrase"]
    },
    position : {
        type: String,
        required: [true, "Please select a valid position"]
    },
    pegLeg : {
        type: Boolean,
        required: [true, "Please check a valid box"]
    },
    eyePatch : {
        type: Boolean,
        required: [true, "Please check a valid box"]
    },
    hookHand : {
        type: Boolean,
        required: [true, "Please check a valid box"]
    }

}); 

const Pirate = mongoose.model("Pirate", PiratesSchema);

module.exports = Pirate;