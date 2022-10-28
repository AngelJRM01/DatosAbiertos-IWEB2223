const express = require( 'express' );
const tourists = require('../controllers/tourists.controller.js');
const router = express.Router();

// Retrieve all tourists
router.get('/', tourists.findAll);

// Retrieve number of tourists from a month of last year at a determined region
// mes: M01 -> January, M02 -> February, ... , M12 -> December
router.get('/:comunidadAutonoma/:mes', tourists.findByComunidadAutonoma);

// Retrieve trip average duration from a origin country tourist a month of last year at a determined region
// mes: M01 -> January, M02 -> February, ... , M12 -> December
router.get('/duration/:origen/:comunidadAutonoma/:mes', tourists.findTripDuration);

module.exports = router;