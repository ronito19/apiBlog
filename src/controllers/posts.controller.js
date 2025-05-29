const Posts = require('../models/posts.model');

const getAll = async (req, res) => {
    const posts = await Posts.selectAll();
    res.json(posts);
}


const getById = async (req, res) => {
    const { postId } = req.params;

    const post = await Posts.selectById(postId);
    if (!post) return res.status(404).json({ message: 'El ID del post no existe' });

    res.json(post);
}

module.exports = { getAll, getById }