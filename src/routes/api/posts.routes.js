const router = require('express').Router();

const { getAll } = require('../../controllers/posts.controller');

// GET /api/posts
router.get('/', getAll);

module.exports = router;