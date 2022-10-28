const express = require( 'express' );
const tourists = require('../controllers/tourists.controller.js');
const router = express.Router();

// Retrieve all tourists
router.get('/', tourists.findAll);


module.exports = router;