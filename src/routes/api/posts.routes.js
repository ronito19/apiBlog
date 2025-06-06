const router = require('express').Router();

const { getAll, getById, create, getByAuthor } = require('../../controllers/posts.controller');

// GET /apiblog/posts
router.get('/', getAll);
router.get('/:postId', getById);

router.post('/', create)

router.get('/author/:autorId', getByAuthor);

module.exports = router;