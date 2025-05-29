const Autores = require('../models/autores.model');

const getAll = async (req, res) => {
    const autores = await Autores.selectAll();
    res.json(autores);
}


const getById = async (req, res) => {
    const { autorId } = req.params;

    const autor = await Autores.selectById(autorId);
    if (!autor) return res.status(404).json({ message: 'El ID del autor no existe' });

    res.json(autor);
}

module.exports = { getAll, getById }