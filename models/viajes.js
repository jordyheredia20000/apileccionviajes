var mongose = require("mongoose");
var Schema = mongose.Schema;
var viajesSchema = new Schema({
    idViaje: Number,
    idVehiculo: Number,
    tipoViaje: String,
    origen: String,
    destino: String,
    conductor: String,
    fechaViaje: String,
    fechaLlegada: String,
    viaticos: Number,
    idGuia: Number,
    costo: Number,
    semanas: Number,
})

module.exports = mongose.model("viajes", viajesSchema);

