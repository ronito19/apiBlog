const router = require('express').Router();

const { getAll, getById, create } = require('../../controllers/posts.controller');

// GET /apiblog/posts
router.get('/', getAll);
router.get('/:postId', getById);

router.post('/', create)

module.exports = router;