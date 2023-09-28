var mongose = require("mongoose");
var Schema = mongose.Schema;
var vehiculoSchema = new Schema({
    idVehiculo: Number,
    carga: Number,
    placa: String,
})

module.exports = mongose.model("vehiculo", vehiculoSchema);

