var express = require('express');
var app = express();

//cargar ruta
var vehiculo_routes = require('../leccionApiViajes/routes/vehiculoRouter');
var viajes_routes = require('../leccionApiViajes/routes/viajesRouter');
var mantenimiento_router = require('../leccionApiViajes/routes/mantenimientoRouter');
var report_router = require('../leccionApiViajes/routes/reportRouter');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

//ruta base
app.use('/api', vehiculo_routes, viajes_routes, mantenimiento_router, report_router);

module.exports = app;