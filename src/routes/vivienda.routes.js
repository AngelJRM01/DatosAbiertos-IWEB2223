const express = require( 'express' );
const viviendas = require('../controllers/vivienda.controller.js');
const router = express.Router();

// Create a new reserva
router.post('/viviendas', viviendas.create);

//Retrieve all reservas
router.get('/viviendas', viviendas.findAll);

// Retrieve a single reserva with id
router.get('/viviendas/:id', viviendas.findOne);

// Update a reserva with id
router.put('/viviendas/:id', viviendas.update);

// Delete a reserva with id
router.delete('/viviendas/:id', viviendas.delete);

module.exports = router;