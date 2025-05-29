const Posts = require('../models/posts.model');

const getAll = async (req, res) => {
    const posts = await Posts.selectAll();
    res.json(posts);
}

module.exports = { getAll }