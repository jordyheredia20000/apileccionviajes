var mongose = require("mongoose");
var Schema = mongose.Schema;
var guiasSchema = new Schema({
    idGuia: Number,
    idViaje: Number,
    numGuias: Number,
    zonasGuia: String,
})

module.exports = mongose.model("guias", guiasSchema);

