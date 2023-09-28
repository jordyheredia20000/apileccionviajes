var express = require('express');
var api = express.Router();
var vehiculosController = require('../controllers/vehiculoController');

// Ruta para agregar un vehículo
api.post('/vehiculos', vehiculosController.agregarVehiculo);

// Ruta para buscar un vehículo por su ID
api.get('/vehiculos/:id', vehiculosController.buscarVehiculoPorId);

// Ruta para actualizar un vehículo por su ID
api.put('/vehiculos/:id', vehiculosController.actualizarVehiculo);

// Ruta para eliminar un vehículo por su ID
api.delete('/vehiculos/:id', vehiculosController.eliminarVehiculo);

// Ruta para mostrar todos los vehículos
api.get('/mostrarvehiculos', vehiculosController.mostrarTodosLosVehiculos);

api.get('/viajesplaca/:placa', vehiculosController.buscarViajesPorPlaca);

api.get('/mantenimientos/:placa', vehiculosController.buscarMantenimientosPorPlaca);

module.exports = api;
