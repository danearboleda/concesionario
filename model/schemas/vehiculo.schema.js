/**packages */
const mongoose = require("mongoose");

/** Schema creation */
const vehiculoSchema = new mongoose.Schema({
    color:{
        type: "String",
        required: true
    },
    modelo:{
        type: "String",
        required: true
    },
    serie_chasis:{
        type: "String",
        required: true,
        unique: true
    },
    serie_motor:{
        type: "String",
        required: true
    },
    precio:{
        type: "Number",
        required: true
    },
    descuento:{
        type: "Number",
        required: true
    },
    estado:{
        type: "String",
        required: true
    },
    marca:{
        type: "String",
        required: true
    },
    categoria:{
        type: "String",
        required: true
    }
});

/**Schema exportation */
module.exports = vehiculoSchema;
