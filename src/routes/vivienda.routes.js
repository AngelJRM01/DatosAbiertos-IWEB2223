module.exports = app => {

    const viviendas = require('../controllers/vivienda.controller.js');

    var router = require('express').Router();

    // Create a new vivienda
    router.post('/viviendas', viviendas.create);

    // Retrieve all viviendas
    router.get('/viviendas', viviendas.findAll);

    /*// Retrieve a single vivienda with id
    router.get('/viviendas/:id', viviendas.findOne);

    // Update a vivienda with id
    router.put('/viviendas/:id', viviendas.update);

    // Delete a vivienda with id
    router.delete('/viviendas/:id', viviendas.delete);

    app.use('/api/viviendas', router);*/

};