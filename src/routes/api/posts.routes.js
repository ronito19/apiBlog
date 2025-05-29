const router = require('express').Router();

const { getAll, getById } = require('../../controllers/posts.controller');

// GET /apiblog/posts
router.get('/', getAll);
router.get('/:postId', getById);

module.exports = router;