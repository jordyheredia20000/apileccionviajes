const Viaje = require('../models/viajes'); 

// Función para agregar un viaje
exports.agregarViaje = async (req, res) => {
  try {
    const nuevoViaje = new Viaje(req.body);
    const resultado = await nuevoViaje.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el viaje' });
  }
};

// Función para buscar un viaje por su ID
exports.buscarViajePorId = async (req, res) => {
  var id = req.params.id;
  try {
    const viaje = await Viaje.findById({ "_id": id });

    if (viaje != null) {
      res.status(200).json({ viaje });
    } else {
      res.status(500).json({ message: "NO EXISTE EL VIAJE" });
    }
  } catch (error) {
    res.status(500).json({ message: "ERROR DE SERVIDOR ES: " });
  }
};

// Función para actualizar un viaje por su ID
exports.actualizarViaje = async (req, res) => {
  try {
    const viaje = await Viaje.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!viaje) {
      return res.status(404).json({ error: 'Viaje no encontrado' });
    }
    res.status(200).json(viaje);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el viaje' });
  }
};

// Función para eliminar un viaje por su ID
exports.eliminarViaje = async (req, res) => {
  try {
    const viaje = await Viaje.findByIdAndRemove(req.params.id);
    if (!viaje) {
      return res.status(404).json({ error: 'Viaje no encontrado' });
    }
    res.status(204).json(); // No Content
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el viaje' });
  }
};

// Función para mostrar todos los viajes en la base de datos
exports.mostrarTodosLosViajes = async (req, res) => {
  try {
    const viajes = await Viaje.find();
    res.status(200).json(viajes);
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar los viajes' });
  }
};
