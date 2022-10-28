const Tourists = require("../data/tourists.json");

// Retrieve all tourists
exports.findAll = (req, res) => {

    res.json(Tourists);
    
}

exports.findByComunidadAutonoma = (req, res) => {
    var date = new Date();
    const { comunidadAutonoma, mes } = req.params;
            
    const tourists = Tourists.filter( t => t.MetaData.map(item => item.Id).includes(16420) && t.MetaData.map(item => item.Id).includes(291971)
        && t.MetaData.map(item => item.Nombre).includes(comunidadAutonoma))[0].Data.filter( d => d.Anyo == (date.getFullYear() - 1).toString() && d.T3_Periodo === mes)[0].Valor;
    
    res.json(tourists);
}

exports.findTripDuration = (req, res) => {
    const { origen, comunidadAutonoma, mes } = req.params;

    var filterByDuration = function(tourist) { return tourist.MetaData[0].Nombre == "Duración media de los viajes" };
    var filterByComunidadAutonoma = function(tourist) { return tourist.MetaData[3].Nombre == comunidadAutonoma };
    var filterByOrigen = function(tourist) { return tourist.MetaData[1].Nombre == origen };
    var filterByFecha = function(month) { return month.T3_Periodo == mes && month.Anyo == 2021 };

    const duration = Tourists.filter(filterByDuration).filter(filterByComunidadAutonoma).filter(filterByOrigen)[0]
                        .Data.filter(filterByFecha)[0].Valor;

    res.json(duration);
} 