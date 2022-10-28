const express = require( 'express' );
const gas = require('../controllers/gas.controller.js');
const router = express.Router();

// Retrieve all gas
router.get('/', gas.findAll);

// Retrieve all gas by localidad
router.get('/:localidad', gas.findByLocalidad);

// Retrieve 3 cheaper gas by longitud and latitud
router.get('/:longitud/:latitud', gas.findCheaper);


module.exports = router;