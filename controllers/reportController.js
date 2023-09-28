const Vehiculo = require('../models/vehiculo');
const Mantenimiento = require('../models/mantenimiento');
const Guia = require('../models/guias');
const Viaje = require('../models/viajes');

exports.generarInforme = async (req, res) => {
  try {
    // Obtener datos de los modelos
    const vehiculos = await Vehiculo.find();
    const mantenimientos = await Mantenimiento.find();
    const guias = await Guia.find();
    const viajes = await Viaje.find();

    // Procesar los datos si es necesario

    // Crear el informe con subdivisiones
    const informe = {
      vehiculos: {
        datos: vehiculos,
        total: vehiculos.length,
      },
      mantenimientos: {
        datos: mantenimientos,
        total: mantenimientos.length,
      },
      guias: {
        datos: guias,
        total: guias.length,
      },
      viajes: {
        datos: viajes,
        total: viajes.length,
      },
    };

    // Enviar el informe como respuesta (en formato JSON)
    res.status(200).json({ informe: informe });
  } catch (error) {
    res.status(500).json({ error: 'Error al generar el informe' });
  }
};
