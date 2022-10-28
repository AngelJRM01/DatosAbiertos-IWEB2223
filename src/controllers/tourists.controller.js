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