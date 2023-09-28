var express = require('express');
var api = express.Router();
var viajesController = require('../controllers/viajesController'); 

// Ruta para agregar un viaje
api.post('/viajes', viajesController.agregarViaje);

// Ruta para buscar un viaje por su ID
api.get('/viajes/:id', viajesController.buscarViajePorId);

// Ruta para actualizar un viaje por su ID
api.put('/viajes/:id', viajesController.actualizarViaje);

// Ruta para eliminar un viaje por su ID
api.delete('/viajes/:id', viajesController.eliminarViaje);

// Ruta para mostrar todos los viajes
api.get('/mostrarviajes', viajesController.mostrarTodosLosViajes);

module.exports = api;
