const Autores = require('../models/autores.model');

const getAll = async (req, res) => {
    const { page = 1, limit = 5 } = req.query;

    const autores = await Autores.selectAll(Number(page), Number(limit));
    res.json({
        page,
        limit,
        results: autores
    });
}


const getById = async (req, res) => {
    const { autorId } = req.params;

    const autor = await Autores.selectById(autorId);
    if (!autor) return res.status(404).json({ message: 'El ID del autor no existe' });

    res.json(autor);
}


const create = async (req, res) => {
    const result = await Autores.insert(req.body);
    res.json(result);
}

module.exports = { getAll, getById, create }