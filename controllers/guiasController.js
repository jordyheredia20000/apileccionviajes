const Guia = require('../models/guias');

// Función para agregar una guía
exports.agregarGuia = async (req, res) => {
  try {
    const nuevaGuia = new Guia(req.body);
    const resultado = await nuevaGuia.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar la guía' });
  }
};

// Función para buscar una guía por su ID
exports.buscarVehiculoPorId = async (req, res) => {
    var id = req.params.id;
    try {
      const guia = await Guia.findById({ "_id": id });
  
      if (guia != null) {
        res.status(200).json({ guia });
      } else {
        res.status(500).json({ message: "NO EXISTE LA GUIA" });
      }
    } catch (error) {
      res.status(500).json({ message: "ERROR DE SERVIDOR ES: " });
    }
  };

// Función para actualizar una guía por su ID
exports.actualizarGuia = async (req, res) => {
  try {
    const guia = await Guia.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!guia) {
      return res.status(404).json({ error: 'Guía no encontrada' });
    }
    res.status(200).json(guia);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la guía' });
  }
};

// Función para eliminar una guía por su ID
exports.eliminarGuia = async (req, res) => {
  try {
    const guia = await Guia.findByIdAndRemove(req.params.id);
    if (!guia) {
      return res.status(404).json({ error: 'Guía no encontrada' });
    }
    res.status(204).json(); // No Content
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la guía' });
  }
};

// Función para mostrar todas las guías en la base de datos
exports.mostrarTodasLasGuias = async (req, res) => {
  try {
    const guias = await Guia.find();
    res.status(200).json(guias);
  } catch (error) {
    res.status(500).json({ error: 'Error al recuperar las guías' });
  }
};
