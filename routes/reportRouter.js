const express = require('express');
const api = express.Router();
const informesController = require('../controllers/reportController'); // Asegúrate de que la ruta sea correcta

// Ruta para generar un informe
api.get('/reportetotal', informesController.generarInforme);

module.exports = api;
