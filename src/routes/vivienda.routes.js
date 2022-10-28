const express = require( 'express' );
const viviendas = require('../controllers/vivienda.controller.js');
const router = express.Router();

// Create a new vivienda
router.post('/', viviendas.create);

//Retrieve all viviendas
router.get('/', viviendas.findAll);

// Retrieve a single vivienda with id
router.get('/:id', viviendas.findOne);

// Update a vivienda with id
router.put('/:id', viviendas.update);

// Delete a vivienda with id
router.delete('/:id', viviendas.delete);

// Retrieve all reservas from a vivienda
router.get('/:id/reservas', viviendas.findReservas);

// Retrieve all viviendas under a price. Galo
router.get('/precio/:precio', viviendas.findUnderPrice);

// Retrieve all gests from a vivienda
router.get('/:id/huespedes', viviendas.findGuests);

// Retrieve all viviendas over a price
router.get('/valoracion/:valoracion', viviendas.findOverRating);

module.exports = router;