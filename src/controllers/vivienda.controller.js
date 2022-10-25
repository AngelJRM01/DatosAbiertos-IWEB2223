const Vivienda = require("../models/Vivienda.model");

// Create and Save a new Vivienda
exports.create = (req, res) => {
    // Validate request
    if (!req.body.titulo) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    // Create a Vivienda
    const vivienda = new Vivienda({
        capacidad: req.body.capacidad,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion,
        estado: req.body.estado,
        fechasDisponibles: req.body.fechasDisponibles,
        imagenes: req.body.imagenes,
        precioNoche: req.body.precioNoche,
        titulo: req.body.titulo,
        valoracion: req.body.valoracion,
        propietario: req.body.propietario,
        coordenadas: requ.body.coordenadas
    });
    
    // Save Vivienda in the database
    vivienda
        .save(vivienda)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Vivienda."
            });
        });
}

exports.findAll = (req, res) => {
    const titulo = req.query.titulo;
    var condition = titulo ? {titulo: { $regex: new RegExp(titulo), $options: "i"} } : {};

    Vivienda.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while retrieving Vivienda."
            });
        });
}

