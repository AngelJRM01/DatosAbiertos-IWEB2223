const Vivienda = require("../models/Vivienda.model");

// Create and Save a new Vivienda
exports.create = (req, res) => {
    // Validate request
    if (!req.body.titulo) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    // Create a Vivienda
    const vivienda = new Vivienda(req.body);
    
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
                err.message || "Some error occurred while retrieving viviendas."
            });
        });
}

exports.findOne = (req, res) => {
    const id = req.query.id;

    Vivienda.findById(id)
        .then(data => {
            if(!data)
                res.status(404).send({message: "Not found Vivienda with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving Vivienda with id " + id });
        });
}

exports.update= (req, res) => {
    if (!req.body) {
        return res.status(400).send({ 
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Vivienda.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Vivienda with id=${id}. Maybe Vivienda was not found!`
        });
      } else res.send({ message: "Vivienda was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Vivienda with id=" + id
      });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Vivienda.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Vivienda with id=${id}. Maybe Vivienda was not found!`
          });
        } else {
          res.send({
            message: "Vivienda was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vivienda with id=" + id
        });
      });
}