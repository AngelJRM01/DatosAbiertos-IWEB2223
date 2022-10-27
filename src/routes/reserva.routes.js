const express = require( 'express' );
const reservas = require('../controllers/reserva.controller.js');
const router = express.Router();

// Create a new reserva
router.post('/', reservas.create);

//Retrieve all reservas
router.get('/', reservas.findAll);

// Retrieve a single reserva with id
router.get('/:id', reservas.findOne);

// Update a reserva with id
router.put('/:id', reservas.update);

// Delete a reserva with id
router.delete('/:id', reservas.delete);

module.exports = router;