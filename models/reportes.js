var mongose = require("mongoose");
var Schema = mongose.Schema;
var reportesSchema = new Schema({
    idVehiculo: Number,
    carga: Number,
    placa: String,
    idViaje: Number,
    tipoViaje: String,
    origen: String,
    destino: String,
    conductor: String,
    fechaViaje: String,
    fechaLlegada: String,
    viaticos: Number,
    idGuia: Number,
    numGuias: Number,
    costo: Number,
    semanas: Number,
})

module.exports = mongose.model("reportes", reportesSchema);

