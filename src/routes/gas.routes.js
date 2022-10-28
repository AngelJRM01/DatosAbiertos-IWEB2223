const express = require( 'express' );
const gas = require('../controllers/gas.controller.js');
const router = express.Router();

// Retrieve all gas
router.get('/', gas.findAll);

// Retrieve all gas by localidad
router.get('/:localidad', gas.findByLocalidad);

// Retrieve the most cheappest gas
router.get('/:tipoGasolina/:localidad', gas.findCheaperInLocalidad);

// Retrieve 3 closest gas by longitud and latitud
router.get('/:latitud/:longitud/:gradoAproximacion', gas.findCoordinates);


module.exports = router;