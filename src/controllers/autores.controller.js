const Autores = require('../models/autores.model');

const getAll = async (req, res) => {
    const autores = await Autores.selectAll();
    res.json(autores);
}

module.exports = { getAll }