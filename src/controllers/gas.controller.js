//const Gas = require("../models/Gas.model");
const Gas = require("../data/gas.json");

// Retrieve all gas
exports.findAll = (req, res) => {

    res.json(Gas);
    
}

exports.findByLocalidad = (req, res) => {

    const localidad = req.params.localidad;
    const gas = Gas.ListaEESSPrecio.filter( g => g.Localidad == localidad).map( g => {
        return {
            "Dirección": g.Dirección,
            "Rótulo": g.Rótulo,
            "Precio Gasolina 95 E5" : g["Precio Gasolina 95 E5"]
            };
    });
    
    res.json(gas);
}

exports.findCheaperInLocalidad = (req, res) => {
    
    const localidad = req.params.localidad;

    const tipoGasolina = "Precio " + req.params.tipoGasolina;

    var gas = Gas.ListaEESSPrecio.filter( g => g.Localidad == localidad);

    var min = gas[0][tipoGasolina];

    gas.forEach(g => {
        if(min > g[tipoGasolina] && g[tipoGasolina] != ""){
            min = g[tipoGasolina];
        }
    });

    gas = gas.filter(g => g[tipoGasolina] == min).map(g => {
        return {
            "Dirección": g.Dirección,
            "Rótulo": g.Rótulo,
            tipoGasolina : g[tipoGasolina]
            };
    });


    res.json(gas);
}

exports.findCoordinates = (req, res) => {

    const latitud = parseFloat(req.params.latitud);
    const longitud = parseFloat(req.params.longitud);
    const gradoAproximacion = parseFloat(req.params.gradoAproximacion);
    console.log(latitud)
    console.log(longitud)
    console.log(gradoAproximacion)
    console.log(latitud+gradoAproximacion)
    console.log(latitud-gradoAproximacion)
    console.log(latitud+gradoAproximacion >= latitud)
    console.log(latitud-gradoAproximacion <= latitud)

    const gas = Gas.ListaEESSPrecio.filter( g => (
        parseFloat(g.latitud)+gradoAproximacion >= latitud && 
        parseFloat(g.latitud)-gradoAproximacion <= latitud  )
        ).map(g => {
            return {
                "Dirección": g.Dirección,
                "Rótulo": g.Rótulo,
                "Precio Gasolina 95 E5" : g["Precio Gasolina 95 E5"]
                };
        })
    



    res.json(gas);

}

