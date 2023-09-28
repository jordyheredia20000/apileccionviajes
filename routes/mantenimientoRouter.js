const express = require('express');
const api = express.Router();
const mantenimientoController = require('../controllers/mantenimientoController'); 

// Ruta para agregar un mantenimiento
api.post('/mantenimientos', mantenimientoController.agregarMantenimiento);

// Ruta para buscar un mantenimiento por su ID
api.get('/mantenimientos/:id', mantenimientoController.buscarMantenimientoPorId);

// Ruta para actualizar un mantenimiento por su ID
api.put('/mantenimientos/:id', mantenimientoController.actualizarMantenimiento);

// Ruta para eliminar un mantenimiento por su ID
api.delete('/mantenimientos/:id', mantenimientoController.eliminarMantenimiento);

// Ruta para mostrar todos los mantenimientos
api.get('/mostrarmantenimientos', mantenimientoController.mostrarTodosLosMantenimientos);

module.exports = api;
