var mongose = require("mongoose");
var Schema = mongose.Schema;
var mantenimientoSchema = new Schema({
    idMantenimiento: Number,
    idVehiculo: Number,
    tipoMantenimiento: String,
    descripciónMantenimiento: String,
    fechaMantenimiento: String,
    kilometraje: Number,
    fechaFuturoMantenimiento: String,
    costo: Number,
    piezaRepuesto: String,
})

module.exports = mongose.model("mantenimiento", mantenimientoSchema);

