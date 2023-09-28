const express = require('express');
const api = express.Router();
const guiasController = require('./ruta/al/controlador/guiasController'); 

// Ruta para agregar una guía
api.post('/guias', guiasController.agregarGuia);

// Ruta para buscar una guía por su ID
api.get('/guias/:id', guiasController.buscarGuiaPorId);

// Ruta para actualizar una guía por su ID
api.put('/guias/:id', guiasController.actualizarGuia);

// Ruta para eliminar una guía por su ID
api.delete('/guias/:id', guiasController.eliminarGuia);

// Ruta para mostrar todas las guías
api.get('/guias', guiasController.mostrarTodasLasGuias);

module.exports = api;
