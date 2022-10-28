const Tourists = require("../data/tourists.json");

// Retrieve all tourists
exports.findAll = (req, res) => {

    res.json(Tourists);
    
}