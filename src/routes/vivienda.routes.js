const express = require( 'express' );
const viviendas = require('../controllers/vivienda.controller.js');
const router = express.Router();

// Create a new reserva
router.post('/', viviendas.create);

//Retrieve all reservas
router.get('/', viviendas.findAll);

// Retrieve a single reserva with id
router.get('/:id', viviendas.findOne);

// Update a reserva with id
router.put('/:id', viviendas.update);

// Delete a reserva with id
router.delete('/:id', viviendas.delete);

module.exports = router;