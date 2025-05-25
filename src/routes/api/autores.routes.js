const router = require('express').Router();

const { getAll } = require('../../controllers/autores.controller');

// GET /api/autores
router.get('/', getAll)

module.exports = router;