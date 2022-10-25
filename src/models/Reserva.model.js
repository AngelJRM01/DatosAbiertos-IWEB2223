const {Schema, model} = require('mongoose');

const Estancia = {
    fechaInicio : Date,
    fechaFinal : Date
}

const Persona = {
    id : String,
    nombre : String
}

const Vivienda = {
    id : String,
    nombre : String
}

const ReservaSchema = new Schema({
    fecha: {
        type: Date,
        required: true
    },
    estancia: {
        type: Estancia,
        required: true
    },
    persona: {
        type: Persona,
        required: true
    },
    numeroPersonas: {
        type: Number,
        required: true
    },
    vivienda: {
        type: Vivienda,
        required: true
    }
});

module.exports = model('Reserva', ReservaSchema);