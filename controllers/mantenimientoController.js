const Mantenimiento = require('../models/mantenimiento');

// Función para agregar un mantenimiento
exports.agregarMantenimiento = async (req, res) => {
  try {
    const nuevoMantenimiento = new Mantenimiento(req.body);
    const resultado = await nuevoMantenimiento.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el mantenimiento' });
  }
};

// Función para buscar un mantenimiento por su ID
exports.buscarMantenimientoPorId = async (req, res) => {
  var id = req.params.id;
  try {
    const mantenimiento = await Mantenimiento.findById({ "_id": id });

    if (mantenimiento != null) {
      res.status(200).json({ mantenimiento });
    } else {
      res.status(500).json({ message: "NO EXISTE EL MANTENIMIENTO" });
    }
  } catch (error) {
    res.status(500).json({ message: "ERROR DE SERVIDOR ES: " });
  }
};

// Función para actualizar un mantenimiento por su ID
exports.actualizarMantenimiento = async (req, res) => {
  try {
    const mantenimiento = await Mantenimiento.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!mantenimiento) {
      return res.status(404).json({ error: 'Mantenimiento no encontrado' });
    }
    res.status(200).json(mantenimiento);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el mantenimiento' });
  }
};

// Función para eliminar un mantenimiento por su ID
exports.eliminarMantenimiento = async (req, res) => {
  try {
    const mantenimiento = await Mantenimiento.findByIdAndRemove(req.params.id);
    if (!mantenimiento) {
      return res.status(404).json({ error: 'Mantenimiento no encontrado' });
    }
    res.status(204).json(); // No Content
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el mantenimiento' });
  }
};

// Función para mostrar todos los mantenimientos en la base de datos
exports.mostrarTodosLosMantenimientos = async (req, res) => {
  try {
    const mantenimientos = await Mantenimiento.find();
    res.status(200).json(mantenimientos);
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar los mantenimientos' });
  }
};
