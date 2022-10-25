const express = require( 'express' );
const reservas = require('../controllers/reserva.controller.js');
const router = express.Router();

// Create a new reserva
router.post('/reservas', reservas.create);

//Retrieve all reservas
router.get('/reservas', reservas.findAll);

// Retrieve a single reserva with id
router.get('/reservas/:id', reservas.findOne);

// Update a reserva with id
router.put('/reservas/:id', reservas.update);

// Delete a reserva with id
router.delete('/reservas/:id', reservas.delete);

module.exports = router;