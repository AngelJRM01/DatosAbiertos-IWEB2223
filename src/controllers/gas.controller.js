//const Gas = require("../models/Gas.model");
const Gas = require("../data/data.json");

// Retrieve all gas
exports.findAll = (req, res) => {

    res.json(Gas);
    
}

exports.findByLocalidad = (req, res) => {

    const localidad = req.params.localidad;
    const gas = Gas.ListaEESSPrecio.filter( g => g.Localidad == localidad); 
    
    res.json(gas);
}