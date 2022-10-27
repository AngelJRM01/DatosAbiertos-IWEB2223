const {Schema, model} = require('mongoose');

const Estancia = {
    fechaInicio : Date,
    fechaFinal : Date
}

const Huesped = {
    nombre : String,
    foto : String
}

const Vivienda = {
    titulo : String,
    direccion : String,
    imagenes : [String]
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
    huesped: {
        type: Huesped,
        required: true
    },
    ocupantes: {
        type: Number,
        required: true
    },
    vivienda: {
        type: Vivienda,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = model('Reserva', ReservaSchema);