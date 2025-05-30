const Posts = require('../models/posts.model');

const getAll = async (req, res) => {
    const { page = 1, limit = 5 } = req.query;

    const posts = await Posts.selectAll(Number(page), Number(limit));
    res.json({
        page,
        limit,
        result: posts
    });
}


const getById = async (req, res) => {
    const { postId } = req.params;

    const post = await Posts.selectById(postId);
    if (!post) return res.status(404).json({ message: 'El ID del post no existe' });

    res.json(post);
}

module.exports = { getAll, getById }