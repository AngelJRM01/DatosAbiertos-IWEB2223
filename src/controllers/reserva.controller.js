const Reserva = require("../models/Reserva.model");

// Create and Save a new Reserva
exports.create = (req, res) => {
    // Validate request
    if (!req.body.persona) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    // Create a Reserva
    const reserva = new Reserva({
        fecha: req.body.fecha,
        estancia: req.body.estancia,
        persona: req.body.persona,
        numeroPersonas: req.body.numeroPersonas,
        vivienda: req.body.vivienda
    });
    
    // Save Reserva in the database
    reserva
        .save(reserva)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Reserva."
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    
    Reserva.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Reserva with id=${id}. Maybe Reserva was not found!`
                });
            } else {
                res.send({
                    message: "Reserva was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Reserva with id=" + id
            });
        });
}

