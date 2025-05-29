const db = require('../config/db');

// SELECT * FROM apiblog/posts;
const selectAll = async () => {
    const [result] = await db.query('select * from apiblog.posts');
    return result;
}


module.exports = { selectAll };