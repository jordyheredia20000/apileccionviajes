var Vehiculo = require('../models/vehiculo');
var Viaje = require('../models/viajes');
var Mantenimiento = require('../models/mantenimiento');

// Función para agregar un vehículo
exports.agregarVehiculo = async (req, res) => {
  try {
    const nuevoVehiculo = new Vehiculo(req.body);
    const resultado = await nuevoVehiculo.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el vehículo' });
  }
};

// Función para buscar un vehículo por su ID
exports.buscarVehiculoPorId = async (req, res) => {
  var id = req.params.id;
  try {
    const vehiculo = await Vehiculo.findById({ "_id": id });

    if (vehiculo != null) {
      res.status(200).json({ vehiculo });
    } else {
      res.status(500).json({ message: "NO EXISTE EL VEHICULO" });
    }
  } catch (error) {
    res.status(500).json({ message: "ERROR DE SERVIDOR ES: " });
  }
};


// Función para actualizar un vehículo por su ID
exports.actualizarVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }
    res.status(200).json(vehiculo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el vehículo' });
  }
};

// Función para eliminar un vehículo por su ID
exports.eliminarVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findByIdAndRemove(req.params.id);
    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }
    res.status(204).json(); // No Content
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el vehículo' });
  }
};

// Función para mostrar todos los vehículos en la base de datos
exports.mostrarTodosLosVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar los vehículos' });
  }
};

// Función para buscar los viajes de un vehículo por su placa
exports.buscarViajesPorPlaca = async (req, res) => {
  try {
    const placa = req.params.placa; // Obtén la placa desde los parámetros de la solicitud

    // Busca el vehículo por su placa
    const vehiculo = await Vehiculo.findOne({ placa: placa });

    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }

    // Busca los viajes relacionados con el vehículo por su idVehiculo
    const viajes = await Viaje.find({ idVehiculo: vehiculo.idVehiculo });

    res.status(200).json(viajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar los viajes del vehículo' });
  }
};

// Función para buscar los mantenimientos de un vehículo por su placa
exports.buscarMantenimientosPorPlaca = async (req, res) => {
  try {
    const placa = req.params.placa; // Obtén la placa desde los parámetros de la solicitud

    // Busca el vehículo por su placa
    const vehiculo = await Vehiculo.findOne({ placa: placa });

    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }

    // Busca los mantenimientos relacionados con el vehículo por su idVehiculo
    const mantenimientos = await Mantenimiento.find({ idVehiculo: vehiculo.idVehiculo });

    res.status(200).json(mantenimientos);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar los mantenimientos del vehículo' });
  }
};