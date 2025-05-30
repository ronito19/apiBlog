const db = require('../config/db');

// SELECT * FROM apiblog/posts;
const selectAll = async (page, limit) => {
    const [result] = await db.query(`
        select * from apiblog.posts
        limit ?
        offset ?
    `, [limit, (page - 1) * limit]);
    return result;
}


/**
 * Obtiene un post por su ID.
 * 
 * @async
 * @function selectById
 * @param {number} postId - El ID del post que se desea obtener.
 * @returns {Promise<Object|null>} Un objeto con los datos del post si se encuentra, o `null` si no existe.
 * 
 * @throws {Error} Si ocurre un error durante la consulta a la base de datos.
 */
const selectById = async (postId) => {
    const [result] = await db.query('select * from posts where id = ?', [postId])
    if (result.length === 0) return null;
    return result[0];
}


module.exports = { selectAll, selectById };